'use strict';

require('../archive-state.js');

const assert = require('node:assert/strict');
const sealIds = [
  'gatehouse',
  'compass-hall',
  'chapel-steps',
  'mirror-bridge',
  'lantern-rooms',
  'flooded-archive',
  'gearworks',
  'furnace-passage',
  'observatory',
  'clock-tower',
  'wardens-door',
  'dawn-vault'
];
const model = globalThis.CubeWardenArchiveState.createModel(sealIds, { version: 2 });
const spawnCatalog = Object.fromEntries([
  ['archive-entrance', { x: 0, z: 3.35, yaw: 0 }],
  ...sealIds.map((id, index) => [id, { x: index * 2, z: -8 - index * 6, yaw: index / 10 }])
]);

function fakeStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem: key => values.has(key) ? values.get(key) : null,
    setItem: (key, value) => values.set(key, String(value)),
    removeItem: key => values.delete(key),
    snapshot: () => Object.fromEntries(values)
  };
}

const fresh = model.sanitize(null);
assert.deepEqual(fresh, model.defaultState());
assert.deepEqual(model.resolveSpawn(fresh, spawnCatalog), { id: 'archive-entrance', x: 0, z: 3.35, yaw: 0 });

for (const malformed of [
  '{',
  JSON.stringify({ version: 1, completedSealIds: sealIds }),
  JSON.stringify({ version: 2, completedSealIds: ['dawn-vault'], accessibility: { pursuit: 'impossible' } })
]) {
  const storage = fakeStorage({ archive: malformed, legacy: 'preserve-me' });
  const loaded = model.load(storage, 'archive');
  assert.equal(loaded.completedSealIds.length, 0);
  assert.equal(loaded.accessibility.pursuit, 'standard');
  assert.equal(storage.snapshot().legacy, 'preserve-me');
}

for (let completedCount = 0; completedCount <= sealIds.length; completedCount += 1) {
  const completedSealIds = sealIds.slice(0, completedCount);
  const state = model.sanitize({
    version: 2,
    checkpointSealId: 'untrusted-value',
    completedSealIds,
    bestMoveCounts: Object.fromEntries(completedSealIds.map((id, index) => [id, index + 1])),
    discoveries: ['first-lore', 'first-lore', 'INVALID DISCOVERY'],
    accessibility: { pursuit: completedCount % 2 ? 'slow' : 'off' },
    storyCompleted: completedCount === sealIds.length,
    updatedAt: '2026-07-24T00:00:00.000Z'
  });
  const expectedCheckpoint = completedSealIds.at(-1) || 'archive-entrance';
  assert.equal(state.checkpointSealId, expectedCheckpoint);
  assert.deepEqual(state.completedSealIds, completedSealIds);
  assert.deepEqual(state.discoveries, ['first-lore']);
  assert.equal(state.storyCompleted, completedCount === sealIds.length);
  assert.equal(model.resolveSpawn(state, spawnCatalog).id, expectedCheckpoint);

  const storage = fakeStorage({ legacy: 'preserve-me', academy: 'preserve-me-too' });
  const saved = model.save(storage, 'archive', state);
  const reloaded = model.load(storage, 'archive');
  assert.deepEqual(reloaded, saved);
  assert.equal(storage.snapshot().legacy, 'preserve-me');
  assert.equal(storage.snapshot().academy, 'preserve-me-too');

  const captureSpawn = model.resolveSpawn(reloaded, spawnCatalog);
  assert.equal(captureSpawn.x, spawnCatalog[expectedCheckpoint].x);
  assert.equal(captureSpawn.z, spawnCatalog[expectedCheckpoint].z);
}

const resetStorage = fakeStorage({ archive: JSON.stringify({ version: 2 }), legacy: 'preserve-me' });
assert.deepEqual(model.reset(resetStorage, 'archive'), model.defaultState());
assert.equal(resetStorage.getItem('archive'), null);
assert.equal(resetStorage.getItem('legacy'), 'preserve-me');

console.log('Archive state fixtures passed: fresh, malformed, 13 checkpoints, refresh, capture, completion, and storage isolation.');
