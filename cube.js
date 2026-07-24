(() => {
  'use strict';

  const faces = {
    F: { n: [0, 0, 1], color: 'green', location: (r, c) => [c - 1, 1 - r, 1] },
    B: { n: [0, 0, -1], color: 'blue', location: (r, c) => [1 - c, 1 - r, -1] },
    U: { n: [0, 1, 0], color: 'white', location: (r, c) => [c - 1, 1, r - 1] },
    D: { n: [0, -1, 0], color: 'yellow', location: (r, c) => [c - 1, -1, 1 - r] },
    R: { n: [1, 0, 0], color: 'red', location: (r, c) => [1, 1 - r, 1 - c] },
    L: { n: [-1, 0, 0], color: 'orange', location: (r, c) => [-1, 1 - r, c - 1] }
  };
  const cube = document.getElementById('cube');
  const viewport = document.getElementById('cube-viewport');
  const storyShell = document.getElementById('story-shell');
  const storyPrimary = document.getElementById('story-primary');
  const storyLocation = document.getElementById('story-location');
  const storyIntro = document.querySelector('.story-intro');
  const storyMenuToggle = document.getElementById('story-menu-toggle');
  const storyMenu = document.getElementById('story-menu');
  const storyMenuClose = document.getElementById('story-menu-close');
  const storyNewGame = document.getElementById('story-new-game');
  const storyFieldKit = document.getElementById('story-field-kit');
  const storyShellStatus = document.getElementById('story-shell-status');
  const fieldKitContent = document.getElementById('field-kit-content');
  const fieldKitCube = document.getElementById('field-kit-cube');
  const fieldKitExit = document.getElementById('field-kit-exit');
  const shuffleButton = document.getElementById('shuffle');
  const dailyChallengeButton = document.getElementById('daily-challenge');
  const speedrunToggle = document.getElementById('speedrun-toggle');
  const speedrun = document.getElementById('speedrun');
  const speedrunTime = document.getElementById('speedrun-time');
  const speedrunMoves = document.getElementById('speedrun-moves');
  const speedrunStart = document.getElementById('speedrun-start');
  const speedrunReset = document.getElementById('speedrun-reset');
  const speedrunInspection = document.getElementById('speedrun-inspection');
  const speedrunClear = document.getElementById('speedrun-clear');
  const speedrunStatsSummary = document.getElementById('speedrun-stats-summary');
  const missionsToggle = document.getElementById('missions-toggle');
  const missions = document.getElementById('missions');
  const missionsClose = document.getElementById('missions-close');
  const missionList = document.getElementById('mission-list');
  const replaysToggle = document.getElementById('replays-toggle');
  const replays = document.getElementById('replays');
  const replaysClose = document.getElementById('replays-close');
  const replaySave = document.getElementById('replay-save');
  const replayList = document.getElementById('replay-list');
  const algorithmsToggle = document.getElementById('algorithms-toggle');
  const algorithms = document.getElementById('algorithms');
  const algorithmsClose = document.getElementById('algorithms-close');
  const algorithmCategory = document.getElementById('algorithm-category');
  const algorithmList = document.getElementById('algorithm-list');
  const stateToggle = document.getElementById('state-toggle');
  const stateTools = document.getElementById('state-tools');
  const stateClose = document.getElementById('state-close');
  const stateExport = document.getElementById('state-export');
  const stateCopy = document.getElementById('state-copy');
  const stateInput = document.getElementById('state-input');
  const stateImport = document.getElementById('state-import');
  const stateReset = document.getElementById('state-reset');
  const progressToggle = document.getElementById('progress-toggle');
  const progressPanel = document.getElementById('progress');
  const progressClose = document.getElementById('progress-close');
  const progressClear = document.getElementById('progress-clear');
  const progressSummary = document.getElementById('progress-summary');
  const progressMonthInput = document.getElementById('progress-month-input');
  const progressCalendar = document.getElementById('progress-calendar');
  const inputToggle = document.getElementById('input-toggle');
  const inputHelp = document.getElementById('input-help');
  const inputClose = document.getElementById('input-close');
  const inputHelpList = document.getElementById('input-help-list');
  const achievementsToggle = document.getElementById('achievements-toggle');
  const achievements = document.getElementById('achievements');
  const achievementsClose = document.getElementById('achievements-close');
  const achievementsReset = document.getElementById('achievements-reset');
  const cameraStatus = document.getElementById('camera-status');
  const feedbackSound = document.getElementById('feedback-sound');
  const feedbackVibration = document.getElementById('feedback-vibration');
  const feedbackIntensity = document.getElementById('feedback-intensity');
  const feedbackStatus = document.getElementById('feedback-status');
  const scrambleLength = document.getElementById('scramble-length');
  const scrambleSeed = document.getElementById('scramble-seed');
  const scrambleFaceMode = document.getElementById('scramble-face-mode');
  const scrambleDoubles = document.getElementById('scramble-doubles');
  const scrambleGenerate = document.getElementById('scramble-generate');
  const scrambleApply = document.getElementById('scramble-apply');
  const scrambleCopy = document.getElementById('scramble-copy');
  const scramblePreview = document.getElementById('scramble-preview');
  const playerOneName = document.getElementById('player-one-name');
  const playerTwoName = document.getElementById('player-two-name');
  const twoPlayerStart = document.getElementById('two-player-start');
  const twoPlayerNext = document.getElementById('two-player-next');
  const twoPlayerEnd = document.getElementById('two-player-end');
  const twoPlayerReset = document.getElementById('two-player-reset');
  const twoPlayerStatus = document.getElementById('two-player-status');
  const twoPlayerTime = document.getElementById('two-player-time');
  const twoPlayerScore = document.getElementById('two-player-score');
  const twoPlayerHistoryClear = document.getElementById('two-player-history-clear');
  const twoPlayerHistoryList = document.getElementById('two-player-history');
  const achievementList = document.getElementById('achievement-list');
  const dailyResult = document.getElementById('daily-result');
  const dailyResultSummary = document.getElementById('daily-result-summary');
  const dailyShareButton = document.getElementById('daily-share');
  const celebration = document.getElementById('celebration');
  const solveButton = document.getElementById('solve');
  const controls = document.getElementById('turn-controls');
  const status = document.getElementById('status');
  const tutorToggle = document.getElementById('tutor-toggle');
  const themeSelect = document.getElementById('theme-select');
  const tutor = document.getElementById('tutor');
  const tutorTitle = document.getElementById('tutor-title');
  const tutorGoal = document.getElementById('tutor-goal');
  const tutorBody = document.getElementById('tutor-body');
  const tutorOrientation = document.getElementById('tutor-orientation');
  const tutorTip = document.getElementById('tutor-tip');
  const tutorMoves = document.getElementById('tutor-moves');
  const tutorCount = document.getElementById('tutor-count');
  const tutorPrevious = document.getElementById('tutor-prev');
  const tutorNext = document.getElementById('tutor-next');
  const tutorDemo = document.getElementById('tutor-demo');
  const academyDeck = document.getElementById('academy-deck');
  const academyDeckTitle = document.getElementById('academy-deck-title');
  const academyDeckDescription = document.getElementById('academy-deck-description');
  const academyContinue = document.getElementById('academy-continue');
  const academyRank = document.getElementById('academy-rank');
  const academyProgressBar = document.getElementById('academy-progress-bar');
  const academyScreen = document.getElementById('academy-screen');
  const academyNavButtons = [...document.querySelectorAll('[data-academy-screen]')];
  const academyHud = document.getElementById('academy-hud');
  const academyHudTitle = document.getElementById('academy-hud-title');
  const academyHudStatus = document.getElementById('academy-hud-status');
  const academyExit = document.getElementById('academy-exit');
  const faceElements = [...document.querySelectorAll('[data-face]')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dailyStorageKey = 'rubiks-cube.daily-challenge.v1';
  const speedrunStorageKey = 'rubiks-cube.speedrun.v1';
  const themeStorageKey = 'rubiks-cube.theme.v1';
  const missionStorageKey = 'rubiks-cube.missions.v1';
  const replayStorageKey = 'rubiks-cube.replays.v1';
  const algorithmStorageKey = 'rubiks-cube.algorithms.v1';
  const progressStorageKey = 'rubiks-cube.progress.v1';
  const achievementStorageKey = 'rubiks-cube.achievements.v1';
  const feedbackStorageKey = 'rubiks-cube.feedback.v1';
  const twoPlayerHistoryStorageKey = 'rubiks-cube.two-player-history.v1';
  const academyStorageKey = 'rubiks-cube.academy.v1';
  const storyStorageKey = 'rubiks-cube.story.v1';
  const keyboardShortcuts = Object.freeze({
    'r': 'R', 'u': 'U', 'f': 'F', 'd': 'D', 'l': 'L', 'b': 'B',
    'R': "R'", 'U': "U'", 'F': "F'", 'D': "D'", 'L': "L'", 'B': "B'"
  });
  const gamepadShortcuts = Object.freeze({ 0: 'R', 1: 'U', 2: "R'", 3: "U'", 4: 'F', 5: "F'" });
  const achievementCatalog = [
    { id: 'first-solve', title: 'First solve', description: 'Complete your first solved cube.', rule: { type: 'solved', count: 1 } },
    { id: 'daily-three', title: 'Three-day rhythm', description: 'Complete activities on three different dates.', rule: { type: 'activeDays', count: 3 } },
    { id: 'mission-one', title: 'Mission accepted', description: 'Complete your first mini mission.', rule: { type: 'mission', count: 1 } },
    { id: 'algorithm-five', title: 'Notation fluent', description: 'Practice any algorithm five times.', rule: { type: 'algorithmPractice', count: 5 } },
    { id: 'replay-saved', title: 'Keep the receipt', description: 'Save your first solve replay.', rule: { type: 'replay', count: 1 } },
    { id: 'keyboard-turn', title: 'Hands off the mouse', description: 'Use a keyboard face turn.', rule: { type: 'keyboard', count: 1 } }
  ];
  const cubeStateVersion = 1;
  const replayVersion = 1;
  const cameraPresets = Object.freeze({
    solved: Object.freeze({ label: 'Solved view', x: -28, y: 36 }),
    front: Object.freeze({ label: 'Front view', x: 0, y: 0 }),
    top: Object.freeze({ label: 'Top view', x: -78, y: 0 }),
    cross: Object.freeze({ label: 'Cross-training view', x: -20, y: -42 }),
    reset: Object.freeze({ label: 'Reset view', x: -28, y: 36 })
  });
  let stickers = [];
  let history = [];
  let busy = false;
  let dailyChallengeActive = false;
  let dailyChallengePreparing = false;
  let dailyChallengeStartedAt = 0;
  let dailyChallengePlayerMoves = 0;
  let dailyChallengeDateKey = '';
  let dailyResults = {};
  let speedrunState = 'idle';
  let speedrunStartedAt = 0;
  let speedrunTimerId = 0;
  let speedrunInspectionId = 0;
  let speedrunInspectionEndsAt = 0;
  let speedrunMoveCount = 0;
  let speedrunSetup = false;
  let speedrunRecords = [];
  let celebrationTimeout = 0;
  let activeMission = null;
  let missionPreparing = false;
  let missionProgress = {};
  let replayRecords = [];
  let selectedAlgorithmCategory = 'all';
  let algorithmProgress = {};
  let progressEvents = [];
  let achievementState = {};
  let feedbackPreferences = {};
  let audioContext = null;
  let lastVibrationAt = 0;
  let gamepadTimerId = 0;
  let gamepadButtons = [];
  let rotation = { x: -28, y: 36 };
  let pointer = null;
  let studioMoves = [];
  let twoPlayerState = { phase: 'idle', players: [{ name: 'Player 1', score: 0 }, { name: 'Player 2', score: 0 }], activeIndex: 0, startedAt: 0, moves: [0, 0], timesMs: [0, 0], winner: '' };
  let twoPlayerTimerId = 0;
  let twoPlayerHistory = [];
  let tutorStep = 0;
  let academyProgressState = { version: 1, completed: [], lastViewed: 0 };
  const academyChapterTitles = ['Orientation', 'White cross', 'First layer', 'Middle layer', 'Yellow cross', 'Final solve'];
  let academyScreenState = 'journey';
  const lessonDrafts = [
    { title: 'Meet your cube', body: 'The six center stickers never move, so they name each face. Hold white on top and green facing you. A solved cube has each face matching its center.', tip: 'Notation: U, R, F, D, L, and B mean turn the Up, Right, Front, Down, Left, or Back face clockwise. An apostrophe means turn it counter-clockwise.', moves: [] },
    { title: 'Make the white cross', body: 'Find the four white edge pieces (they have two colors). Move each beside the matching side-center, then turn that face twice to bring the white sticker to the top. Keep the side color matched before each double turn.', tip: 'Do not worry about white corners yet. The goal is a white plus sign with all four side colors matching their centers.', moves: ['F2', 'R2', 'L2', 'B2'] },
    { title: 'Finish the white corners', body: 'Keep white on top. Place a white corner directly below where it belongs, at the front-right-bottom. Repeat the short move until the corner goes in; then turn only the bottom layer to bring the next corner there.', tip: 'If a white corner is stuck on top in the wrong place, use the same short move once to bring it down first.', moves: ["R'", "D'", 'R', 'D'] },
    { title: 'Solve the middle layer', body: 'Turn the cube upside down so white is on the bottom. Find a top-layer edge with no yellow. Match its front color to the front center, then choose whether its other color belongs on the right or the left.', tip: 'Use the right algorithm for an edge going right; mirror it for an edge going left. Repeat if the edge needs to be brought out first.', moves: ['R', 'U', "R'", "U'", "F'", "U'", 'F'] },
    { title: 'Make a yellow cross', body: 'Keep yellow on top. Use this algorithm for the yellow dot, L shape, or line. For an L, hold it like an L in the top-left; for a line, hold it horizontally. Repeat until you see a yellow cross.', tip: 'Only the yellow face matters in this step; side colors can look messy for now.', moves: ['F', 'R', 'U', "R'", "U'", "F'"] },
    { title: 'Put yellow corners in the right spots', body: 'A corner is in the right spot when its three colors match the three surrounding centers, even if yellow is not facing up. Find one correct corner and hold it at front-right-top. Use the algorithm, then check again.', tip: 'If no corner is correct, run the algorithm once from any position; then you should have one correct corner to hold in place.', moves: ['U', 'R', "U'", "L'", 'U', "R'", "U'", 'L'] },
    { title: 'Twist the yellow corners', body: 'Put an unsolved yellow corner at front-right-top. Repeat the four moves until yellow faces up on that corner. Turn only the top face to bring the next unsolved corner to front-right-top, then repeat.', tip: 'The cube will look worse halfway through. Keep going and do not rotate the whole cube.', moves: ["R'", "D'", 'R', 'D'] },
    { title: 'Finish the yellow edges', body: 'If one top edge already matches its side center, hold that solved edge at the back. Run the final algorithm. If no edge matches, run it once from any side, then hold the matching edge at the back and run it again.', tip: 'Congratulations — the cube should now be solved. Practice slowly; accuracy matters more than speed.', moves: ['F2', 'U', 'L', "R'", 'F2', "L'", 'R', 'U', 'F2'] }
  ];
  const guidedStageMetadata = [
    { id: 'meet-the-cube', goal: 'Recognize the centers and learn notation.', orientation: 'Hold white on top and green facing you.', hints: ['Centers name the six faces.', 'An apostrophe means counter-clockwise.'], success: 'orientation' },
    { id: 'white-cross', goal: 'Build a white cross with matching side colors.', orientation: 'Keep white on top and match each edge to its side center.', hints: ['Solve one edge at a time.', 'Do not solve corners yet.'], success: 'whiteCross' },
    { id: 'white-corners', goal: 'Place all four white corners correctly.', orientation: 'Keep white on top and work at the front-right-bottom position.', hints: ['Repeat the short algorithm until the corner is placed.', 'Turn only the bottom layer between corners.'], success: 'firstLayer' },
    { id: 'middle-layer', goal: 'Solve the four middle-layer edges.', orientation: 'Turn the cube so white is on the bottom.', hints: ['Use the right algorithm when the edge belongs on the right.', 'Use the mirrored algorithm when it belongs on the left.'], success: 'middleLayer' },
    { id: 'yellow-cross', goal: 'Make a yellow cross on the top face.', orientation: 'Keep yellow on top; hold an L in the top-left or a line horizontally.', hints: ['Repeat the algorithm for a dot, L, or line.', 'Side colors do not need to match yet.'], success: 'yellowCross' },
    { id: 'yellow-corner-spots', goal: 'Put every yellow corner in its correct location.', orientation: 'Hold a correct corner at the front-right-top.', hints: ['A corner can be correctly placed even when yellow points sideways.', 'If none is correct, run the algorithm once first.'], success: 'yellowCornersPlaced' },
    { id: 'yellow-corner-twists', goal: 'Turn every yellow corner so yellow faces up.', orientation: 'Work at the front-right-top and rotate only the top face between corners.', hints: ['The cube looks scrambled during this step.', 'Finish all four moves before changing corners.'], success: 'yellowCornersOriented' },
    { id: 'yellow-edges', goal: 'Finish the final four yellow edges.', orientation: 'Hold a matching top edge at the back.', hints: ['If none matches, run the algorithm once and check again.', 'The solved state has six solid-color faces.'], success: 'solved' }
  ];
  const lessons = lessonDrafts.map((lesson, index) => ({ ...lesson, ...guidedStageMetadata[index] }));
  const missionData = [
    { id: 'make-white-cross', title: 'White cross sprint', goal: 'Build the white cross with matching side colors.', setup: ['F', 'R', 'U', "R'", "U'", "F'"], success: 'whiteCross', reward: 'Cross starter', difficulty: 'Easy' },
    { id: 'yellow-cross', title: 'Yellow cross', goal: 'Make a yellow cross on the top face.', setup: ['F', 'R', 'U', "R'", "U'", "F'"], success: 'yellowCross', reward: 'Last-layer ready', difficulty: 'Medium' },
    { id: 'solve-from-scramble', title: 'Full solve finish', goal: 'Return the cube to six solid-color faces.', setup: ['R', 'U', "R'", "U'", 'F', 'R', "F'", "U'"], success: 'solved', reward: 'Cube finisher', difficulty: 'Hard' }
  ];
  const algorithmCatalog = [
    { id: 'right-hand', title: 'Right-hand corner insert', category: 'Beginner', goal: 'Place a white corner from the bottom-right position.', orientation: 'Hold the target corner at front-right-bottom.', moves: ["R'", "D'", 'R', 'D'], difficulty: 'Easy', explanation: 'Repeat the four moves until the corner is oriented and placed.' },
    { id: 'middle-right', title: 'Middle edge to the right', category: 'Beginner', goal: 'Insert a top-layer edge into the middle layer on the right.', orientation: 'Match the front color and keep the target slot on the right.', moves: ['U', 'R', "U'", "R'", "U'", "F'", 'U', 'F'], difficulty: 'Medium', explanation: 'Keep the matched edge at the front before starting.' },
    { id: 'yellow-cross', title: 'Yellow cross algorithm', category: 'Last layer', goal: 'Turn the yellow dot, line, or L into a yellow cross.', orientation: 'Hold yellow on top; keep a line horizontal or an L in the top-left.', moves: ['F', 'R', 'U', "R'", "U'", "F'"], difficulty: 'Medium', explanation: 'Repeat the sequence until the four yellow edge stickers face up.' },
    { id: 'corner-twist', title: 'Twist a last-layer corner', category: 'Last layer', goal: 'Turn one top corner so yellow faces upward.', orientation: 'Hold the unsolved corner at front-right-top.', moves: ["R'", "D'", 'R', 'D'], difficulty: 'Easy', explanation: 'Finish all four moves before rotating only the top layer.' },
    { id: 'sexy-move', title: 'Sexy move practice', category: 'Speed', goal: 'Build fluency with a common four-move rhythm.', orientation: 'Keep a chosen corner at front-right-top.', moves: ['R', 'U', "R'", "U'"], difficulty: 'Easy', explanation: 'This sequence appears inside many beginner and speed-solving algorithms.' }
  ];

  const key = (p, n) => `${p.join(',')}|${n.join(',')}`;
  const canonicalStickerKeys = new Set();
  Object.values(faces).forEach(definition => {
    for (let row = 0; row < 3; row += 1) for (let col = 0; col < 3; col += 1) {
      canonicalStickerKeys.add(key(definition.location(row, col), definition.n));
    }
  });
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  function parseMove(move) {
    const match = /^([FBRLUD])([2']?)$/.exec(move);
    if (!match) throw new Error(`Invalid cube move: ${move}`);
    return {
      face: match[1],
      rotations: match[2] === '2' ? 2 : match[2] === "'" ? 3 : 1
    };
  }

  const inverse = move => move.endsWith('2') ? move : move.endsWith("'") ? move[0] : `${move}'`;
  const wait = milliseconds => new Promise(resolve => window.setTimeout(resolve, milliseconds));

  function createReplay(moves, timesMs = [], metadata = {}) {
    if (!Array.isArray(moves) || !moves.every(move => /^[FBRLUD](?:2|')?$/.test(move))) throw new Error('Replay contains an invalid move.');
    if (!Array.isArray(timesMs) || timesMs.length !== moves.length || !timesMs.every(time => Number.isFinite(time) && time >= 0)) throw new Error('Replay contains invalid timing data.');
    return {
      version: replayVersion,
      moves: moves.slice(),
      timesMs: timesMs.slice(),
      metadata: {
        name: typeof metadata.name === 'string' ? metadata.name.slice(0, 80) : 'Untitled replay',
        source: typeof metadata.source === 'string' ? metadata.source.slice(0, 40) : 'manual'
      }
    };
  }

  function isReplay(value) {
    try {
      return value && value.version === replayVersion && createReplay(value.moves, value.timesMs, value.metadata).moves.length === value.moves.length;
    } catch (error) {
      return false;
    }
  }

  function encodeReplay(replay) {
    if (!isReplay(replay)) throw new Error('Cannot encode an invalid replay.');
    const bytes = new TextEncoder().encode(JSON.stringify(replay));
    let binary = '';
    bytes.forEach(byte => { binary += String.fromCharCode(byte); });
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  function decodeReplay(code) {
    if (typeof code !== 'string' || code.length > 12000) throw new Error('Replay code is too long or invalid.');
    try {
      const padded = code.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((code.length + 3) % 4);
      const binary = atob(padded);
      const bytes = Uint8Array.from(binary, character => character.charCodeAt(0));
      const replay = JSON.parse(new TextDecoder().decode(bytes));
      if (!isReplay(replay)) throw new Error('Replay code is invalid.');
      return replay;
    } catch (error) {
      throw new Error('Replay code is invalid.');
    }
  }

  function createCubeStateSnapshot() {
    return {
      version: cubeStateVersion,
      stickers: stickers.map(sticker => ({ position: sticker.position.slice(), normal: sticker.normal.slice(), color: sticker.color }))
        .sort((a, b) => {
          const aKey = `${a.position}|${a.normal}`;
          const bKey = `${b.position}|${b.normal}`;
          return aKey < bKey ? -1 : aKey > bKey ? 1 : 0;
        })
    };
  }

  function serializeCubeState() {
    return JSON.stringify(createCubeStateSnapshot());
  }

  function validateCubeState(snapshot) {
    if (!snapshot || snapshot.version !== cubeStateVersion || !Array.isArray(snapshot.stickers) || snapshot.stickers.length !== 54) throw new Error('Cube state must contain version 1 and 54 stickers.');
    const positions = new Set();
    const colors = {};
    snapshot.stickers.forEach(sticker => {
      if (!Array.isArray(sticker.position) || sticker.position.length !== 3 || !sticker.position.every(value => [-1, 0, 1].includes(value))) throw new Error('Cube state contains an invalid position.');
      if (!Array.isArray(sticker.normal) || sticker.normal.length !== 3 || sticker.normal.filter(value => value !== 0).length !== 1 || !sticker.normal.some(value => Math.abs(value) === 1)) throw new Error('Cube state contains an invalid normal.');
      if (!['white', 'yellow', 'red', 'orange', 'blue', 'green'].includes(sticker.color)) throw new Error('Cube state contains an invalid color.');
      const stickerKey = key(sticker.position, sticker.normal);
      if (!canonicalStickerKeys.has(stickerKey)) throw new Error('Cube state contains a sticker outside the canonical cube layout.');
      if (positions.has(stickerKey)) throw new Error('Cube state contains duplicate stickers.');
      positions.add(stickerKey);
      colors[sticker.color] = (colors[sticker.color] || 0) + 1;
    });
    if (Object.values(colors).some(count => count !== 9)) throw new Error('Cube state must contain nine stickers of each color.');
    return true;
  }

  function importCubeState(serialized) {
    let snapshot;
    try {
      snapshot = typeof serialized === 'string' ? JSON.parse(serialized) : serialized;
      validateCubeState(snapshot);
    } catch (error) {
      throw new Error(error.message || 'Cube state is invalid.');
    }
    clearChallengeState();
    stickers = snapshot.stickers.map(sticker => ({ position: sticker.position.slice(), normal: sticker.normal.slice(), color: sticker.color }));
    history = [];
    render();
  }

  function createSeededRandom(seed) {
    let value = seed >>> 0;
    return () => {
      value = (value * 1664525 + 1013904223) >>> 0;
      return value / 4294967296;
    };
  }

  function getLocalDateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function hashDateKey(dateKey) {
    let hash = 2166136261;
    for (const character of dateKey) {
      hash ^= character.charCodeAt(0);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function dailyScrambleMoves(date = new Date(), length = 24) {
    const random = createSeededRandom(hashDateKey(getLocalDateKey(date)));
    const names = Object.keys(faces);
    const moves = [];
    while (moves.length < length) {
      const face = names[Math.floor(random() * names.length)];
      if (!moves.length || moves[moves.length - 1][0] !== face) {
        const suffix = random() < 1 / 3 ? '2' : random() < .5 ? "'" : '';
        moves.push(`${face}${suffix}`);
      }
    }
    return moves;
  }

  function loadDailyResults() {
    try {
      const stored = JSON.parse(window.localStorage.getItem(dailyStorageKey) || '{}');
      return stored && typeof stored === 'object' && !Array.isArray(stored) ? stored : {};
    } catch (error) {
      return {};
    }
  }

  function setTheme(theme) {
    const allowedThemes = ['classic', 'neon', 'pastel', 'high-contrast'];
    const selectedTheme = allowedThemes.includes(theme) ? theme : 'classic';
    document.body.dataset.theme = selectedTheme;
    themeSelect.value = selectedTheme;
    try {
      window.localStorage.setItem(themeStorageKey, selectedTheme);
    } catch (error) {
      // Private browsing modes can deny storage; the selected theme still applies.
    }
  }

  function loadTheme() {
    try {
      return window.localStorage.getItem(themeStorageKey) || 'classic';
    } catch (error) {
      return 'classic';
    }
  }

  function loadSpeedrunRecords() {
    try {
      const stored = JSON.parse(window.localStorage.getItem(speedrunStorageKey) || '[]');
      return Array.isArray(stored) ? stored.filter(record => record && Number.isFinite(record.timeMs) && Number.isFinite(record.moves)) : [];
    } catch (error) {
      return [];
    }
  }

  function loadMissionProgress() {
    try {
      const stored = JSON.parse(window.localStorage.getItem(missionStorageKey) || '{}');
      return stored && typeof stored === 'object' && !Array.isArray(stored) ? stored : {};
    } catch (error) {
      return {};
    }
  }

  function loadAlgorithmProgress() {
    try {
      const stored = JSON.parse(window.localStorage.getItem(algorithmStorageKey) || '{}');
      return stored && typeof stored === 'object' && !Array.isArray(stored) ? stored : {};
    } catch (error) {
      return {};
    }
  }

  function saveAlgorithmProgress() {
    try {
      window.localStorage.setItem(algorithmStorageKey, JSON.stringify(algorithmProgress));
    } catch (error) {
      // Private browsing modes can deny storage; the current practice still works in memory.
    }
  }

  function loadProgressEvents() {
    try {
      const stored = JSON.parse(window.localStorage.getItem(progressStorageKey) || '[]');
      return Array.isArray(stored) ? stored.filter(event => event && typeof event.date === 'string' && typeof event.type === 'string' && typeof event.id === 'string') : [];
    } catch (error) {
      return [];
    }
  }

  function saveProgressEvents() {
    try {
      window.localStorage.setItem(progressStorageKey, JSON.stringify(progressEvents.slice(-500)));
    } catch (error) {
      // Private browsing modes can deny storage; progress remains available in memory.
    }
  }

  function loadAchievementState() {
    try {
      const stored = JSON.parse(window.localStorage.getItem(achievementStorageKey) || '{}');
      if (stored && stored.version === 1 && stored.unlocks && typeof stored.unlocks === 'object' && !Array.isArray(stored.unlocks)) return stored.unlocks;
      return stored && typeof stored === 'object' && !Array.isArray(stored) && !('version' in stored) ? stored : {};
    } catch (error) {
      return {};
    }
  }

  function saveAchievementState() {
    try {
      window.localStorage.setItem(achievementStorageKey, JSON.stringify({ version: 1, unlocks: achievementState }));
    } catch (error) {
      // Private browsing modes can deny storage; unlocks remain available in memory.
    }
  }

  function feedbackCapabilities() {
    return {
      sound: typeof window.AudioContext === 'function' || typeof window.webkitAudioContext === 'function',
      vibration: typeof navigator.vibrate === 'function',
      reducedMotion: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
    };
  }

  function loadFeedbackPreferences() {
    const capabilities = feedbackCapabilities();
    const defaults = { version: 1, sound: capabilities.sound, vibration: capabilities.vibration && !capabilities.reducedMotion, intensity: 'normal' };
    try {
      const stored = JSON.parse(window.localStorage.getItem(feedbackStorageKey) || '{}');
      if (!stored || stored.version !== 1) return defaults;
      return { ...defaults, sound: stored.sound !== false && capabilities.sound, vibration: stored.vibration === true && capabilities.vibration, intensity: ['low', 'normal', 'high'].includes(stored.intensity) ? stored.intensity : 'normal' };
    } catch (error) {
      return defaults;
    }
  }

  function saveFeedbackPreferences() {
    try {
      window.localStorage.setItem(feedbackStorageKey, JSON.stringify(feedbackPreferences));
    } catch (error) {
      // Private browsing modes can deny storage; feedback still follows the current session.
    }
  }

  function renderFeedbackSettings() {
    const capabilities = feedbackCapabilities();
    feedbackSound.checked = feedbackPreferences.sound;
    feedbackSound.disabled = !capabilities.sound;
    feedbackVibration.checked = feedbackPreferences.vibration;
    feedbackVibration.disabled = !capabilities.vibration;
    feedbackIntensity.value = feedbackPreferences.intensity;
    feedbackStatus.textContent = [
      capabilities.sound ? 'Sound available.' : 'Sound unavailable in this browser.',
      capabilities.vibration ? 'Vibration available.' : 'Vibration unavailable on this device.',
      capabilities.reducedMotion ? 'Reduced motion is on; vibration starts off.' : ''
    ].filter(Boolean).join(' ');
  }

  function updateFeedbackPreferences() {
    feedbackPreferences = { version: 1, sound: feedbackSound.checked, vibration: feedbackVibration.checked, intensity: feedbackIntensity.value };
    saveFeedbackPreferences();
    renderFeedbackSettings();
    status.textContent = 'Feedback settings saved.';
  }

  function feedbackScale() {
    return feedbackPreferences.intensity === 'low' ? .55 : feedbackPreferences.intensity === 'high' ? 1.35 : 1;
  }

  function triggerFeedback(kind = 'turn') {
    const scale = feedbackScale();
    if (feedbackPreferences.sound && feedbackCapabilities().sound) {
      try {
        const AudioCtor = window.AudioContext || window.webkitAudioContext;
        audioContext ||= new AudioCtor();
        if (audioContext.state === 'suspended') audioContext.resume();
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        oscillator.frequency.value = kind === 'solved' ? 660 : 210;
        gain.gain.setValueAtTime(.035 * scale, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + (kind === 'solved' ? .22 : .06));
        oscillator.connect(gain).connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + (kind === 'solved' ? .22 : .06));
      } catch (error) {
        // Audio is decorative; a blocked or unavailable context must not affect play.
      }
    }
    if (feedbackPreferences.vibration && feedbackCapabilities().vibration && Date.now() - lastVibrationAt >= 70) {
      lastVibrationAt = Date.now();
      navigator.vibrate(kind === 'solved' ? [45, 35, 90] : Math.max(10, Math.round(18 * scale)));
    }
  }

  function evaluateAchievements() {
    const counts = type => progressEvents.filter(event => event.type === type).length;
    const activeDays = new Set(progressEvents.map(event => event.date)).size;
    const algorithmPractice = Object.values(algorithmProgress).reduce((sum, progress) => sum + (progress.count || 0), 0);
    const values = { solved: counts('solved'), activeDays, mission: counts('mission'), algorithmPractice, replay: replayRecords.length, keyboard: counts('keyboard') };
    let unlockedTitle = '';
    achievementCatalog.forEach(achievement => {
      if (!achievementState[achievement.id] && values[achievement.rule.type] >= achievement.rule.count) {
        achievementState[achievement.id] = { unlockedAt: new Date().toISOString() };
        unlockedTitle = achievement.title;
      }
    });
    if (unlockedTitle) {
      saveAchievementState();
      renderAchievements();
      status.textContent = `Achievement unlocked: ${unlockedTitle}.`;
    }
  }

  function recordProgressEvent(type, id, date = getLocalDateKey()) {
    if (typeof type !== 'string' || typeof id !== 'string') return false;
    const duplicate = progressEvents.some(event => event.type === type && event.id === id && event.date === date);
    if (duplicate) return false;
    progressEvents.push({ type, id, date });
    saveProgressEvents();
    evaluateAchievements();
    return true;
  }

  function progressDateSet() {
    return new Set(progressEvents.map(event => event.date));
  }

  function streakLength(dates, startDate) {
    let count = 0;
    const cursor = new Date(`${startDate}T12:00:00`);
    while (dates.has(getLocalDateKey(cursor))) {
      count += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
    return count;
  }

  function renderProgress() {
    const dates = progressDateSet();
    const today = getLocalDateKey();
    const sorted = [...dates].sort();
    const longest = sorted.reduce((best, date) => Math.max(best, streakLength(dates, date)), 0);
    progressSummary.textContent = `Current streak: ${streakLength(dates, today)} days · Longest streak: ${longest} days · ${dates.size} active days`;
    const monthKey = progressMonthInput.value || today.slice(0, 7);
    const [year, month] = monthKey.split('-').map(Number);
    const first = new Date(year, month - 1, 1);
    const daysInMonth = new Date(year, month, 0).getDate();
    const cells = [];
    for (let index = 0; index < first.getDay(); index += 1) cells.push(null);
    for (let day = 1; day <= daysInMonth; day += 1) cells.push(`${monthKey}-${String(day).padStart(2, '0')}`);
    progressCalendar.replaceChildren(...cells.map(date => {
      const cell = document.createElement('div');
      cell.className = date ? `calendar-day${dates.has(date) ? ' is-complete' : ''}` : 'calendar-day is-empty';
      cell.setAttribute('role', 'gridcell');
      cell.textContent = date ? String(Number(date.slice(-2))) : '';
      if (date) cell.setAttribute('aria-label', `${date}${dates.has(date) ? ', completed activity' : ''}`);
      return cell;
    }));
  }

  function loadReplayRecords() {
    try {
      const stored = JSON.parse(window.localStorage.getItem(replayStorageKey) || '[]');
      return Array.isArray(stored) ? stored.filter(isReplay).slice(-20) : [];
    } catch (error) {
      return [];
    }
  }

  function saveReplayRecords() {
    try {
      window.localStorage.setItem(replayStorageKey, JSON.stringify(replayRecords.slice(-20)));
    } catch (error) {
      // Private browsing modes can deny storage; the current replay remains usable in memory.
    }
  }

  function copyText(text) {
    if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.append(textArea);
    textArea.select();
    const copied = document.execCommand('copy');
    textArea.remove();
    return copied ? Promise.resolve() : Promise.reject(new Error('Copy failed'));
  }

  function renderReplays() {
    replayList.replaceChildren();
    if (!replayRecords.length) {
      const empty = document.createElement('p');
      empty.textContent = 'No saved replays yet. Make some moves, then save the current sequence.';
      empty.className = 'status';
      replayList.append(empty);
      return;
    }
    replayRecords.slice().reverse().forEach((replay, index) => {
      const card = document.createElement('article');
      card.className = 'replay-card';
      const description = document.createElement('p');
      description.textContent = `${replay.metadata.name} · ${replay.moves.length} moves`;
      const actions = document.createElement('div');
      actions.className = 'replay-card-actions';
      const play = document.createElement('button');
      play.type = 'button';
      play.dataset.replayIndex = String(replayRecords.length - 1 - index);
      play.dataset.replayAction = 'play';
      play.textContent = 'Play';
      const copy = document.createElement('button');
      copy.type = 'button';
      copy.dataset.replayIndex = String(replayRecords.length - 1 - index);
      copy.dataset.replayAction = 'copy';
      copy.textContent = 'Copy code';
      actions.append(play, copy);
      card.append(description, actions);
      replayList.append(card);
    });
  }

  function saveCurrentReplay() {
    if (!history.length) {
      status.textContent = 'Make at least one move before saving a replay.';
      return;
    }
    const replay = createReplay(history, history.map((move, index) => index * 95), { name: `Replay ${new Date().toLocaleString()}`, source: 'cube' });
    replayRecords = [...replayRecords, replay].slice(-20);
    saveReplayRecords();
    recordProgressEvent('replay', replay.metadata.name);
    renderReplays();
    status.textContent = 'Replay saved.';
  }

  function renderAlgorithms() {
    const visible = selectedAlgorithmCategory === 'all'
      ? algorithmCatalog
      : algorithmCatalog.filter(algorithm => algorithm.category === selectedAlgorithmCategory);
    algorithmList.replaceChildren(...visible.map(algorithm => {
      const card = document.createElement('article');
      card.className = 'algorithm-card';
      const title = document.createElement('h3');
      title.textContent = algorithm.title;
      const meta = document.createElement('div');
      meta.className = 'algorithm-meta';
      const progress = algorithmProgress[algorithm.id];
      meta.textContent = `${algorithm.category} · ${algorithm.difficulty}${progress?.count ? ` · Practised ${progress.count}x` : ''}`;
      const goal = document.createElement('p');
      goal.textContent = `Goal: ${algorithm.goal}`;
      const orientation = document.createElement('p');
      orientation.textContent = `Orientation: ${algorithm.orientation}`;
      const explanation = document.createElement('p');
      explanation.textContent = algorithm.explanation;
      const notation = document.createElement('div');
      notation.className = 'algorithm-notation';
      algorithm.moves.forEach(move => {
        const chip = document.createElement('span');
        chip.className = 'move-chip';
        chip.textContent = move;
        notation.append(chip);
      });
      const practice = document.createElement('button');
      practice.type = 'button';
      practice.dataset.algorithm = algorithm.id;
      practice.textContent = 'Practice';
      card.append(title, meta, goal, orientation, explanation, notation, practice);
      return card;
    }));
  }

  function saveMissionProgress() {
    try {
      window.localStorage.setItem(missionStorageKey, JSON.stringify(missionProgress));
    } catch (error) {
      // Private browsing modes can deny storage; the current mission still works in memory.
    }
  }

  function saveSpeedrunRecords() {
    try {
      window.localStorage.setItem(speedrunStorageKey, JSON.stringify(speedrunRecords));
    } catch (error) {
      // Private browsing modes can deny storage; the current run still works in memory.
    }
  }

  function averageSpeedrunTime(count) {
    const recent = speedrunRecords.slice(-count);
    return recent.length < count ? '—' : formatSpeedrunTime(recent.reduce((sum, record) => sum + record.timeMs, 0) / count);
  }

  function renderSpeedrunStats() {
    const best = speedrunRecords.length ? Math.min(...speedrunRecords.map(record => record.timeMs)) : null;
    speedrunStatsSummary.textContent = `Best: ${best === null ? '—' : formatSpeedrunTime(best)} · Ao5: ${averageSpeedrunTime(5)} · Ao12: ${averageSpeedrunTime(12)}`;
  }

  function recordSpeedrun() {
    speedrunRecords.push({ timeMs: Math.max(0, performance.now() - speedrunStartedAt), moves: speedrunMoveCount, date: new Date().toISOString() });
    speedrunRecords = speedrunRecords.slice(-100);
    saveSpeedrunRecords();
    renderSpeedrunStats();
  }

  function saveDailyResult(dateKey, result) {
    dailyResults[dateKey] = result;
    try {
      window.localStorage.setItem(dailyStorageKey, JSON.stringify(dailyResults));
    } catch (error) {
      // Private browsing modes can deny storage; the challenge still works in memory.
    }
  }

  function startDailyResult(dateKey) {
    const previous = dailyResults[dateKey];
    dailyChallengeActive = true;
    dailyChallengeDateKey = dateKey;
    dailyChallengeStartedAt = Date.now();
    dailyChallengePlayerMoves = 0;
    saveDailyResult(dateKey, {
      started: true,
      completed: false,
      startedAt: dailyChallengeStartedAt,
      moves: 0,
      best: previous && Number.isFinite(previous.best) ? previous.best : null
    });
  }

  function completeDailyResult(dateKey) {
    if (!dailyChallengeActive) return;
    const elapsed = Math.max(0, Date.now() - dailyChallengeStartedAt);
    const previous = dailyResults[dateKey];
    const best = previous && Number.isFinite(previous.best)
      ? Math.min(previous.best, elapsed)
      : elapsed;
    saveDailyResult(dateKey, {
      started: true,
      completed: true,
      startedAt: dailyChallengeStartedAt,
      completedAt: Date.now(),
      timeMs: elapsed,
      moves: dailyChallengePlayerMoves,
      best
    });
    dailyChallengeActive = false;
    dailyChallengeDateKey = '';
    recordProgressEvent('daily', dateKey);
  }

  function formatDuration(milliseconds) {
    const totalSeconds = Math.max(0, Math.round(milliseconds / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  function formatSpeedrunTime(milliseconds) {
    const totalSeconds = Math.max(0, milliseconds) / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = (totalSeconds % 60).toFixed(2).padStart(5, '0');
    return `${minutes}:${seconds}`;
  }

  function renderSpeedrunTimer() {
    speedrunTime.textContent = formatSpeedrunTime(performance.now() - speedrunStartedAt);
  }

  function stopSpeedrunTimer() {
    if (speedrunTimerId) window.clearInterval(speedrunTimerId);
    speedrunTimerId = 0;
    if (speedrunInspectionId) window.clearInterval(speedrunInspectionId);
    speedrunInspectionId = 0;
  }

  function setSpeedrunState(state) {
    speedrunState = state;
    speedrunStart.disabled = busy || state === 'scrambling' || state === 'running';
    speedrunReset.disabled = busy;
    speedrunStart.textContent = state === 'running' ? 'Running…' : state === 'inspecting' ? 'Skip inspection' : 'Start speedrun';
  }

  function beginTimedSpeedrun() {
    speedrunStartedAt = performance.now();
    renderSpeedrunTimer();
    speedrunTimerId = window.setInterval(renderSpeedrunTimer, 50);
    setSpeedrunState('running');
    status.textContent = 'Speedrun started. Solve the cube as quickly as you can.';
  }

  function finishSpeedrun() {
    if (speedrunState !== 'running') return;
    const elapsed = performance.now() - speedrunStartedAt;
    stopSpeedrunTimer();
    recordSpeedrun();
    recordProgressEvent('speedrun', getLocalDateKey());
    setSpeedrunState('completed');
    speedrunTime.textContent = formatSpeedrunTime(elapsed);
    status.textContent = `Speedrun complete in ${formatSpeedrunTime(elapsed)} with ${speedrunMoveCount} moves.`;
    celebrateSolved();
  }

  function beginInspection() {
    setSpeedrunState('inspecting');
    speedrunInspectionEndsAt = performance.now() + 15000;
    speedrunTime.textContent = 'Inspection: 15';
    speedrunInspectionId = window.setInterval(() => {
      const remaining = Math.ceil(Math.max(0, speedrunInspectionEndsAt - performance.now()) / 1000);
      speedrunTime.textContent = `Inspection: ${remaining}`;
      if (remaining <= 0) {
        stopSpeedrunTimer();
        beginTimedSpeedrun();
      }
    }, 100);
    status.textContent = 'Inspection started. Study the scramble, then skip or wait.';
  }

  async function startSpeedrun() {
    if (busy || speedrunState === 'running') return;
    if (speedrunState === 'inspecting') {
      stopSpeedrunTimer();
      beginTimedSpeedrun();
      return;
    }
    clearChallengeState('speedrun');
    initialize();
    history = [];
    speedrunMoveCount = 0;
    speedrunMoves.textContent = 'Moves: 0';
    speedrunSetup = true;
    setSpeedrunState('scrambling');
    status.textContent = 'Preparing your speedrun scramble…';
    await runSequence(shuffleMoves(), true);
    speedrunSetup = false;
    if (speedrunInspection.checked && !reducedMotion) beginInspection();
    else beginTimedSpeedrun();
  }

  function resetSpeedrun() {
    stopSpeedrunTimer();
    setSpeedrunState('idle');
    speedrunStartedAt = 0;
    speedrunMoveCount = 0;
    speedrunMoves.textContent = 'Moves: 0';
    speedrunSetup = false;
    speedrunTime.textContent = '0:00.00';
    status.textContent = 'Speedrun timer reset.';
    hideCelebration();
  }

  function renderDailyResult(dateKey) {
    const result = dailyResults[dateKey];
    if (!result || !result.completed) {
      dailyResult.hidden = true;
      return;
    }
    const bestLabel = result.best === result.timeMs ? ' New best!' : '';
    dailyResultSummary.textContent = `${dateKey}: ${formatDuration(result.timeMs)} in ${result.moves} moves.${bestLabel}`;
    dailyResult.hidden = false;
  }

  function hideCelebration() {
    celebration.hidden = true;
    if (celebrationTimeout) window.clearTimeout(celebrationTimeout);
    celebrationTimeout = 0;
  }

  function celebrateSolved() {
    triggerFeedback('solved');
    celebration.hidden = false;
    if (celebrationTimeout) window.clearTimeout(celebrationTimeout);
    celebrationTimeout = window.setTimeout(hideCelebration, 4200);
  }

  function renderMissions() {
    missionList.replaceChildren(...missionData.map(mission => {
      const card = document.createElement('article');
      card.className = 'mission-card';
      const title = document.createElement('h3');
      title.textContent = mission.title;
      const description = document.createElement('p');
      description.textContent = mission.goal;
      const meta = document.createElement('div');
      meta.className = 'mission-meta';
      const progress = missionProgress[mission.id];
      meta.textContent = `${mission.difficulty} · Reward: ${mission.reward}${progress?.completed ? ' · Completed' : ''}`;
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.mission = mission.id;
      button.textContent = activeMission === mission.id ? 'Retry mission' : progress?.completed ? 'Replay mission' : 'Start mission';
      card.append(title, description, meta, button);
      return card;
    }));
  }

  async function startMission(id) {
    if (busy) return;
    const mission = missionData.find(item => item.id === id);
    if (!mission) return;
    clearChallengeState('mission');
    activeMission = mission.id;
    hideCelebration();
    initialize();
    history = [];
    status.textContent = `Setting up ${mission.title}…`;
    renderMissions();
    missionPreparing = true;
    await runSequence(mission.setup, true);
    missionPreparing = false;
    status.textContent = `${mission.title} started. ${mission.goal}`;
  }

  function cancelMission() {
    activeMission = null;
    missionPreparing = false;
    renderMissions();
  }

  function clearChallengeState(preserve = '') {
    if (preserve !== 'speedrun' && speedrunState !== 'idle') resetSpeedrun();
    if (preserve !== 'daily') {
      dailyChallengeActive = false;
      dailyChallengePreparing = false;
      dailyChallengeDateKey = '';
    }
    if (preserve !== 'mission') cancelMission();
    if (preserve !== 'two-player' && twoPlayerState.phase !== 'idle') {
      resetTwoPlayerState();
      renderTwoPlayer();
    }
  }

  function undoLastMove() {
    if (busy || !history.length) return false;
    const move = history.pop();
    turn(inverse(move), false);
    solveButton.disabled = history.length === 0;
    status.textContent = `Undid ${move}.`;
    return true;
  }

  function pollGamepads() {
    if (!navigator.getGamepads) return;
    const pads = navigator.getGamepads();
    const pad = [...pads].find(Boolean);
    if (!pad) return;
    pad.buttons.forEach((button, index) => {
      const pressed = button.pressed;
      if (pressed && !gamepadButtons[index] && gamepadShortcuts[index] && !busy) {
        const move = gamepadShortcuts[index];
        turn(move);
        recordProgressEvent('gamepad', move);
        solveButton.disabled = false;
        status.textContent = `${move} turn applied from the gamepad.`;
        if (speedrunState === 'running' && isSolvedState()) finishSpeedrun();
      }
      gamepadButtons[index] = pressed;
    });
  }

  function checkActiveMission() {
    if (!activeMission || missionPreparing) return;
    const mission = missionData.find(item => item.id === activeMission);
    if (!mission || !guidedChecks[mission.success]()) return;
    const previous = missionProgress[mission.id];
    const moves = history.length;
    missionProgress[mission.id] = {
      completed: true,
      completedAt: new Date().toISOString(),
      bestMoves: previous?.bestMoves ? Math.min(previous.bestMoves, moves) : moves
    };
    saveMissionProgress();
    recordProgressEvent('mission', mission.id);
    renderMissions();
    status.textContent = `Mission complete: ${mission.title}.`;
    celebrateSolved();
  }

  async function copyDailyResult() {
    const text = dailyResultSummary.textContent;
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = 'Daily challenge result copied.';
    } catch (error) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.setAttribute('readonly', '');
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.append(textArea);
      textArea.select();
      const copied = document.execCommand('copy');
      textArea.remove();
      status.textContent = copied ? 'Daily challenge result copied.' : 'Could not copy the result. Select it to share.';
    }
  }

  function rotateVector(vector, axis) {
    const perpendicular = cross(axis, vector);
    const parallel = dot(vector, axis);
    return perpendicular.map((value, index) => -value + axis[index] * parallel);
  }

  function initialize() {
    stickers = [];
    Object.entries(faces).forEach(([face, definition]) => {
      for (let row = 0; row < 3; row += 1) for (let col = 0; col < 3; col += 1) {
        stickers.push({ position: definition.location(row, col), normal: [...definition.n], color: definition.color });
      }
    });
    render();
  }

  function isGuidedTarget(face, row, col) {
    if (tutor.hidden) return false;
    const success = lessons[tutorStep].success;
    const edge = (row === 1 && col !== 1) || (col === 1 && row !== 1);
    const corner = row !== 1 && col !== 1;
    if (success === 'whiteCross') return face === 'U' && edge;
    if (success === 'firstLayer') return face === 'U';
    if (success === 'middleLayer') return ['F', 'B', 'R', 'L'].includes(face) && row === 1;
    if (success === 'yellowCross') return face === 'D' && edge;
    if (success === 'yellowCornersPlaced' || success === 'yellowCornersOriented') return face === 'D' && corner;
    if (success === 'solved') return true;
    return false;
  }

  function expectedColor(normal) {
    return Object.values(faces).find(face => face.n.every((value, index) => value === normal[index])).color;
  }

  function isSolvedAtPosition(sticker) {
    return sticker.color === expectedColor(sticker.normal);
  }

  function isSolvedState() {
    return stickers.every(isSolvedAtPosition);
  }

  function isWhiteCrossComplete() {
    return stickers.filter(sticker => sticker.normal[1] === 1 && (sticker.position[0] === 0 || sticker.position[2] === 0))
      .every(isSolvedAtPosition);
  }

  function isFirstLayerComplete() {
    return stickers.filter(sticker => sticker.position[1] === 1).every(isSolvedAtPosition);
  }

  function isMiddleLayerComplete() {
    return stickers.filter(sticker => sticker.position[1] === 0 && sticker.normal[1] === 0).every(isSolvedAtPosition);
  }

  function isYellowCrossComplete() {
    return stickers.filter(sticker => sticker.normal[1] === -1 && (sticker.position[0] === 0 || sticker.position[2] === 0))
      .every(sticker => sticker.color === 'yellow');
  }

  function isYellowCornersOriented() {
    return stickers.filter(sticker => sticker.normal[1] === -1 && sticker.position[0] !== 0 && sticker.position[2] !== 0)
      .every(sticker => sticker.color === 'yellow');
  }

  function isYellowCornersPlaced() {
    const positions = new Set(stickers
      .filter(sticker => sticker.position[1] === -1 && sticker.position[0] !== 0 && sticker.position[2] !== 0)
      .map(sticker => sticker.position.join(',')));
    return [...positions].every(positionKey => {
      const position = positionKey.split(',').map(Number);
      const currentColors = new Set(stickers
        .filter(sticker => sticker.position.every((value, index) => value === position[index]))
        .map(sticker => sticker.color));
      const expectedColors = new Set(stickers
        .filter(sticker => sticker.position.every((value, index) => value === position[index]))
        .map(sticker => expectedColor(sticker.normal)));
      return currentColors.size === expectedColors.size && [...expectedColors].every(color => currentColors.has(color));
    });
  }

  const guidedChecks = {
    orientation: () => false,
    whiteCross: isWhiteCrossComplete,
    firstLayer: isFirstLayerComplete,
    middleLayer: isMiddleLayerComplete,
    yellowCross: isYellowCrossComplete,
    yellowCornersPlaced: isYellowCornersPlaced,
    yellowCornersOriented: isYellowCornersOriented,
    solved: isSolvedState
  };

  function isGuidedStageComplete() {
    return guidedChecks[lessons[tutorStep].success]();
  }

  function announceGuidedProgress() {
    if (!tutor.hidden && isGuidedStageComplete()) {
      const chapter = Math.min(tutorStep, academyChapterTitles.length - 1);
      if (!academyProgressState.completed.includes(chapter)) {
        academyProgressState.completed.push(chapter);
        academyProgressState.completed.sort((a, b) => a - b);
        saveAcademyProgress();
        renderAcademyDeck();
      }
      status.textContent = `Goal complete: ${lessons[tutorStep].title}. Move to the next step.`;
    }
  }

  function render() {
    const locations = new Map(stickers.map(sticker => [key(sticker.position, sticker.normal), sticker]));
    faceElements.forEach(element => {
      const definition = faces[element.dataset.face];
      element.replaceChildren();
      for (let row = 0; row < 3; row += 1) for (let col = 0; col < 3; col += 1) {
        const sticker = locations.get(key(definition.location(row, col), definition.n));
        const cell = document.createElement('span');
        cell.className = `sticker ${sticker.color}${isGuidedTarget(element.dataset.face, row, col) ? ' guided-target' : ''}`;
        element.append(cell);
      }
    });
    updateCubeLabel();
  }

  function updateCubeLabel() {
    const arrangement = history.length ? 'with turns applied' : 'at its starting arrangement';
    cube.setAttribute('aria-label', "Interactive Rubik's Cube " + arrangement + '. Drag to inspect all six faces.');
  }

  function turn(move, record = true) {
    const { face, rotations } = parseMove(move);
    const axis = faces[face].n;
    for (let pass = 0; pass < rotations; pass += 1) stickers.forEach(sticker => {
      if (dot(sticker.position, axis) === 1) {
        sticker.position = rotateVector(sticker.position, axis);
        sticker.normal = rotateVector(sticker.normal, axis);
      }
    });
    if (record) history.push(move);
    if (record && dailyChallengeActive && !dailyChallengePreparing) {
      dailyChallengePlayerMoves += 1;
      const progress = dailyResults[dailyChallengeDateKey] || {};
      saveDailyResult(dailyChallengeDateKey, {
        ...progress,
        started: true,
        completed: false,
        moves: dailyChallengePlayerMoves
      });
    }
    if (record && speedrunState === 'running' && !speedrunSetup) {
      speedrunMoveCount += 1;
      speedrunMoves.textContent = `Moves: ${speedrunMoveCount}`;
    }
    if (record && twoPlayerState.phase === 'playing') twoPlayerState.moves[twoPlayerState.activeIndex] += 1;
    render();
    triggerFeedback('turn');
    if (record && twoPlayerState.phase === 'playing' && history.length > 0 && isSolvedState()) {
      finishTwoPlayerRound(twoPlayerState.activeIndex);
      renderTwoPlayer();
    }
    if (record) checkActiveMission();
  }

  function updateView() {
    cube.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
  }

  function applyCameraPreset(id) {
    const preset = cameraPresets[id];
    if (!preset) return false;
    rotation = { x: preset.x, y: preset.y };
    updateView();
    return true;
  }

  function renderTutor() {
    const lesson = lessons[tutorStep];
    tutorTitle.textContent = lesson.title;
    tutorGoal.textContent = `Goal: ${lesson.goal}`;
    tutorBody.textContent = lesson.body;
    tutorOrientation.textContent = `Orientation: ${lesson.orientation}`;
    tutorTip.textContent = `Hints: ${lesson.hints.join(' ')}`;
    tutorCount.textContent = `${tutorStep + 1} of ${lessons.length}`;
    tutorMoves.replaceChildren(...lesson.moves.map(move => {
      const chip = document.createElement('span');
      chip.className = 'move-chip';
      chip.textContent = move;
      return chip;
    }));
    tutorMoves.hidden = lesson.moves.length === 0;
    tutorDemo.hidden = lesson.moves.length === 0;
    academyHudTitle.textContent = lesson.title;
    academyHudStatus.textContent = lesson.goal;
    tutorPrevious.disabled = tutorStep === 0;
    tutorNext.textContent = tutorStep === lessons.length - 1 ? 'Start again' : 'Next step';
    render();
  }

  const academyScreens = Object.freeze({
    journey: {
      label: 'Journey',
      eyebrow: 'Your campaign',
      title: 'Follow the solve',
      description: 'Six focused chapters turn cube knowledge into muscle memory.',
      cards: [{ title: 'Orientation', description: 'Meet the cube, learn its language, and make your first confident turn.', action: 'continue', label: 'Continue training' }]
    },
    practice: {
      label: 'Practice',
      eyebrow: 'Training room',
      title: 'Choose your arena',
      description: 'Short sessions for building speed, accuracy, and confidence.',
      cards: [
        { title: 'Daily challenge', description: 'A fresh scramble to solve today.', action: 'daily', label: 'Start challenge' },
        { title: 'Speedrun', description: 'Race the clock and build a personal record.', action: 'speedrun', label: 'Open speedrun' },
        { title: 'Missions', description: 'Complete compact goals that reward deliberate practice.', action: 'missions', label: 'Open missions' },
        { title: 'Algorithms', description: 'Study useful patterns and practise their notation.', action: 'algorithms', label: 'Open algorithms' },
        { title: 'Scramble studio', description: 'Design a setup with your own length, seed, and face rules.', action: 'scramble', label: 'Open studio' },
        { title: 'Pass and play', description: 'Take turns solving with someone beside you.', action: 'two-player', label: 'Open match' }
      ]
    },
    vault: {
      label: 'Vault',
      eyebrow: 'Your records',
      title: 'Keep your progress close',
      description: 'Review your history, tune the experience, and pick up where you left off.',
      cards: [
        { title: 'Progress', description: 'See your training rhythm across the calendar.', action: 'progress', label: 'View progress' },
        { title: 'Achievements', description: 'Collect milestones as your solving identity grows.', action: 'achievements', label: 'View achievements' },
        { title: 'Replays', description: 'Save and revisit the solves worth remembering.', action: 'replays', label: 'View replays' },
        { title: 'Cube state', description: 'Export, import, or reset a puzzle position.', action: 'state', label: 'Open state tools' },
        { title: 'View controls', description: 'Choose a camera preset for a better angle on the cube.', action: 'camera', label: 'Open camera' },
        { title: 'Feedback', description: 'Tune sound, vibration, and move feedback intensity.', action: 'feedback', label: 'Open feedback' },
        { title: 'Input help', description: 'Review keyboard and controller shortcuts.', action: 'input', label: 'Open input help' },
        { title: 'Theme', description: 'Choose the visual treatment that feels right for your session.', action: 'theme', label: 'Open theme' }
      ]
    }
  });

  function loadAcademyProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(academyStorageKey) || 'null');
      if (saved && saved.version === 1 && Array.isArray(saved.completed)) {
        return { version: 1, completed: saved.completed.filter(chapter => Number.isInteger(chapter) && chapter >= 0 && chapter < academyChapterTitles.length), lastViewed: Number.isInteger(saved.lastViewed) ? saved.lastViewed : 0 };
      }
    } catch (error) {
      // Local storage is optional; an unavailable store should not block play.
    }
    return { version: 1, completed: [], lastViewed: 0 };
  }

  function saveAcademyProgress() {
    try { localStorage.setItem(academyStorageKey, JSON.stringify(academyProgressState)); } catch (error) { /* optional */ }
  }

  function renderAcademyDeck() {
    const completed = academyProgressState.completed.length;
    const nextChapter = Math.min(completed, academyChapterTitles.length - 1);
    const isComplete = completed >= academyChapterTitles.length;
    academyDeckTitle.textContent = isComplete ? 'Academy complete' : academyChapterTitles[nextChapter];
    academyDeckDescription.textContent = isComplete ? 'You have cleared the core path. Keep your edge in Practice.' : `Chapter ${nextChapter + 1}: ${academyScreens.journey.cards[0].description}`;
    academyContinue.textContent = isComplete ? 'Enter practice' : 'Continue training';
    academyContinue.dataset.academyAction = isComplete ? 'practice' : 'continue';
    academyRank.textContent = completed >= 5 ? 'Solver' : completed >= 3 ? 'Apprentice' : completed >= 1 ? 'Learner' : 'Initiate';
    academyProgressBar.style.width = `${Math.max(8, Math.round((completed / academyChapterTitles.length) * 100))}%`;
    const label = academyDeck.querySelector('.academy-progress-label');
    if (label) label.textContent = isComplete ? 'Core path cleared' : `Chapter ${nextChapter + 1} of ${academyChapterTitles.length}`;
  }

  function recordAcademySolve() {
    const finalChapter = academyChapterTitles.length - 1;
    if (!academyProgressState.completed.includes(finalChapter)) {
      academyProgressState.completed.push(finalChapter);
      academyProgressState.completed.sort((a, b) => a - b);
      saveAcademyProgress();
      renderAcademyDeck();
    }
  }

  function makeAcademyButton(label, action, primary = false) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = primary ? 'button-primary' : '';
    button.dataset.academyAction = action;
    button.textContent = label;
    return button;
  }

  function renderAcademyScreen() {
    const screen = academyScreens[academyScreenState];
    academyScreen.replaceChildren();
    const heading = document.createElement('div');
    heading.className = 'academy-screen-heading';
    const eyebrow = document.createElement('p');
    eyebrow.className = 'eyebrow';
    eyebrow.textContent = screen.eyebrow;
    const title = document.createElement('h2');
    title.id = 'academy-screen-title';
    title.textContent = screen.title;
    const description = document.createElement('p');
    description.textContent = screen.description;
    heading.append(eyebrow, title, description);

    const cardGrid = document.createElement('div');
    cardGrid.className = 'academy-card-grid';
    const cardDataList = academyScreenState === 'journey' ? [{ ...screen.cards[0], title: academyChapterTitles[Math.min(academyProgressState.completed.length, academyChapterTitles.length - 1)] }] : screen.cards;
    cardDataList.forEach(cardData => {
      const card = document.createElement('article');
      card.className = 'academy-card';
      const cardTitle = document.createElement('h3');
      cardTitle.textContent = cardData.title;
      const cardDescription = document.createElement('p');
      cardDescription.textContent = cardData.description;
      const actions = document.createElement('div');
      actions.className = 'academy-card-actions';
      actions.append(makeAcademyButton(cardData.label, cardData.action, cardData.action === 'continue'));
      card.append(cardTitle, cardDescription, actions);
      cardGrid.append(card);
    });
    academyScreen.append(heading, cardGrid);
  }

  function openLegacyPanel(panelId, toggleId) {
    const panel = document.getElementById(panelId);
    const toggle = document.getElementById(toggleId);
    if (!panel) return;
    panel.hidden = false;
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
    panel.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'nearest' });
  }

  function startAcademyTraining() {
    academyDeck.hidden = true;
    academyScreen.hidden = true;
    academyHud.hidden = false;
    tutor.hidden = false;
    controls.hidden = false;
    tutorToggle.setAttribute('aria-expanded', 'true');
    tutorToggle.textContent = 'Close guided solve';
    renderTutor();
    status.textContent = 'Journey started. Follow one goal at a time.';
    tutor.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'nearest' });
  }

  function exitAcademyTraining() {
    academyHud.hidden = true;
    tutor.hidden = true;
    controls.hidden = true;
    tutorToggle.setAttribute('aria-expanded', 'false');
    tutorToggle.textContent = 'Guided solve';
    academyDeck.hidden = false;
    academyScreen.hidden = false;
    status.textContent = 'Session paused. Your Academy progress is saved.';
  }

  function handleAcademyAction(action) {
    if (action === 'continue') return startAcademyTraining();
    if (action === 'daily') return dailyChallengeButton.click();
    if (action === 'speedrun') return openLegacyPanel('speedrun', 'speedrun-toggle');
    if (action === 'missions') return openLegacyPanel('missions', 'missions-toggle');
    if (action === 'algorithms') return openLegacyPanel('algorithms', 'algorithms-toggle');
    if (action === 'replays') return openLegacyPanel('replays', 'replays-toggle');
    if (action === 'progress') return openLegacyPanel('progress', 'progress-toggle');
    if (action === 'achievements') return openLegacyPanel('achievements', 'achievements-toggle');
    if (action === 'state') return openLegacyPanel('state-tools', 'state-toggle');
    if (action === 'scramble') return document.querySelector('.scramble-studio').removeAttribute('hidden');
    if (action === 'two-player') return document.querySelector('.two-player').removeAttribute('hidden');
    if (action === 'camera') return document.querySelector('.camera-tools').removeAttribute('hidden');
    if (action === 'feedback') return document.querySelector('.feedback-tools').removeAttribute('hidden');
    if (action === 'input') return openLegacyPanel('input-help', 'input-toggle');
    if (action === 'theme') return document.querySelector('.theme-control').removeAttribute('hidden');
  }

  function setAcademyScreen(nextScreen) {
    if (!academyScreens[nextScreen]) return;
    academyScreenState = nextScreen;
    academyNavButtons.forEach(button => {
      const active = button.dataset.academyScreen === nextScreen;
      button.classList.toggle('is-active', active);
      if (active) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    const screen = academyScreens[nextScreen];
    academyDeckTitle.textContent = nextScreen === 'journey' ? 'Orientation' : screen.title;
    academyDeckDescription.textContent = nextScreen === 'journey' ? screen.cards[0].description : screen.description;
    academyContinue.textContent = nextScreen === 'journey' ? 'Continue training' : `Open ${screen.label.toLowerCase()}`;
    academyContinue.dataset.academyAction = nextScreen === 'journey' ? 'continue' : nextScreen;
    academyDeck.hidden = false;
    academyScreen.hidden = false;
    academyProgressState.lastViewed = Math.min(academyProgressState.completed.length, academyChapterTitles.length - 1);
    saveAcademyProgress();
    renderAcademyDeck();
    renderAcademyScreen();
  }

  function setBusy(value) {
    busy = value;
    shuffleButton.disabled = value;
    dailyChallengeButton.disabled = value;
    solveButton.disabled = value || history.length === 0;
    controls.disabled = value;
  }

  function hasStoryProgress() {
    try {
      const saved = JSON.parse(window.localStorage.getItem(storyStorageKey) || 'null');
      return Boolean(saved && saved.version === 1);
    } catch (error) {
      return false;
    }
  }

  function closeStoryMenu() {
    storyMenu.hidden = true;
    storyMenuToggle.setAttribute('aria-expanded', 'false');
  }

  function showStoryTitle(message = '') {
    closeStoryMenu();
    storyShell.hidden = false;
    fieldKitContent.hidden = true;
    fieldKitCube.hidden = true;
    storyPrimary.textContent = hasStoryProgress() ? 'Continue the Route' : 'Begin the Route';
    storyLocation.textContent = hasStoryProgress() ? 'The route is waiting' : 'Ash Gate · Gatehouse';
    storyShellStatus.textContent = message;
    document.body.dataset.experience = 'story';
    storyPrimary.focus();
  }

  function openFieldKit() {
    closeStoryMenu();
    storyShell.hidden = true;
    fieldKitContent.hidden = false;
    fieldKitCube.hidden = false;
    document.body.dataset.experience = 'field-kit';
    status.textContent = 'Field Kit opened. Story progress is unchanged.';
    fieldKitExit.focus();
  }

  function enterStoryRoute() {
    storyShell.dataset.view = 'route';
    storyPrimary.textContent = 'Enter the Gatehouse';
    storyLocation.textContent = 'Checkpoint 1 of 12 · Ash Gate';
    storyIntro.textContent = 'The Warden compass points to the Gatehouse. One route remains, and the first cube seal is waiting.';
    storyShellStatus.textContent = 'Route opened. Gatehouse is the first checkpoint.';
  }

  async function runSequence(moves, record) {
    setBusy(true);
    cube.classList.add('is-sequencing');
    try {
      for (const move of moves) {
        turn(move, record);
        if (!reducedMotion) await wait(95);
      }
    } finally {
      cube.classList.remove('is-sequencing');
      setBusy(false);
    }
  }

  async function playReplay(replay, record = false) {
    if (!isReplay(replay)) throw new Error('Cannot play an invalid replay.');
    await runSequence(replay.moves, record);
  }

  function stepReplay(replay, index, record = false) {
    if (!isReplay(replay)) throw new Error('Cannot step through an invalid replay.');
    if (!Number.isInteger(index) || index < 0 || index >= replay.moves.length) return index;
    turn(replay.moves[index], record);
    return index + 1;
  }

  function shuffleMoves(length = 24) {
    const names = Object.keys(faces);
    const moves = [];
    while (moves.length < length) {
      const face = names[Math.floor(Math.random() * names.length)];
      if (!moves.length || moves[moves.length - 1][0] !== face) moves.push(`${face}${Math.random() < .5 ? '' : "'"}`);
    }
    return moves;
  }

  function studioFacePool(mode) {
    return mode === 'vertical' ? ['U', 'D'] : mode === 'horizontal' ? ['F', 'B'] : mode === 'sides' ? ['R', 'L'] : Object.keys(faces);
  }

  function generateStudioScramble() {
    const length = Math.max(1, Math.min(80, Number.parseInt(scrambleLength.value, 10) || 20));
    const facesForMode = studioFacePool(scrambleFaceMode.value);
    let seed = Math.max(0, Number.parseInt(scrambleSeed.value, 10) || 0) + 1;
    const random = () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };
    studioMoves = [];
    while (studioMoves.length < length) {
      const face = facesForMode[Math.floor(random() * facesForMode.length)];
      if (studioMoves.length && studioMoves.at(-1)[0] === face) continue;
      const suffix = scrambleDoubles.checked ? ['', "'", '2'][Math.floor(random() * 3)] : random() < .5 ? '' : "'";
      studioMoves.push(`${face}${suffix}`);
    }
    scramblePreview.replaceChildren(...studioMoves.map(move => { const chip = document.createElement('span'); chip.className = 'move-chip'; chip.setAttribute('role', 'listitem'); chip.textContent = move; return chip; }));
    status.textContent = `Generated ${studioMoves.length}-move scramble preview.`;
  }

  function resetTwoPlayerState() {
    if (twoPlayerTimerId) window.clearInterval(twoPlayerTimerId);
    twoPlayerTimerId = 0;
    twoPlayerState = { phase: 'idle', players: [{ name: 'Player 1', score: 0 }, { name: 'Player 2', score: 0 }], activeIndex: 0, startedAt: 0, moves: [0, 0], timesMs: [0, 0], winner: '' };
  }

  function startTwoPlayerRound(names = ['Player 1', 'Player 2']) {
    if (twoPlayerTimerId) window.clearInterval(twoPlayerTimerId);
    const cleanNames = names.map((name, index) => String(name || '').trim().slice(0, 24) || `Player ${index + 1}`);
    twoPlayerState = { phase: 'playing', players: cleanNames.map(name => ({ name, score: 0 })), activeIndex: 0, startedAt: performance.now(), moves: [0, 0], timesMs: [0, 0], winner: '' };
    twoPlayerTimerId = window.setInterval(renderTwoPlayer, 100);
    return { ...twoPlayerState, players: twoPlayerState.players.map(player => ({ ...player })) };
  }

  function advanceTwoPlayerTurn() {
    if (twoPlayerState.phase !== 'playing') return false;
    twoPlayerState.timesMs[twoPlayerState.activeIndex] += performance.now() - twoPlayerState.startedAt;
    twoPlayerState.activeIndex = twoPlayerState.activeIndex === 0 ? 1 : 0;
    twoPlayerState.startedAt = performance.now();
    return true;
  }

  function finishTwoPlayerRound(winnerIndex = twoPlayerState.activeIndex) {
    if (twoPlayerState.phase !== 'playing') return false;
    twoPlayerState.timesMs[twoPlayerState.activeIndex] += performance.now() - twoPlayerState.startedAt;
    twoPlayerState.players[winnerIndex].score += 1;
    twoPlayerState.winner = twoPlayerState.players[winnerIndex].name;
    twoPlayerState.phase = 'complete';
    if (twoPlayerTimerId) window.clearInterval(twoPlayerTimerId);
    twoPlayerTimerId = 0;
    recordTwoPlayerMatch();
    return true;
  }

  function loadTwoPlayerHistory() {
    try {
      const stored = JSON.parse(window.localStorage.getItem(twoPlayerHistoryStorageKey) || '[]');
      return Array.isArray(stored) ? stored.filter(match => match && Array.isArray(match.players) && match.players.length === 2 && typeof match.winner === 'string').slice(-10) : [];
    } catch (error) {
      return [];
    }
  }

  function saveTwoPlayerHistory() {
    try { window.localStorage.setItem(twoPlayerHistoryStorageKey, JSON.stringify(twoPlayerHistory.slice(-10))); } catch (error) { /* History remains available in memory. */ }
  }

  function recordTwoPlayerMatch() {
    twoPlayerHistory = [...twoPlayerHistory, { players: twoPlayerState.players.map(player => ({ name: player.name, score: player.score })), winner: twoPlayerState.winner, timesMs: twoPlayerState.timesMs.slice(), createdAt: new Date().toISOString() }].slice(-10);
    saveTwoPlayerHistory();
    renderTwoPlayerHistory();
  }

  function renderTwoPlayerHistory() {
    twoPlayerHistoryList.replaceChildren(...twoPlayerHistory.slice().reverse().map(match => {
      const item = document.createElement('div');
      item.className = 'two-player-history-item';
      item.textContent = `${match.players[0].name} ${match.players[0].score} - ${match.players[1].name} ${match.players[1].score} - Winner: ${match.winner}`;
      return item;
    }));
  }

  function renderTwoPlayer() {
    const active = twoPlayerState.phase === 'playing' ? twoPlayerState.players[twoPlayerState.activeIndex].name : '';
    twoPlayerStatus.textContent = twoPlayerState.phase === 'idle' ? 'Ready for two players.' : twoPlayerState.phase === 'complete' ? `${twoPlayerState.winner} wins the round.` : `${active} is up. ${twoPlayerState.moves[twoPlayerState.activeIndex]} moves played.`;
    const activeTime = twoPlayerState.phase === 'playing' ? twoPlayerState.timesMs[twoPlayerState.activeIndex] + performance.now() - twoPlayerState.startedAt : twoPlayerState.timesMs[twoPlayerState.activeIndex];
    twoPlayerTime.textContent = `Active time: ${formatDuration(activeTime)}`;
    twoPlayerScore.replaceChildren(...twoPlayerState.players.map((player, index) => {
      const item = document.createElement('span');
      item.className = `two-player-score-item${twoPlayerState.phase === 'playing' && index === twoPlayerState.activeIndex ? ' is-active' : ''}`;
      item.textContent = `${player.name}: ${player.score}`;
      return item;
    }));
    twoPlayerStart.disabled = twoPlayerState.phase === 'playing';
    twoPlayerNext.disabled = twoPlayerState.phase !== 'playing';
    twoPlayerEnd.disabled = twoPlayerState.phase !== 'playing';
  }

  controls.addEventListener('click', event => {
    const button = event.target.closest('button[data-move]');
    if (!button || busy) return;
    turn(button.dataset.move);
    solveButton.disabled = false;
    status.textContent = `${button.dataset.move} turn applied.`;
    announceGuidedProgress();
    if (speedrunState === 'running' && isSolvedState()) finishSpeedrun();
  });

  document.addEventListener('keydown', event => {
    const target = event.target;
    if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement || target.isContentEditable) return;
    const cameraStep = event.shiftKey ? 20 : 10;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      if (event.key === 'ArrowLeft') rotation.y -= cameraStep;
      if (event.key === 'ArrowRight') rotation.y += cameraStep;
      if (event.key === 'ArrowUp') rotation.x = Math.max(-78, rotation.x - cameraStep);
      if (event.key === 'ArrowDown') rotation.x = Math.min(78, rotation.x + cameraStep);
      updateView();
      cameraStatus.textContent = 'Custom view active.';
      status.textContent = 'Camera rotated from the keyboard. Puzzle state unchanged.';
      return;
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'z') {
      if (undoLastMove()) event.preventDefault();
      return;
    }
    const move = keyboardShortcuts[event.key];
    if (!move || busy) return;
    event.preventDefault();
    turn(move);
    recordProgressEvent('keyboard', move);
    solveButton.disabled = false;
    status.textContent = `${move} turn applied from the keyboard.`;
    announceGuidedProgress();
    if (speedrunState === 'running' && isSolvedState()) finishSpeedrun();
  });
  if (navigator.getGamepads) gamepadTimerId = window.setInterval(pollGamepads, 100);
  window.addEventListener('gamepadconnected', () => { status.textContent = 'Gamepad connected. Face-turn buttons are ready.'; });
  window.addEventListener('gamepaddisconnected', () => { gamepadButtons = []; status.textContent = 'Gamepad disconnected.'; });

  shuffleButton.addEventListener('click', async () => {
    if (busy) return;
    clearChallengeState();
    history = [];
    hideCelebration();
    initialize();
    status.textContent = 'Shuffling…';
    await runSequence(shuffleMoves(), true);
    status.textContent = 'Shuffled. Drag to inspect it or make a face turn.';
  });

  dailyChallengeButton.addEventListener('click', async () => {
    if (busy) return;
    clearChallengeState('daily');
    initialize();
    history = [];
    hideCelebration();
    const dateKey = getLocalDateKey();
    dailyResult.hidden = true;
    status.textContent = `Starting the ${dateKey} daily challenge…`;
    startDailyResult(dateKey);
    dailyChallengePreparing = true;
    await runSequence(dailyScrambleMoves(), true);
    dailyChallengePreparing = false;
    status.textContent = `Daily challenge ready for ${dateKey}. Solve it at your own pace.`;
  });

  speedrunToggle.addEventListener('click', () => {
    const opening = speedrun.hidden;
    speedrun.hidden = !opening;
    speedrunToggle.setAttribute('aria-expanded', String(opening));
    if (opening) status.textContent = 'Speedrun ready. Start when you are ready.';
  });
  speedrunStart.addEventListener('click', startSpeedrun);
  speedrunReset.addEventListener('click', resetSpeedrun);
  speedrunClear.addEventListener('click', () => {
    speedrunRecords = [];
    saveSpeedrunRecords();
    renderSpeedrunStats();
    status.textContent = 'Speedrun history cleared.';
  });
  missionsToggle.addEventListener('click', () => {
    missions.hidden = false;
    missionsToggle.setAttribute('aria-expanded', 'true');
    renderMissions();
    status.textContent = 'Missions opened. Choose a challenge card.';
  });
  missionsClose.addEventListener('click', () => {
    missions.hidden = true;
    missionsToggle.setAttribute('aria-expanded', 'false');
    status.textContent = 'Missions closed.';
  });
  missionList.addEventListener('click', event => {
    const button = event.target.closest('button[data-mission]');
    if (button) startMission(button.dataset.mission);
  });
  replaysToggle.addEventListener('click', () => {
    replays.hidden = false;
    replaysToggle.setAttribute('aria-expanded', 'true');
    renderReplays();
    status.textContent = 'Replay browser opened.';
  });
  replaysClose.addEventListener('click', () => {
    replays.hidden = true;
    replaysToggle.setAttribute('aria-expanded', 'false');
    status.textContent = 'Replay browser closed.';
  });
  replaySave.addEventListener('click', saveCurrentReplay);
  replayList.addEventListener('click', async event => {
    const button = event.target.closest('button[data-replay-action]');
    if (!button || busy) return;
    const replay = replayRecords[Number(button.dataset.replayIndex)];
    if (!replay) return;
    if (button.dataset.replayAction === 'play') {
      clearChallengeState('replay');
      initialize();
      history = [];
      status.textContent = 'Playing replay…';
      await playReplay(replay, true);
      status.textContent = 'Replay finished.';
    } else {
      try {
        await copyText(encodeReplay(replay));
        status.textContent = 'Replay code copied.';
      } catch (error) {
        status.textContent = 'Could not copy the replay code.';
      }
    }
  });
  [...new Set(algorithmCatalog.map(algorithm => algorithm.category))].forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    algorithmCategory.append(option);
  });
  algorithmsToggle.addEventListener('click', () => {
    algorithms.hidden = false;
    algorithmsToggle.setAttribute('aria-expanded', 'true');
    renderAlgorithms();
    status.textContent = 'Algorithm library opened.';
  });
  algorithmsClose.addEventListener('click', () => {
    algorithms.hidden = true;
    algorithmsToggle.setAttribute('aria-expanded', 'false');
    status.textContent = 'Algorithm library closed.';
  });
  algorithmCategory.addEventListener('change', event => {
    selectedAlgorithmCategory = event.target.value;
    renderAlgorithms();
  });
  stateToggle.addEventListener('click', () => {
    stateTools.hidden = false;
    stateToggle.setAttribute('aria-expanded', 'true');
    stateInput.value = serializeCubeState();
    status.textContent = 'Cube state tools opened.';
  });
  stateClose.addEventListener('click', () => {
    stateTools.hidden = true;
    stateToggle.setAttribute('aria-expanded', 'false');
    status.textContent = 'Cube state tools closed.';
  });
  stateExport.addEventListener('click', () => {
    stateInput.value = serializeCubeState();
    status.textContent = 'Current cube state exported below.';
  });
  stateCopy.addEventListener('click', async () => {
    try {
      await copyText(serializeCubeState());
      status.textContent = 'Cube state copied.';
    } catch (error) {
      status.textContent = 'Could not copy cube state.';
    }
  });
  stateImport.addEventListener('click', () => {
    try {
      importCubeState(stateInput.value);
      status.textContent = 'Cube state imported.';
    } catch (error) {
      status.textContent = `Import failed: ${error.message}`;
    }
  });
  stateReset.addEventListener('click', () => {
    clearChallengeState();
    initialize();
    history = [];
    stateInput.value = serializeCubeState();
    status.textContent = 'Cube reset to solved state.';
  });
  progressMonthInput.value = getLocalDateKey().slice(0, 7);
  progressToggle.addEventListener('click', () => {
    progressPanel.hidden = false;
    progressToggle.setAttribute('aria-expanded', 'true');
    renderProgress();
    status.textContent = 'Progress calendar opened.';
  });
  progressClose.addEventListener('click', () => {
    progressPanel.hidden = true;
    progressToggle.setAttribute('aria-expanded', 'false');
    status.textContent = 'Progress calendar closed.';
  });
  progressClear.addEventListener('click', () => {
    progressEvents = [];
    saveProgressEvents();
    renderProgress();
    status.textContent = 'Progress history cleared.';
  });
  progressMonthInput.addEventListener('change', renderProgress);
  function renderInputHelp() {
    inputHelpList.replaceChildren();
    Object.entries(keyboardShortcuts).forEach(([key, move]) => {
      const row = document.createElement('div');
      row.className = 'input-help-row';
      const keyLabel = document.createElement('span');
      keyLabel.className = 'input-key';
      keyLabel.textContent = key;
      const moveLabel = document.createElement('span');
      moveLabel.textContent = `${move} turn`;
      row.append(keyLabel, moveLabel);
      inputHelpList.append(row);
    });
    const undo = document.createElement('div');
    undo.className = 'input-help-row';
    const undoKey = document.createElement('span');
    undoKey.className = 'input-key';
    undoKey.textContent = 'Ctrl/Cmd + Z';
    const undoLabel = document.createElement('span');
    undoLabel.textContent = 'Undo last move';
    undo.append(undoKey, undoLabel);
    inputHelpList.append(undo);
    const gamepad = document.createElement('div');
    gamepad.className = 'input-help-row';
    const gamepadKey = document.createElement('span');
    gamepadKey.className = 'input-key';
    gamepadKey.textContent = 'Gamepad A/B/X/Y';
    const gamepadLabel = document.createElement('span');
    gamepadLabel.textContent = "R/U/R'/U' turns";
    gamepad.append(gamepadKey, gamepadLabel);
    inputHelpList.append(gamepad);
  }
  function renderAchievements() {
    achievementList.replaceChildren(...achievementCatalog.map(achievement => {
      const card = document.createElement('article');
      const unlocked = Boolean(achievementState[achievement.id]);
      card.className = `achievement-card${unlocked ? ' is-unlocked' : ' is-locked'}`;
      const title = document.createElement('h3');
      title.textContent = achievement.title;
      const description = document.createElement('p');
      description.textContent = achievement.description;
      const state = document.createElement('div');
      state.className = 'achievement-status';
      state.textContent = unlocked ? 'Unlocked' : 'Locked';
      card.append(title, description, state);
      return card;
    }));
  }
  inputToggle.addEventListener('click', () => {
    inputHelp.hidden = false;
    inputToggle.setAttribute('aria-expanded', 'true');
    renderInputHelp();
    status.textContent = 'Input help opened.';
  });
  inputClose.addEventListener('click', () => {
    inputHelp.hidden = true;
    inputToggle.setAttribute('aria-expanded', 'false');
    status.textContent = 'Input help closed.';
  });
  achievementsToggle.addEventListener('click', () => {
    achievements.hidden = false;
    achievementsToggle.setAttribute('aria-expanded', 'true');
    renderAchievements();
    status.textContent = 'Achievements opened.';
  });
  achievementsClose.addEventListener('click', () => {
    achievements.hidden = true;
    achievementsToggle.setAttribute('aria-expanded', 'false');
    status.textContent = 'Achievements closed.';
  });
  achievementsReset.addEventListener('click', () => {
    if (!window.confirm('Reset achievement progress and related practice history?')) return;
    achievementState = {};
    progressEvents = [];
    algorithmProgress = {};
    replayRecords = [];
    saveAchievementState();
    saveProgressEvents();
    saveAlgorithmProgress();
    saveReplayRecords();
    renderAchievements();
    renderProgress();
    renderAlgorithms();
    renderReplays();
    status.textContent = 'Achievement progress reset.';
  });
  algorithmList.addEventListener('click', async event => {
    const button = event.target.closest('button[data-algorithm]');
    if (!button || busy) return;
    const algorithm = algorithmCatalog.find(item => item.id === button.dataset.algorithm);
    if (!algorithm) return;
    initialize();
    history = [];
    status.textContent = `Practising ${algorithm.title}…`;
    await runSequence(algorithm.moves, true);
    algorithmProgress[algorithm.id] = { count: (algorithmProgress[algorithm.id]?.count || 0) + 1, lastPractised: new Date().toISOString() };
    saveAlgorithmProgress();
    evaluateAchievements();
    renderAlgorithms();
    status.textContent = `${algorithm.title} practice applied. Use Solve to undo it.`;
  });
  themeSelect.addEventListener('change', event => {
    setTheme(event.target.value);
    status.textContent = `${themeSelect.options[themeSelect.selectedIndex].text} theme selected.`;
  });

  solveButton.addEventListener('click', async () => {
    if (busy || !history.length) return;
    status.textContent = 'Solving…';
    const solution = [...history].reverse().map(inverse);
    await runSequence(solution, false);
    const challengeDateKey = dailyChallengeDateKey;
    completeDailyResult(challengeDateKey);
    renderDailyResult(challengeDateKey);
    history = [];
    updateCubeLabel();
    solveButton.disabled = true;
    status.textContent = 'Solved — every face is back in place.';
    celebrateSolved();
    recordProgressEvent('solved', 'cube');
    recordAcademySolve();
    checkActiveMission();
  });
  dailyShareButton.addEventListener('click', copyDailyResult);

  tutorToggle.addEventListener('click', () => {
    const opening = tutor.hidden;
    tutor.hidden = !opening;
    tutorToggle.setAttribute('aria-expanded', String(opening));
    tutorToggle.textContent = opening ? 'Close guided solve' : 'Guided solve';
    if (opening) {
      renderTutor();
      status.textContent = 'Guided solve opened. Follow one goal at a time.';
    }
  });
  tutorPrevious.addEventListener('click', () => {
    if (tutorStep > 0) {
      tutorStep -= 1;
      renderTutor();
      status.textContent = `Guided solve: ${lessons[tutorStep].title}.`;
    }
  });
  tutorNext.addEventListener('click', () => {
    tutorStep = tutorStep === lessons.length - 1 ? 0 : tutorStep + 1;
    renderTutor();
    status.textContent = `Guided solve: ${lessons[tutorStep].title}.`;
  });
  tutorDemo.addEventListener('click', async () => {
    if (busy) return;
    const lesson = lessons[tutorStep];
    status.textContent = `Practising ${lesson.moves.join(' ')}…`;
    await runSequence(lesson.moves, true);
    status.textContent = 'Practice move applied. Use Solve any time to undo your practice.';
    announceGuidedProgress();
  });

  academyNavButtons.forEach(button => {
    button.addEventListener('click', () => setAcademyScreen(button.dataset.academyScreen));
  });
  academyContinue.addEventListener('click', () => {
    const action = academyContinue.dataset.academyAction || 'continue';
    if (action === 'practice' || action === 'vault') setAcademyScreen(action);
    else handleAcademyAction(action);
  });
  academyExit.addEventListener('click', exitAcademyTraining);
  academyScreen.addEventListener('click', event => {
    const button = event.target.closest('[data-academy-action]');
    if (button) handleAcademyAction(button.dataset.academyAction);
  });
  storyMenuToggle.addEventListener('click', () => {
    const opening = storyMenu.hidden;
    storyMenu.hidden = !opening;
    storyMenuToggle.setAttribute('aria-expanded', String(opening));
    if (opening) storyMenuClose.focus();
  });
  storyMenuClose.addEventListener('click', () => {
    closeStoryMenu();
    storyMenuToggle.focus();
  });
  storyFieldKit.addEventListener('click', openFieldKit);
  fieldKitExit.addEventListener('click', () => showStoryTitle('Returned to the story. Cube state is unchanged.'));
  storyNewGame.addEventListener('click', () => {
    if (!window.confirm('Start a new route? This resets only Cube Warden story progress.')) return;
    try { window.localStorage.removeItem(storyStorageKey); } catch (error) { /* optional */ }
    storyShell.dataset.view = 'title';
    storyIntro.textContent = 'Twelve seals stand between Aya and the Dawn Vault. Restore each cube before the Void Wraiths close in.';
    showStoryTitle('New route ready at the Ash Gate.');
  });
  storyPrimary.addEventListener('click', enterStoryRoute);

  viewport.addEventListener('pointerdown', event => {
    if (busy) return;
    pointer = { id: event.pointerId, x: event.clientX, y: event.clientY, originX: rotation.x, originY: rotation.y };
    viewport.setPointerCapture(event.pointerId);
    viewport.classList.add('is-dragging');
  });
  viewport.addEventListener('pointermove', event => {
    if (!pointer || event.pointerId !== pointer.id) return;
    rotation.y = pointer.originY + (event.clientX - pointer.x) * .45;
    rotation.x = Math.max(-78, Math.min(78, pointer.originX - (event.clientY - pointer.y) * .45));
    updateView();
  });
  function releasePointer(event) {
    if (!pointer || event.pointerId !== pointer.id) return;
    pointer = null;
    viewport.classList.remove('is-dragging');
  }
  viewport.addEventListener('pointerup', releasePointer);
  viewport.addEventListener('pointercancel', releasePointer);
  scrambleGenerate.addEventListener('click', generateStudioScramble);
  [scrambleLength, scrambleSeed, scrambleFaceMode, scrambleDoubles].forEach(control => control.addEventListener('change', generateStudioScramble));
  scrambleApply.addEventListener('click', async () => {
    if (busy || !studioMoves.length) return;
    history = [];
    initialize();
    status.textContent = 'Applying custom scramble…';
    await runSequence(studioMoves, true);
    solveButton.disabled = false;
    status.textContent = `Custom scramble applied: ${studioMoves.length} legal turns. Use Solve to reverse it.`;
  });
  scrambleCopy.addEventListener('click', async () => {
    if (!studioMoves.length) return;
    try {
      await copyText(studioMoves.join(' '));
      status.textContent = 'Scramble notation copied.';
    } catch (error) {
      status.textContent = 'Could not copy notation. Select the preview to copy it.';
    }
  });
  twoPlayerStart.addEventListener('click', () => {
    clearChallengeState('two-player');
    history = [];
    initialize();
    startTwoPlayerRound([playerOneName.value, playerTwoName.value]);
    renderTwoPlayer();
    status.textContent = `${twoPlayerState.players[0].name} starts the round.`;
  });
  twoPlayerNext.addEventListener('click', () => {
    if (!advanceTwoPlayerTurn()) return;
    renderTwoPlayer();
    status.textContent = `${twoPlayerState.players[twoPlayerState.activeIndex].name}'s turn.`;
  });
  twoPlayerEnd.addEventListener('click', () => {
    if (!finishTwoPlayerRound()) return;
    renderTwoPlayer();
    status.textContent = `${twoPlayerState.winner} wins the round.`;
  });
  twoPlayerReset.addEventListener('click', () => {
    resetTwoPlayerState();
    renderTwoPlayer();
    status.textContent = 'Two-player round reset.';
  });
  twoPlayerHistoryClear.addEventListener('click', () => {
    twoPlayerHistory = [];
    saveTwoPlayerHistory();
    renderTwoPlayerHistory();
    status.textContent = 'Two-player match history cleared.';
  });
  feedbackSound.addEventListener('change', updateFeedbackPreferences);
  feedbackVibration.addEventListener('change', updateFeedbackPreferences);
  feedbackIntensity.addEventListener('change', updateFeedbackPreferences);
  document.querySelectorAll('[data-camera-preset]').forEach(button => {
    button.addEventListener('click', () => {
      const preset = cameraPresets[button.dataset.cameraPreset];
      if (!applyCameraPreset(button.dataset.cameraPreset) || !preset) return;
      cameraStatus.textContent = `${preset.label} active.`;
      status.textContent = `${preset.label} applied. Puzzle state unchanged.`;
    });
  });

  initialize();
  dailyResults = loadDailyResults();
  speedrunRecords = loadSpeedrunRecords();
  renderSpeedrunStats();
  setTheme(loadTheme());
  algorithmProgress = loadAlgorithmProgress();
  missionProgress = loadMissionProgress();
  progressEvents = loadProgressEvents();
  achievementState = loadAchievementState();
  feedbackPreferences = loadFeedbackPreferences();
  renderFeedbackSettings();
  renderMissions();
  replayRecords = loadReplayRecords();
  renderReplays();
  renderAlgorithms();
  generateStudioScramble();
  renderTwoPlayer();
  twoPlayerHistory = loadTwoPlayerHistory();
  renderTwoPlayerHistory();
  academyProgressState = loadAcademyProgress();
  renderAcademyDeck();
  setAcademyScreen('journey');
  showStoryTitle();

  window.RubiksCubeChallenge = Object.freeze({
    getLocalDateKey,
    dailyScrambleMoves: (date, length) => dailyScrambleMoves(date, length).slice()
  });
  window.RubiksCubeAlgorithms = Object.freeze({ list: () => algorithmCatalog.map(algorithm => ({ ...algorithm, moves: algorithm.moves.slice() })) });
  window.RubiksCubeState = Object.freeze({ export: serializeCubeState, import: importCubeState, validate: validateCubeState, version: cubeStateVersion });
  window.RubiksCubeCamera = Object.freeze({ presets: () => Object.fromEntries(Object.entries(cameraPresets).map(([id, preset]) => [id, { ...preset }])), apply: applyCameraPreset });
  window.RubiksCubeProgress = Object.freeze({ events: () => progressEvents.slice(), record: recordProgressEvent });
  window.RubiksCubeInput = Object.freeze({ shortcuts: { ...keyboardShortcuts }, gamepad: { ...gamepadShortcuts } });
  window.RubiksCubeAchievements = Object.freeze({ list: () => achievementCatalog.map(achievement => ({ ...achievement, rule: { ...achievement.rule } })) });
  window.RubiksCubeFeedback = Object.freeze({ capabilities: feedbackCapabilities, preferences: () => ({ ...feedbackPreferences }), save: saveFeedbackPreferences });
  window.RubiksCubeTwoPlayer = Object.freeze({ state: () => ({ ...twoPlayerState, players: twoPlayerState.players.map(player => ({ ...player })), moves: twoPlayerState.moves.slice(), timesMs: twoPlayerState.timesMs.slice() }), start: startTwoPlayerRound, next: advanceTwoPlayerTurn, finish: finishTwoPlayerRound, reset: resetTwoPlayerState });
  window.RubiksCubeReplay = Object.freeze({ create: createReplay, isValid: isReplay, encode: encodeReplay, decode: decodeReplay, play: playReplay, step: stepReplay, version: replayVersion });
})();
