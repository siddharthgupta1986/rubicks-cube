(() => {
  'use strict';

  const states = Object.freeze(['patrol', 'detection', 'pursuit', 'search', 'return']);

  function hasLineOfSight(from, to, solids, completedIds = []) {
    const completed = new Set(completedIds);
    const dx = to.x - from.x;
    const dz = to.z - from.z;
    const blocked = solids.some(solid => {
      if (!solid.collision || solid.maximum[1] < 1.1) return false;
      if (solid.opensWith && completed.has(solid.opensWith)) return false;
      let minimumTime = 0;
      let maximumTime = 1;
      for (const [origin, direction, minimum, maximum] of [
        [from.x, dx, solid.minimum[0], solid.maximum[0]],
        [from.z, dz, solid.minimum[2], solid.maximum[2]]
      ]) {
        if (Math.abs(direction) < .0001) {
          if (origin < minimum || origin > maximum) return false;
          continue;
        }
        const first = (minimum - origin) / direction;
        const second = (maximum - origin) / direction;
        minimumTime = Math.max(minimumTime, Math.min(first, second));
        maximumTime = Math.min(maximumTime, Math.max(first, second));
        if (minimumTime > maximumTime) return false;
      }
      return maximumTime > .02 && minimumTime < .98;
    });
    return !blocked;
  }

  function chooseSafeSpawn(candidates, actors, minimumDistance = 4) {
    return candidates.find(candidate => actors.every(actor => Math.hypot(candidate.x - actor.x, candidate.z - actor.z) >= minimumDistance)) || null;
  }

  function createSimulation(definitions, options = {}) {
    const detectionGraceMs = options.detectionGraceMs || 900;
    const searchDurationMs = options.searchDurationMs || 4200;
    const actors = definitions.map(definition => ({
      id: definition.id,
      route: definition.route.map(point => ({ x: point.x, z: point.z })),
      speed: definition.speed || 1.25,
      state: 'patrol',
      routeIndex: 1 % definition.route.length,
      x: definition.route[0].x,
      z: definition.route[0].z,
      headingX: 0,
      headingZ: -1,
      stateElapsedMs: 0,
      lastKnown: null
    }));

    function moveToward(actor, target, distance) {
      const dx = target.x - actor.x;
      const dz = target.z - actor.z;
      const remaining = Math.hypot(dx, dz);
      if (!remaining || remaining <= distance) {
        if (remaining) {
          actor.headingX = dx / remaining;
          actor.headingZ = dz / remaining;
        }
        actor.x = target.x;
        actor.z = target.z;
        return true;
      }
      actor.headingX = dx / remaining;
      actor.headingZ = dz / remaining;
      actor.x += dx / remaining * distance;
      actor.z += dz / remaining * distance;
      return false;
    }

    function setState(actor, state) {
      if (!states.includes(state)) throw new Error(`Unknown Wraith state: ${state}`);
      actor.state = state;
      actor.stateElapsedMs = 0;
    }

    function nearestRouteIndex(actor) {
      let nearest = 0;
      let nearestDistance = Infinity;
      actor.route.forEach((point, index) => {
        const distance = Math.hypot(actor.x - point.x, actor.z - point.z);
        if (distance < nearestDistance) {
          nearest = index;
          nearestDistance = distance;
        }
      });
      return nearest;
    }

    function updateActor(actor, elapsedMs, context) {
      actor.stateElapsedMs += elapsedMs;
      const travel = actor.speed * elapsedMs / 1000;
      if (actor.state === 'patrol') {
        if (moveToward(actor, actor.route[actor.routeIndex], travel)) actor.routeIndex = (actor.routeIndex + 1) % actor.route.length;
      } else if (actor.state === 'detection') {
        if (actor.stateElapsedMs >= detectionGraceMs) setState(actor, 'pursuit');
      } else if (actor.state === 'pursuit') {
        const target = context.player || actor.lastKnown;
        if (target) {
          actor.lastKnown = { x: target.x, z: target.z };
          moveToward(actor, target, travel);
        }
      } else if (actor.state === 'search') {
        if (actor.lastKnown) moveToward(actor, actor.lastKnown, travel * .7);
        if (actor.stateElapsedMs >= searchDurationMs) {
          actor.routeIndex = nearestRouteIndex(actor);
          setState(actor, 'return');
        }
      } else if (actor.state === 'return' && moveToward(actor, actor.route[actor.routeIndex], travel)) {
        actor.routeIndex = (actor.routeIndex + 1) % actor.route.length;
        actor.lastKnown = null;
        setState(actor, 'patrol');
      }
    }

    function update(elapsedMs, context = {}) {
      if (context.paused || !Number.isFinite(elapsedMs) || elapsedMs <= 0) return snapshot();
      const boundedMs = Math.min(elapsedMs, 100);
      actors.forEach(actor => updateActor(actor, boundedMs, context));
      return snapshot();
    }

    function signal(id, event, payload = {}) {
      const actor = actors.find(item => item.id === id);
      if (!actor) return false;
      if (payload.position) actor.lastKnown = { x: payload.position.x, z: payload.position.z };
      if (event === 'notice') setState(actor, 'detection');
      else if (event === 'confirm') setState(actor, 'pursuit');
      else if (event === 'lost') setState(actor, 'search');
      else if (event === 'return') {
        actor.routeIndex = nearestRouteIndex(actor);
        setState(actor, 'return');
      } else if (event === 'reset') {
        actor.x = actor.route[0].x;
        actor.z = actor.route[0].z;
        actor.routeIndex = 1 % actor.route.length;
        actor.headingX = 0;
        actor.headingZ = -1;
        actor.lastKnown = null;
        setState(actor, 'patrol');
      } else return false;
      return true;
    }

    function snapshot() {
      return actors.map(actor => ({
        id: actor.id,
        state: actor.state,
        x: Number(actor.x.toFixed(3)),
        z: Number(actor.z.toFixed(3)),
        headingX: Number(actor.headingX.toFixed(3)),
        headingZ: Number(actor.headingZ.toFixed(3)),
        routeIndex: actor.routeIndex,
        stateElapsedMs: actor.stateElapsedMs,
        lastKnown: actor.lastKnown ? { ...actor.lastKnown } : null
      }));
    }

    return Object.freeze({ update, signal, snapshot });
  }

  globalThis.CubeWardenWraiths = Object.freeze({ chooseSafeSpawn, createSimulation, hasLineOfSight, states });
})();
