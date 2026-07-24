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
