'use strict';

require('../archive-wraith.js');
const assert = require('node:assert/strict');

const definitions = [{ id: 'ash-wraith', speed: 2, route: [{ x: 0, z: 0 }, { x: 4, z: 0 }, { x: 4, z: -4 }] }];
const simulation = globalThis.CubeWardenWraiths.createSimulation(definitions, {
  detectionGraceMs: 500,
  searchDurationMs: 600
});
const wall = { collision: true, minimum: [1, 0, -1], maximum: [2, 4, 1] };
const lowDais = { collision: true, minimum: [1, 0, -1], maximum: [2, .8, 1] };
const door = { ...wall, opensWith: 'gatehouse' };
assert.equal(globalThis.CubeWardenWraiths.hasLineOfSight({ x: 0, z: 0 }, { x: 4, z: 0 }, [wall]), false);
assert.equal(globalThis.CubeWardenWraiths.hasLineOfSight({ x: 0, z: 3 }, { x: 4, z: 3 }, [wall]), true);
assert.equal(globalThis.CubeWardenWraiths.hasLineOfSight({ x: 0, z: 0 }, { x: 4, z: 0 }, [lowDais]), true);
assert.equal(globalThis.CubeWardenWraiths.hasLineOfSight({ x: 0, z: 0 }, { x: 4, z: 0 }, [door], ['gatehouse']), true);
assert.deepEqual(globalThis.CubeWardenWraiths.chooseSafeSpawn(
  [{ id: 'unsafe', x: 0, z: 0 }, { id: 'safe', x: 8, z: 0 }],
  [{ x: 1, z: 0 }],
  4
), { id: 'safe', x: 8, z: 0 });
assert.equal(globalThis.CubeWardenWraiths.chooseSafeSpawn([{ x: 0, z: 0 }], [{ x: 1, z: 0 }], 4), null);
const standardPursuit = globalThis.CubeWardenWraiths.createSimulation(definitions);
const slowPursuit = globalThis.CubeWardenWraiths.createSimulation(definitions);
standardPursuit.signal('ash-wraith', 'confirm', { position: { x: 4, z: 0 } });
slowPursuit.signal('ash-wraith', 'confirm', { position: { x: 4, z: 0 } });
standardPursuit.update(100, { pursuitScale: 1 });
slowPursuit.update(100, { pursuitScale: .55 });
assert.ok(standardPursuit.snapshot()[0].x > slowPursuit.snapshot()[0].x);

assert.deepEqual(simulation.snapshot()[0], {
  id: 'ash-wraith', state: 'patrol', x: 0, z: 0, headingX: 0, headingZ: -1, routeIndex: 1, stateElapsedMs: 0, lastKnown: null
});
simulation.update(100);
assert.equal(simulation.snapshot()[0].x, .2);
assert.equal(simulation.snapshot()[0].headingX, 1);
const paused = simulation.snapshot();
simulation.update(1000, { paused: true });
assert.deepEqual(simulation.snapshot(), paused);

assert.equal(simulation.signal('ash-wraith', 'notice', { position: { x: 2, z: -2 } }), true);
simulation.update(400);
assert.equal(simulation.snapshot()[0].state, 'detection');
for (let index = 0; index < 4; index += 1) simulation.update(100);
assert.equal(simulation.snapshot()[0].state, 'pursuit');
simulation.update(100, { player: { x: 3, z: -2 } });
assert.deepEqual(simulation.snapshot()[0].lastKnown, { x: 3, z: -2 });

simulation.signal('ash-wraith', 'lost', { position: { x: 3, z: -2 } });
for (let index = 0; index < 6; index += 1) simulation.update(100);
assert.equal(simulation.snapshot()[0].state, 'return');
for (let index = 0; index < 100 && simulation.snapshot()[0].state !== 'patrol'; index += 1) simulation.update(100);
assert.equal(simulation.snapshot()[0].state, 'patrol');

simulation.signal('ash-wraith', 'confirm', { position: { x: 9, z: 9 } });
simulation.signal('ash-wraith', 'reset');
assert.deepEqual(simulation.snapshot()[0], {
  id: 'ash-wraith', state: 'patrol', x: 0, z: 0, headingX: 0, headingZ: -1, routeIndex: 1, stateElapsedMs: 0, lastKnown: null
});
assert.equal(simulation.signal('missing', 'notice'), false);

console.log('Wraith fixtures passed: deterministic patrol, bounded updates, pause, detection, pursuit, search, return, and reset.');
