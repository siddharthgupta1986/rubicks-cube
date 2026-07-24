(() => {
  'use strict';

  function createModel(sealIds, options = {}) {
    const orderedSealIds = Object.freeze([...sealIds]);
    const knownSealIds = new Set(orderedSealIds);
    const version = Number.isInteger(options.version) ? options.version : 2;
    const entranceId = typeof options.entranceId === 'string' ? options.entranceId : 'archive-entrance';

    function defaultState() {
      return {
        version,
        checkpointSealId: entranceId,
        completedSealIds: [],
        bestMoveCounts: {},
        discoveries: [],
        accessibility: { pursuit: 'standard' },
        storyCompleted: false,
        updatedAt: ''
      };
    }

    function sanitize(value) {
      if (!value || value.version !== version) return defaultState();
      const requested = new Set(Array.isArray(value.completedSealIds)
        ? value.completedSealIds.filter(id => knownSealIds.has(id))
        : []);
      const completedSealIds = [];
      for (const sealId of orderedSealIds) {
        if (!requested.has(sealId)) break;
        completedSealIds.push(sealId);
      }
      const bestMoveCounts = {};
      if (value.bestMoveCounts && typeof value.bestMoveCounts === 'object' && !Array.isArray(value.bestMoveCounts)) {
        Object.entries(value.bestMoveCounts).forEach(([id, count]) => {
          if (completedSealIds.includes(id) && Number.isInteger(count) && count > 0) bestMoveCounts[id] = count;
        });
      }
      const discoveries = [...new Set(Array.isArray(value.discoveries)
        ? value.discoveries.filter(id => typeof id === 'string' && /^[a-z0-9-]{1,64}$/.test(id))
        : [])].slice(0, 64);
      const pursuit = ['standard', 'slow', 'off'].includes(value.accessibility?.pursuit)
        ? value.accessibility.pursuit
        : 'standard';
      const completed = completedSealIds.length === orderedSealIds.length;
      return {
        version,
        checkpointSealId: completedSealIds.at(-1) || entranceId,
        completedSealIds,
        bestMoveCounts,
        discoveries,
        accessibility: { pursuit },
        storyCompleted: completed && value.storyCompleted === true,
        updatedAt: typeof value.updatedAt === 'string' && !Number.isNaN(Date.parse(value.updatedAt))
          ? value.updatedAt
          : ''
      };
    }

    function serialize(value) {
      const sanitized = sanitize({
        ...value,
        version,
        completedSealIds: Array.isArray(value?.completedSealIds) ? value.completedSealIds : [],
        updatedAt: typeof value?.updatedAt === 'string' ? value.updatedAt : ''
      });
      return {
        ...sanitized,
        bestMoveCounts: { ...sanitized.bestMoveCounts },
        discoveries: sanitized.discoveries.slice(),
        accessibility: { ...sanitized.accessibility }
      };
    }

    function load(storage, key) {
      try {
        return sanitize(JSON.parse(storage.getItem(key) || 'null'));
      } catch (error) {
        return defaultState();
      }
    }

    function save(storage, key, value) {
      const record = serialize(value);
      storage.setItem(key, JSON.stringify(record));
      return record;
    }

    function reset(storage, key) {
      storage.removeItem(key);
      return defaultState();
    }

    function resolveSpawn(value, spawnCatalog) {
      const state = sanitize(value);
      const fallback = spawnCatalog[entranceId];
      const spawn = spawnCatalog[state.checkpointSealId] || fallback;
      if (!spawn) throw new Error(`Spawn catalog must define ${entranceId}.`);
      return {
        id: state.checkpointSealId in spawnCatalog ? state.checkpointSealId : entranceId,
        x: Number(spawn.x),
        z: Number(spawn.z),
        yaw: Number(spawn.yaw)
      };
    }

    return Object.freeze({
      version,
      sealIds: orderedSealIds,
      entranceId,
      defaultState,
      sanitize,
      serialize,
      load,
      save,
      reset,
      resolveSpawn
    });
  }

  globalThis.CubeWardenArchiveState = Object.freeze({ createModel });
})();
