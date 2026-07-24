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
  const storyTitleCopy = document.getElementById('story-title-copy');
  const storyPrimary = document.getElementById('story-primary');
  const storyLocation = document.getElementById('story-location');
  const storyIntro = document.querySelector('.story-intro');
  const storyMenuToggle = document.getElementById('story-menu-toggle');
  const storyMenu = document.getElementById('story-menu');
  const storyMenuClose = document.getElementById('story-menu-close');
  const storyNewGame = document.getElementById('story-new-game');
  const storyFieldKit = document.getElementById('story-field-kit');
  const storyShellStatus = document.getElementById('story-shell-status');
  const archiveExploration = document.getElementById('archive-exploration');
  const archiveCanvas = document.getElementById('archive-canvas');
  const archiveSector = document.getElementById('archive-sector');
  const archiveLocation = document.getElementById('archive-location');
  const archiveObjective = document.getElementById('archive-objective');
  const archiveThreat = document.getElementById('archive-threat');
  const archiveProgress = document.getElementById('archive-progress');
  const archiveInteractionStatus = document.getElementById('archive-interaction-status');
  const archiveApproachSeal = document.getElementById('archive-approach-seal');
  const archiveBack = document.getElementById('archive-back');
  const storyEncounterPanel = document.getElementById('story-encounter-panel');
  const storyBriefing = document.getElementById('story-briefing');
  const storyEncounterSector = document.getElementById('story-encounter-sector');
  const storyEncounterTitle = document.getElementById('story-encounter-title');
  const storyEncounterNarrative = document.getElementById('story-encounter-narrative');
  const storyEncounterOrientation = document.getElementById('story-encounter-orientation');
  const storyEncounterObjective = document.getElementById('story-encounter-objective');
  const storyEnterSeal = document.getElementById('story-enter-seal');
  const storyBriefingMap = document.getElementById('story-briefing-map');
  const storyBriefingFieldKit = document.getElementById('story-briefing-field-kit');
  const storyGameplay = document.getElementById('story-gameplay');
  const storyGameplaySector = document.getElementById('story-gameplay-sector');
  const storyGameplayTitle = document.getElementById('story-gameplay-title');
  const storyGameplayObjective = document.getElementById('story-gameplay-objective');
  const storyMoveCount = document.getElementById('story-move-count');
  const storyProgressLabel = document.getElementById('story-progress-label');
  const storyPursuitLabel = document.getElementById('story-pursuit-label');
  const storyPursuitCount = document.getElementById('story-pursuit-count');
  const storyPursuitTrack = document.getElementById('story-pursuit-track');
  const storyTurnControls = document.getElementById('story-turn-controls');
  const storyHint = document.getElementById('story-hint');
  const storyHintText = document.getElementById('story-hint-text');
  const storyRetry = document.getElementById('story-retry');
  const storyGameplayMap = document.getElementById('story-gameplay-map');
  const storyGameplayFieldKit = document.getElementById('story-gameplay-field-kit');
  const storyVictory = document.getElementById('story-victory');
  const storyVictoryTitle = document.getElementById('story-victory-title');
  const storyVictorySummary = document.getElementById('story-victory-summary');
  const storyVictoryContinue = document.getElementById('story-victory-continue');
  const storyEpilogue = document.getElementById('story-epilogue');
  const storyEpilogueStat = document.getElementById('story-epilogue-stat');
  const storyReplayRoute = document.getElementById('story-replay-route');
  const storyEpilogueFieldKit = document.getElementById('story-epilogue-field-kit');
  const storyEpilogueTitle = document.getElementById('story-epilogue-title');
  const storyFailure = document.getElementById('story-failure');
  const storyFailureRetry = document.getElementById('story-failure-retry');
  const storyFailureMap = document.getElementById('story-failure-map');
  const storyFailureFieldKit = document.getElementById('story-failure-field-kit');
  const storyEncounterStatus = document.getElementById('story-encounter-status');
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
  const storyStorageKey = 'rubiks-cube.archive.v2';
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
  const storyVersion = 2;
  const storyEncounters = Object.freeze([
    Object.freeze({ id: 'gatehouse', sector: 'Ash Gate', location: 'Gatehouse', narrative: 'The first seal recognizes intent. Teach it the four-turn Warden signal.', objective: "Make R, U, R', U' in order.", setupMoves: Object.freeze([]), validatorId: 'sequence', progressId: 'sequence', targetMoves: 4, pressureBudget: 5, hints: Object.freeze(['Keep white on top and green facing you.', 'R turns the right face; U turns the top face.', "Use R, U, R', U'. The apostrophe means counter-clockwise."]) }),
    Object.freeze({ id: 'compass-hall', sector: 'Ash Gate', location: 'Compass Hall', narrative: 'The compass has been turned away from dawn. Walk its last four steps backward.', objective: 'Return the cube to six solid-color faces.', setupMoves: Object.freeze(['R', 'U', "R'", "U'"]), validatorId: 'solved', progressId: 'solvedFaces', targetMoves: 4, pressureBudget: 5, hints: Object.freeze(['Undo moves in reverse order.', "The inverse of U' is U, and the inverse of R' is R.", "Use U, R, U', R'."]) }),
    Object.freeze({ id: 'chapel-steps', sector: 'Glass Quarter', location: 'Chapel Steps', narrative: 'Two white lamps are dark on the chapel path. Raise their edge stones.', objective: 'Place at least two white edge stickers around the white center.', setupMoves: Object.freeze(['F', 'R', 'U', "R'", "U'", "F'"]), validatorId: 'whiteEdgesTwo', progressId: 'whiteEdges', targetMoves: 8, pressureBudget: 5, hints: Object.freeze(['Find pieces with white plus one other color.', 'Match an edge side color to its center before lifting it.', 'Use a double turn when a matched white edge is opposite the white face.']) }),
    Object.freeze({ id: 'mirror-bridge', sector: 'Glass Quarter', location: 'Mirror Bridge', narrative: 'Four mirrors must agree before the bridge becomes solid.', objective: 'Build the white cross with all four side colors matched.', setupMoves: Object.freeze(['F2', 'R', 'U', "R'", "U'", 'L2']), validatorId: 'whiteCross', progressId: 'whiteCross', targetMoves: 14, pressureBudget: 5, hints: Object.freeze(['Solve one white edge at a time.', 'The side color must match its center as well as white facing up.', 'Keep completed cross edges safe while you place the next one.']) }),
    Object.freeze({ id: 'lantern-rooms', sector: 'Sunken Stacks', location: 'Lantern Rooms', narrative: 'A corner lantern is loose. Seat it where its three colors meet.', objective: 'Place at least one white corner correctly.', setupMoves: Object.freeze(['R', 'D', "R'", "D'", 'F', 'D', "F'"]), validatorId: 'whiteCornerOne', progressId: 'whiteCorners', targetMoves: 10, pressureBudget: 5, hints: Object.freeze(['Find a corner with white and two side colors.', 'Bring it below the slot between its two matching centers.', "At front-right-bottom, repeat R', D', R, D until it seats."]) }),
    Object.freeze({ id: 'flooded-archive', sector: 'Sunken Stacks', location: 'Flooded Archive', narrative: 'The lower shelves rise only when the first layer is whole.', objective: 'Complete the white face and its matching first side rows.', setupMoves: Object.freeze(['R', 'U', "R'", 'F', 'U', "F'", 'L', 'D', "L'"]), validatorId: 'firstLayer', progressId: 'firstLayer', targetMoves: 24, pressureBudget: 5, hints: Object.freeze(['Finish the white cross before placing corners.', 'Work one white corner at a time below its destination.', "Repeat R', D', R, D for a corner at front-right-bottom."]) }),
    Object.freeze({ id: 'gearworks', sector: 'Iron Depths', location: 'Gearworks', narrative: 'One uncolored gear edge can restart the machine.', objective: 'Insert one correct middle-layer edge.', setupMoves: Object.freeze(['U', 'R', "U'", "R'", "U'", "F'", 'U', 'F']), validatorId: 'middleEdgeOne', progressId: 'middleEdges', targetMoves: 12, pressureBudget: 5, hints: Object.freeze(['Turn the cube so white is on the bottom.', 'Choose a top edge with no yellow and match its front color.', "For a right slot use U, R, U', R', U', F', U, F."]) }),
    Object.freeze({ id: 'furnace-passage', sector: 'Iron Depths', location: 'Furnace Passage', narrative: 'Four channels must align to carry heat through the passage.', objective: 'Complete all four middle-layer edges.', setupMoves: Object.freeze(['R', 'U2', "R'", "U'", 'F', 'U', "F'", 'L', "U'", "L'"]), validatorId: 'middleLayer', progressId: 'middleLayer', targetMoves: 36, pressureBudget: 5, hints: Object.freeze(['Keep white on the bottom.', 'Match a non-yellow top edge to the front center first.', 'Use the right or mirrored left insertion for each edge.']) }),
    Object.freeze({ id: 'observatory', sector: 'Star Tower', location: 'Observatory', narrative: 'The star lens needs a yellow cross to find the Dawn Vault.', objective: 'Form a yellow cross on the top face.', setupMoves: Object.freeze(['F', 'R', 'U', "R'", "U'", "F'"]), validatorId: 'yellowCross', progressId: 'yellowEdges', targetMoves: 12, pressureBudget: 5, hints: Object.freeze(['Only the four yellow edge stickers matter now.', 'Hold a yellow line horizontally or an L in the top-left.', "Use F, R, U, R', U', F' and repeat if needed."]) }),
    Object.freeze({ id: 'clock-tower', sector: 'Star Tower', location: 'Clock Tower', narrative: 'Turn every golden dial upward before the last bell.', objective: 'Orient the complete yellow face upward.', setupMoves: Object.freeze(['R', 'U', "R'", 'U', 'R', 'U2', "R'"]), validatorId: 'yellowFace', progressId: 'yellowFace', targetMoves: 28, pressureBudget: 5, hints: Object.freeze(['Keep yellow on top throughout this seal.', 'Work with one unsolved top corner at front-right.', "Repeat R', D', R, D until that corner faces up, then turn only U."]) }),
    Object.freeze({ id: 'wardens-door', sector: 'Warden Keep', location: "Warden's Door", narrative: 'The door knows every color. Put the final pieces in their true homes.', objective: 'Position the last-layer pieces so every side color matches.', setupMoves: Object.freeze(['U', 'R', "U'", "L'", 'U', "R'", "U'", 'L']), validatorId: 'lastLayerPositioned', progressId: 'solvedStickers', targetMoves: 34, pressureBudget: 5, hints: Object.freeze(['A corner is positioned when its three colors match nearby centers.', 'Hold one correct corner at front-right-top.', "Use U, R, U', L', U, R', U', L to cycle the others."]) }),
    Object.freeze({ id: 'dawn-vault', sector: 'Warden Keep', location: 'Dawn Vault', narrative: 'The final seal contains every lesson. Restore all six faces and bring back the dawn.', objective: 'Return the entire cube to its solved state.', setupMoves: Object.freeze(['R', 'U', "R'", "U'", 'F2', 'D', 'L', "D'", "L'"]), validatorId: 'solved', progressId: 'solvedStickers', targetMoves: 60, pressureBudget: 5, hints: Object.freeze(['Solve in layers: white, middle, then yellow.', 'Use the Field Kit lessons if you need to review an algorithm.', 'Follow the objective steps already learned; any valid full solve counts.']) })
  ]);
  const storyEncounterIds = new Set(storyEncounters.map(encounter => encounter.id));
  const archiveStateModel = window.CubeWardenArchiveState.createModel(
    storyEncounters.map(encounter => encounter.id),
    { version: storyVersion, entranceId: 'archive-entrance' }
  );
  const archiveCheckpointSpawns = Object.freeze({
    'archive-entrance': Object.freeze({ x: 0, z: 3.35, yaw: 0 }),
    'gatehouse': Object.freeze({ x: 0, z: -7.55, yaw: 0 }),
    'compass-hall': Object.freeze({ x: 0, z: -30.5, yaw: 0 }),
    'chapel-steps': Object.freeze({ x: 18, z: -43.5, yaw: 0 }),
    'mirror-bridge': Object.freeze({ x: 28, z: -61.5, yaw: Math.PI / 2 }),
    'lantern-rooms': Object.freeze({ x: 40, z: -62, yaw: Math.PI / 2 }),
    'flooded-archive': Object.freeze({ x: 60, z: -69, yaw: 0 }),
    'gearworks': Object.freeze({ x: 63, z: -86, yaw: Math.PI / 2 }),
    'furnace-passage': Object.freeze({ x: 76, z: -93, yaw: 0 }),
    'observatory': Object.freeze({ x: 76, z: -121, yaw: 0 }),
    'clock-tower': Object.freeze({ x: 76, z: -134, yaw: 0 }),
    'wardens-door': Object.freeze({ x: 84, z: -150, yaw: Math.PI / 2 }),
    'dawn-vault': Object.freeze({ x: 100, z: -158, yaw: 0 })
  });
  const storyEncounterContent = {
    gatehouse: Object.freeze({
      orientation: 'Hold white on top and green facing you. R turns the right face; U turns the top face.',
      expectedMoves: Object.freeze(['R', 'U', "R'", "U'"]),
      success: 'The Gatehouse answers the Warden signal. Its stone doors turn toward Compass Hall.'
    }),
    'compass-hall': Object.freeze({
      orientation: 'Keep the same white-top, green-front view. Reverse the four setup moves from last to first.',
      success: 'The compass points east again. Four glass lamps wake along the chapel road.'
    }),
    'chapel-steps': Object.freeze({
      orientation: 'Keep white on top. Look for edge pieces with white plus one side color; corners have three colors.',
      success: 'Two chapel lamps hold steady. The remaining white edges reveal the bridge alignment.'
    }),
    'mirror-bridge': Object.freeze({
      orientation: 'Keep white on top and check the side color of every white edge against its center.',
      success: 'Four mirrors agree. A solid path forms across the Glass Quarter.'
    }),
    'lantern-rooms': Object.freeze({
      orientation: 'Keep white on top. Bring the target white corner below its matching three-color slot.',
      progressGoal: 1,
      progressUnit: 'white corner placed',
      success: 'The first lantern burns without flicker. Its light reveals the flooded stair.'
    }),
    'flooded-archive': Object.freeze({
      orientation: 'Keep white on top until the whole first layer and the top side rows match their centers.',
      progressGoal: 21,
      progressUnit: 'first-layer stickers aligned',
      success: 'The first layer locks. Shelves rise from the water and form a path into the Iron Depths.'
    }),
    gearworks: Object.freeze({
      orientation: 'Turn the whole cube so white is on the bottom. Work with a top edge that has no yellow.',
      progressGoal: 1,
      progressUnit: 'middle edge placed',
      success: 'One gear edge catches. The machine carries Aya toward the furnace controls.'
    }),
    'furnace-passage': Object.freeze({
      orientation: 'Keep white on the bottom. Match each non-yellow top edge to the front center before inserting it left or right.',
      progressGoal: 12,
      progressUnit: 'middle-layer stickers aligned',
      success: 'All four channels align. The furnace opens a warm passage toward the Star Tower.'
    }),
    observatory: Object.freeze({
      orientation: 'Keep yellow on top. Hold a yellow line horizontally or an L shape in the top-left before the cross algorithm.',
      progressGoal: 5,
      progressUnit: 'yellow cross stickers facing up',
      success: 'The yellow cross focuses the observatory lens. A beam finds the Clock Tower.'
    }),
    'clock-tower': Object.freeze({
      orientation: 'Keep yellow on top. Work on one unsolved corner at front-right-top and turn only U between corners.',
      progressGoal: 9,
      progressUnit: 'yellow face stickers facing up',
      success: 'All nine golden dials face the sky. The final bell unlocks Warden Keep.'
    }),
    'wardens-door': Object.freeze({
      orientation: 'Keep yellow on top. Check each corner by its three colors, even when yellow points sideways.',
      success: "Every final piece finds its home. The Warden's Door opens onto the Dawn Vault."
    }),
    'dawn-vault': Object.freeze({
      orientation: 'Choose a stable view and solve in layers: white cross, white corners, middle edges, then the yellow layer.',
      progressGoal: 54,
      progressUnit: 'stickers aligned',
      success: 'The final cube settles into six solid faces. Dawn races through the Broken Archive.'
    })
  };
  let stickers = [];
  let history = [];
  let busy = false;
  let archiveGl = null;
  let archiveProgram = null;
  let archiveVertexBuffer = null;
  let archiveTexture = null;
  let archiveVertexCount = 0;
  let archiveGeometrySignature = '';
  let archivePendingWorldChange = null;
  let archiveAnimationFrame = 0;
  let archiveLastFrameTime = 0;
  let archiveElapsedTime = 0;
  let archiveRendererAvailable = true;
  let archivePlayerMoving = false;
  let archiveSealInRange = false;
  let archiveReturnAnchor = null;
  let archiveRuntimePhase = 'boot';
  let archivePauseReturnPhase = 'title';
  const archiveRuntimePhases = new Set(['boot', 'title', 'exploration', 'seal-focus', 'pause', 'capture', 'epilogue', 'field-kit']);
  const archiveMovementKeys = new Set();
  const archivePlayer = {
    x: 0,
    y: 1.65,
    z: 3.35,
    yaw: 0,
    radius: .34,
    walkSpeed: 3.15,
    sprintSpeed: 5.4
  };
  const archiveMovementKeyMap = Object.freeze({
    w: 'forward',
    s: 'backward',
    a: 'left',
    d: 'right',
    arrowup: 'forward',
    arrowdown: 'backward'
  });
  const archiveTurnKeyMap = Object.freeze({
    arrowleft: 'turnLeft',
    arrowright: 'turnRight'
  });
  const archiveMaterials = Object.freeze({
    stone: Object.freeze({ tint: Object.freeze([.64,.72,.70]), atlas: Object.freeze([0,0,.5,.5]) }),
    iron: Object.freeze({ tint: Object.freeze([.58,.49,.38]), atlas: Object.freeze([.5,0,1,.5]) }),
    floor: Object.freeze({ tint: Object.freeze([.72,.68,.55]), atlas: Object.freeze([0,.5,.5,1]) }),
    seal: Object.freeze({ tint: Object.freeze([1,.76,.28]), atlas: Object.freeze([.5,.5,1,1]) })
  });
  const archiveWorld = Object.freeze({
    bounds: Object.freeze({ minimum: Object.freeze([-6,0,-182]), maximum: Object.freeze([104,5,5]) }),
    surfaces: Object.freeze([
      Object.freeze({ id: 'gatehouse-floor', points: Object.freeze([[-6,0,5],[6,0,5],[6,0,-28],[-6,0,-28]]), material: 'floor', tile: Object.freeze([5,12]) }),
      Object.freeze({ id: 'gatehouse-ceiling', points: Object.freeze([[-6,5,-28],[6,5,-28],[6,5,5],[-6,5,5]]), material: 'stone', tile: Object.freeze([5,12]) }),
      Object.freeze({ id: 'compass-floor', points: Object.freeze([[-6,0,-28],[6,0,-28],[6,0,-42],[-6,0,-42]]), material: 'floor', tile: Object.freeze([5,6]) }),
      Object.freeze({ id: 'compass-ceiling', points: Object.freeze([[-6,5,-42],[6,5,-42],[6,5,-28],[-6,5,-28]]), material: 'stone', tile: Object.freeze([5,6]) }),
      Object.freeze({ id: 'glass-gallery-floor', points: Object.freeze([[-6,0,-34],[24,0,-34],[24,0,-42],[-6,0,-42]]), material: 'floor', tile: Object.freeze([12,3]) }),
      Object.freeze({ id: 'glass-gallery-ceiling', points: Object.freeze([[-6,5,-42],[24,5,-42],[24,5,-34],[-6,5,-34]]), material: 'stone', tile: Object.freeze([12,3]) }),
      Object.freeze({ id: 'chapel-floor', points: Object.freeze([[12,0,-42],[24,0,-42],[24,0,-66],[12,0,-66]]), material: 'floor', tile: Object.freeze([5,9]) }),
      Object.freeze({ id: 'chapel-ceiling', points: Object.freeze([[12,5,-66],[24,5,-66],[24,5,-42],[12,5,-42]]), material: 'stone', tile: Object.freeze([5,9]) }),
      Object.freeze({ id: 'mirror-bridge-floor', points: Object.freeze([[24,0,-58],[36,0,-58],[36,0,-66],[24,0,-66]]), material: 'iron', tile: Object.freeze([5,3]) }),
      Object.freeze({ id: 'lantern-gallery-floor', points: Object.freeze([[36,0,-58],[66,0,-58],[66,0,-66],[36,0,-66]]), material: 'floor', tile: Object.freeze([12,3]) }),
      Object.freeze({ id: 'lantern-gallery-ceiling', points: Object.freeze([[36,5,-66],[66,5,-66],[66,5,-58],[36,5,-58]]), material: 'stone', tile: Object.freeze([12,3]) }),
      Object.freeze({ id: 'flooded-floor', points: Object.freeze([[54,0,-66],[66,0,-66],[66,0,-90],[54,0,-90]]), material: 'floor', tile: Object.freeze([5,9]) }),
      Object.freeze({ id: 'flooded-ceiling', points: Object.freeze([[54,5,-90],[66,5,-90],[66,5,-66],[54,5,-66]]), material: 'stone', tile: Object.freeze([5,9]) }),
      Object.freeze({ id: 'gearworks-floor', points: Object.freeze([[54,0,-82],[82,0,-82],[82,0,-90],[54,0,-90]]), material: 'iron', tile: Object.freeze([11,3]) }),
      Object.freeze({ id: 'gearworks-ceiling', points: Object.freeze([[54,5,-90],[82,5,-90],[82,5,-82],[54,5,-82]]), material: 'stone', tile: Object.freeze([11,3]) }),
      Object.freeze({ id: 'furnace-floor', points: Object.freeze([[70,0,-90],[82,0,-90],[82,0,-118],[70,0,-118]]), material: 'iron', tile: Object.freeze([5,11]) }),
      Object.freeze({ id: 'sunken-side-room-floor', points: Object.freeze([[46,0,-66],[54,0,-66],[54,0,-72],[46,0,-72]]), material: 'floor', tile: Object.freeze([3,2]) }),
      Object.freeze({ id: 'star-tower-floor', points: Object.freeze([[72,0,-118],[80,0,-118],[80,0,-146],[72,0,-146]]), material: 'floor', tile: Object.freeze([3,11]) }),
      Object.freeze({ id: 'star-tower-ceiling', points: Object.freeze([[72,5,-146],[80,5,-146],[80,5,-118],[72,5,-118]]), material: 'stone', tile: Object.freeze([3,11]) }),
      Object.freeze({ id: 'warden-gallery-floor', points: Object.freeze([[72,0,-146],[104,0,-146],[104,0,-154],[72,0,-154]]), material: 'iron', tile: Object.freeze([12,3]) }),
      Object.freeze({ id: 'warden-gallery-ceiling', points: Object.freeze([[72,5,-154],[104,5,-154],[104,5,-146],[72,5,-146]]), material: 'stone', tile: Object.freeze([12,3]) }),
      Object.freeze({ id: 'dawn-vault-floor', points: Object.freeze([[96,0,-154],[104,0,-154],[104,0,-182],[96,0,-182]]), material: 'floor', tile: Object.freeze([3,11]) }),
      Object.freeze({ id: 'warden-side-room-floor', points: Object.freeze([[84,0,-154],[92,0,-154],[92,0,-160],[84,0,-160]]), material: 'iron', tile: Object.freeze([3,2]) })
    ]),
    seals: Object.freeze([
      Object.freeze({ id: 'gatehouse', position: Object.freeze([0,1.3,-9.1]), interactionRadius: 2.15 }),
      Object.freeze({ id: 'compass-hall', position: Object.freeze([0,1.3,-33.2]), interactionRadius: 2.15 }),
      Object.freeze({ id: 'chapel-steps', position: Object.freeze([18,1.3,-48]), interactionRadius: 2.15 }),
      Object.freeze({ id: 'mirror-bridge', position: Object.freeze([31.5,1.3,-62]), interactionRadius: 2.15 }),
      Object.freeze({ id: 'lantern-rooms', position: Object.freeze([43,1.3,-62]), interactionRadius: 2.15 }),
      Object.freeze({ id: 'flooded-archive', position: Object.freeze([60,1.3,-74]), interactionRadius: 2.15 }),
      Object.freeze({ id: 'gearworks', position: Object.freeze([72,1.3,-86]), interactionRadius: 2.15 }),
      Object.freeze({ id: 'furnace-passage', position: Object.freeze([76,1.3,-103]), interactionRadius: 2.15 }),
      Object.freeze({ id: 'observatory', position: Object.freeze([76,1.3,-126]), interactionRadius: 2.15 }),
      Object.freeze({ id: 'clock-tower', position: Object.freeze([76,1.3,-140]), interactionRadius: 2.15 }),
      Object.freeze({ id: 'wardens-door', position: Object.freeze([88,1.3,-150]), interactionRadius: 2.15 }),
      Object.freeze({ id: 'dawn-vault', position: Object.freeze([100,1.3,-170]), interactionRadius: 2.15 })
    ]),
    landmarks: Object.freeze([
      Object.freeze({ encounterId: 'gatehouse', label: 'golden Gatehouse seal', position: Object.freeze([0,0,-9.1]) }),
      Object.freeze({ encounterId: 'compass-hall', label: 'turning compass rose', position: Object.freeze([0,0,-33.2]) }),
      Object.freeze({ encounterId: 'chapel-steps', label: 'four glass chapel lamps', position: Object.freeze([18,0,-48]) }),
      Object.freeze({ encounterId: 'mirror-bridge', label: 'iron mirror bridge', position: Object.freeze([31.5,0,-62]) }),
      Object.freeze({ encounterId: 'lantern-rooms', label: 'amber lantern gallery', position: Object.freeze([43,0,-62]) }),
      Object.freeze({ encounterId: 'flooded-archive', label: 'blue flooded stair', position: Object.freeze([60,0,-74]) }),
      Object.freeze({ encounterId: 'gearworks', label: 'great brass gear', position: Object.freeze([72,0,-86]) }),
      Object.freeze({ encounterId: 'furnace-passage', label: 'red furnace channel', position: Object.freeze([76,0,-103]) }),
      Object.freeze({ encounterId: 'observatory', label: 'star lens', position: Object.freeze([76,0,-126]) }),
      Object.freeze({ encounterId: 'clock-tower', label: 'golden clock face', position: Object.freeze([76,0,-140]) }),
      Object.freeze({ encounterId: 'wardens-door', label: "Warden's iron crest", position: Object.freeze([88,0,-150]) }),
      Object.freeze({ encounterId: 'dawn-vault', label: 'white Dawn Vault beam', position: Object.freeze([100,0,-170]) })
    ]),
    refuges: Object.freeze([
      Object.freeze({ id: 'entrance-refuge', label: 'Archive entrance ward', position: Object.freeze([0,0,3.35]) }),
      Object.freeze({ id: 'ash-refuge', label: 'Ash Gate ward', position: Object.freeze([0,0,-30]) }),
      Object.freeze({ id: 'glass-refuge', label: 'Chapel lamp ward', position: Object.freeze([18,0,-43]) }),
      Object.freeze({ id: 'sunken-refuge', label: 'Lantern ward', position: Object.freeze([58,0,-63]) }),
      Object.freeze({ id: 'iron-refuge', label: 'Gearworks ward', position: Object.freeze([62,0,-86]) }),
      Object.freeze({ id: 'star-refuge', label: 'Observatory ward', position: Object.freeze([76,0,-121]) }),
      Object.freeze({ id: 'warden-refuge', label: 'Warden crest ward', position: Object.freeze([84,0,-150]) })
    ]),
    discoveries: Object.freeze([
      Object.freeze({ id: 'sunken-warden-note', label: 'Waterlogged Warden note', position: Object.freeze([50,0,-69]), radius: 1.6 }),
      Object.freeze({ id: 'warden-cube-finish', label: 'Dawn-metal cube finish', position: Object.freeze([88,0,-157]), radius: 1.6 })
    ]),
    solids: Object.freeze([
      Object.freeze({ id: 'west-wall', minimum: Object.freeze([-6,0,-28]), maximum: Object.freeze([-5.7,5,5]), material: 'stone', collision: true }),
      Object.freeze({ id: 'east-wall', minimum: Object.freeze([5.7,0,-28]), maximum: Object.freeze([6,5,5]), material: 'stone', collision: true }),
      ...[0,-6,-12,-18,-24].flatMap((z, index) => [
        Object.freeze({ id: `west-column-${index}`, minimum: Object.freeze([-5.7,0,z-.58]), maximum: Object.freeze([-4.95,4.65,z+.58]), material: 'stone', collision: true }),
        Object.freeze({ id: `east-column-${index}`, minimum: Object.freeze([4.95,0,z-.58]), maximum: Object.freeze([5.7,4.65,z+.58]), material: 'stone', collision: true }),
        Object.freeze({ id: `ceiling-beam-${index}`, minimum: Object.freeze([-5.1,4.25,z-.46]), maximum: Object.freeze([5.1,4.82,z+.46]), material: 'iron', collision: false })
      ]),
      Object.freeze({ id: 'seal-dais', minimum: Object.freeze([-1.65,0,-11.5]), maximum: Object.freeze([1.65,.78,-8.2]), material: 'floor', collision: true }),
      Object.freeze({ id: 'gatehouse-seal', minimum: Object.freeze([-.72,.78,-10.45]), maximum: Object.freeze([.72,1.78,-9.25]), material: 'seal', collision: true }),
      Object.freeze({ id: 'gatehouse-door', minimum: Object.freeze([-2.15,0,-27.72]), maximum: Object.freeze([2.15,4.1,-27.12]), material: 'iron', collision: true, opensWith: 'gatehouse', travel: 4.35 }),
      Object.freeze({ id: 'gatehouse-back-west', minimum: Object.freeze([-6,0,-28]), maximum: Object.freeze([-2.15,5,-27.7]), material: 'stone', collision: true }),
      Object.freeze({ id: 'gatehouse-back-east', minimum: Object.freeze([2.15,0,-28]), maximum: Object.freeze([6,5,-27.7]), material: 'stone', collision: true }),
      Object.freeze({ id: 'gatehouse-back-top', minimum: Object.freeze([-2.15,4.1,-28]), maximum: Object.freeze([2.15,5,-27.7]), material: 'stone', collision: true }),
      Object.freeze({ id: 'compass-west-wall', minimum: Object.freeze([-6,0,-42]), maximum: Object.freeze([-5.7,5,-28]), material: 'stone', collision: true }),
      Object.freeze({ id: 'compass-east-wall', minimum: Object.freeze([5.7,0,-34]), maximum: Object.freeze([6,5,-28]), material: 'stone', collision: true }),
      Object.freeze({ id: 'compass-dais', minimum: Object.freeze([-1.65,0,-35.25]), maximum: Object.freeze([1.65,.78,-32]), material: 'floor', collision: true }),
      Object.freeze({ id: 'compass-seal', minimum: Object.freeze([-.72,.78,-34.55]), maximum: Object.freeze([.72,1.78,-33.15]), material: 'seal', collision: true }),
      Object.freeze({ id: 'gallery-north-wall', minimum: Object.freeze([6,0,-34.3]), maximum: Object.freeze([24,5,-34]), material: 'stone', collision: true }),
      Object.freeze({ id: 'gallery-south-wall', minimum: Object.freeze([-6,0,-42]), maximum: Object.freeze([12,5,-41.7]), material: 'stone', collision: true }),
      Object.freeze({ id: 'compass-gallery-door', minimum: Object.freeze([5.7,0,-40.8]), maximum: Object.freeze([6.3,4.1,-35.2]), material: 'iron', collision: true, opensWith: 'compass-hall', travel: 4.35 }),
      Object.freeze({ id: 'gallery-east-wall', minimum: Object.freeze([23.7,0,-58]), maximum: Object.freeze([24,5,-34]), material: 'stone', collision: true }),
      Object.freeze({ id: 'chapel-west-wall', minimum: Object.freeze([12,0,-66]), maximum: Object.freeze([12.3,5,-42]), material: 'stone', collision: true }),
      Object.freeze({ id: 'chapel-east-wall', minimum: Object.freeze([23.7,0,-58]), maximum: Object.freeze([24,5,-42]), material: 'stone', collision: true }),
      Object.freeze({ id: 'chapel-south-wall', minimum: Object.freeze([12,0,-66]), maximum: Object.freeze([24,5,-65.7]), material: 'stone', collision: true }),
      Object.freeze({ id: 'chapel-dais', minimum: Object.freeze([16.35,0,-50.05]), maximum: Object.freeze([19.65,.78,-46.8]), material: 'floor', collision: true }),
      Object.freeze({ id: 'chapel-seal', minimum: Object.freeze([17.28,.78,-49.35]), maximum: Object.freeze([18.72,1.78,-47.95]), material: 'seal', collision: true }),
      Object.freeze({ id: 'chapel-bridge-door', minimum: Object.freeze([12.3,0,-56]), maximum: Object.freeze([23.7,4.1,-55.4]), material: 'iron', collision: true, opensWith: 'chapel-steps', travel: 4.35 }),
      Object.freeze({ id: 'bridge-north-rail', minimum: Object.freeze([24,0,-58.3]), maximum: Object.freeze([36,1.15,-58]), material: 'iron', collision: true }),
      Object.freeze({ id: 'bridge-south-rail', minimum: Object.freeze([24,0,-66]), maximum: Object.freeze([36,1.15,-65.7]), material: 'iron', collision: true }),
      Object.freeze({ id: 'mirror-vault-shutter', minimum: Object.freeze([35.15,0,-64.8]), maximum: Object.freeze([35.7,4.1,-59.2]), material: 'iron', collision: true, opensWith: 'mirror-bridge', travel: 4.35 }),
      Object.freeze({ id: 'mirror-dais', minimum: Object.freeze([29.85,0,-63.65]), maximum: Object.freeze([33.15,.78,-60.35]), material: 'iron', collision: true }),
      Object.freeze({ id: 'mirror-seal', minimum: Object.freeze([30.78,.78,-62.7]), maximum: Object.freeze([32.22,1.78,-61.3]), material: 'seal', collision: true }),
      Object.freeze({ id: 'lantern-north-wall', minimum: Object.freeze([36,0,-58.3]), maximum: Object.freeze([66,5,-58]), material: 'stone', collision: true }),
      Object.freeze({ id: 'lantern-south-wall', minimum: Object.freeze([36,0,-66]), maximum: Object.freeze([46,5,-65.7]), material: 'stone', collision: true }),
      Object.freeze({ id: 'sunken-side-west', minimum: Object.freeze([46,0,-72]), maximum: Object.freeze([46.3,5,-66]), material: 'stone', collision: true }),
      Object.freeze({ id: 'sunken-side-east', minimum: Object.freeze([53.7,0,-72]), maximum: Object.freeze([54,5,-66]), material: 'stone', collision: true }),
      Object.freeze({ id: 'sunken-side-south', minimum: Object.freeze([46,0,-72]), maximum: Object.freeze([54,5,-71.7]), material: 'stone', collision: true }),
      Object.freeze({ id: 'lantern-east-wall', minimum: Object.freeze([65.7,0,-82]), maximum: Object.freeze([66,5,-58]), material: 'stone', collision: true }),
      Object.freeze({ id: 'lantern-dais', minimum: Object.freeze([41.35,0,-63.65]), maximum: Object.freeze([44.65,.78,-60.35]), material: 'floor', collision: true }),
      Object.freeze({ id: 'lantern-seal', minimum: Object.freeze([42.28,.78,-62.7]), maximum: Object.freeze([43.72,1.78,-61.3]), material: 'seal', collision: true }),
      Object.freeze({ id: 'lantern-floodgate', minimum: Object.freeze([54.3,0,-66.3]), maximum: Object.freeze([65.7,4.1,-65.7]), material: 'iron', collision: true, opensWith: 'lantern-rooms', travel: 4.35 }),
      Object.freeze({ id: 'flooded-west-wall', minimum: Object.freeze([54,0,-90]), maximum: Object.freeze([54.3,5,-66]), material: 'stone', collision: true }),
      Object.freeze({ id: 'flooded-east-wall', minimum: Object.freeze([65.7,0,-82]), maximum: Object.freeze([66,5,-66]), material: 'stone', collision: true }),
      Object.freeze({ id: 'flooded-dais', minimum: Object.freeze([58.35,0,-76.05]), maximum: Object.freeze([61.65,.78,-72.8]), material: 'floor', collision: true }),
      Object.freeze({ id: 'flooded-seal', minimum: Object.freeze([59.28,.78,-75.35]), maximum: Object.freeze([60.72,1.78,-73.95]), material: 'seal', collision: true }),
      Object.freeze({ id: 'flooded-gear-door', minimum: Object.freeze([65.7,0,-89.7]), maximum: Object.freeze([66.3,4.1,-82.3]), material: 'iron', collision: true, opensWith: 'flooded-archive', travel: 4.35 }),
      Object.freeze({ id: 'gearworks-north-wall', minimum: Object.freeze([66,0,-82.3]), maximum: Object.freeze([82,5,-82]), material: 'stone', collision: true }),
      Object.freeze({ id: 'gearworks-south-wall', minimum: Object.freeze([54,0,-90]), maximum: Object.freeze([70,5,-89.7]), material: 'stone', collision: true }),
      Object.freeze({ id: 'gearworks-east-wall', minimum: Object.freeze([81.7,0,-90]), maximum: Object.freeze([82,5,-82]), material: 'stone', collision: true }),
      Object.freeze({ id: 'gearworks-dais', minimum: Object.freeze([70.35,0,-87.65]), maximum: Object.freeze([73.65,.78,-84.35]), material: 'iron', collision: true }),
      Object.freeze({ id: 'gearworks-seal', minimum: Object.freeze([71.28,.78,-86.7]), maximum: Object.freeze([72.72,1.78,-85.3]), material: 'seal', collision: true }),
      Object.freeze({ id: 'gearworks-furnace-door', minimum: Object.freeze([70.3,0,-90.3]), maximum: Object.freeze([81.7,4.1,-89.7]), material: 'iron', collision: true, opensWith: 'gearworks', travel: 4.35 }),
      Object.freeze({ id: 'furnace-west-wall', minimum: Object.freeze([70,0,-118]), maximum: Object.freeze([70.3,5,-90]), material: 'stone', collision: true }),
      Object.freeze({ id: 'furnace-east-wall', minimum: Object.freeze([81.7,0,-118]), maximum: Object.freeze([82,5,-90]), material: 'stone', collision: true }),
      Object.freeze({ id: 'furnace-south-west', minimum: Object.freeze([70,0,-118]), maximum: Object.freeze([72,5,-117.7]), material: 'stone', collision: true }),
      Object.freeze({ id: 'furnace-south-east', minimum: Object.freeze([80,0,-118]), maximum: Object.freeze([82,5,-117.7]), material: 'stone', collision: true }),
      Object.freeze({ id: 'furnace-dais', minimum: Object.freeze([74.35,0,-105.05]), maximum: Object.freeze([77.65,.78,-101.8]), material: 'iron', collision: true }),
      Object.freeze({ id: 'furnace-seal', minimum: Object.freeze([75.28,.78,-104.35]), maximum: Object.freeze([76.72,1.78,-102.95]), material: 'seal', collision: true }),
      Object.freeze({ id: 'furnace-lift-shutter', minimum: Object.freeze([72,0,-117.7]), maximum: Object.freeze([80,4.1,-117.1]), material: 'iron', collision: true, opensWith: 'furnace-passage', travel: 4.35 }),
      Object.freeze({ id: 'star-west-wall', minimum: Object.freeze([72,0,-146]), maximum: Object.freeze([72.3,5,-118]), material: 'stone', collision: true }),
      Object.freeze({ id: 'star-east-wall', minimum: Object.freeze([79.7,0,-146]), maximum: Object.freeze([80,5,-118]), material: 'stone', collision: true }),
      Object.freeze({ id: 'observatory-dais', minimum: Object.freeze([74.35,0,-128.05]), maximum: Object.freeze([77.65,.78,-124.8]), material: 'floor', collision: true }),
      Object.freeze({ id: 'observatory-seal', minimum: Object.freeze([75.28,.78,-127.35]), maximum: Object.freeze([76.72,1.78,-125.95]), material: 'seal', collision: true }),
      Object.freeze({ id: 'observatory-clock-door', minimum: Object.freeze([72.3,0,-132.3]), maximum: Object.freeze([79.7,4.1,-131.7]), material: 'iron', collision: true, opensWith: 'observatory', travel: 4.35 }),
      Object.freeze({ id: 'clock-dais', minimum: Object.freeze([74.35,0,-142.05]), maximum: Object.freeze([77.65,.78,-138.8]), material: 'floor', collision: true }),
      Object.freeze({ id: 'clock-seal', minimum: Object.freeze([75.28,.78,-141.35]), maximum: Object.freeze([76.72,1.78,-139.95]), material: 'seal', collision: true }),
      Object.freeze({ id: 'clock-warden-door', minimum: Object.freeze([79.7,0,-145.7]), maximum: Object.freeze([80.3,4.1,-132.3]), material: 'iron', collision: true, opensWith: 'clock-tower', travel: 4.35 }),
      Object.freeze({ id: 'warden-north-wall', minimum: Object.freeze([84,0,-146.3]), maximum: Object.freeze([104,5,-146]), material: 'stone', collision: true }),
      Object.freeze({ id: 'warden-south-west', minimum: Object.freeze([72,0,-154]), maximum: Object.freeze([84,5,-153.7]), material: 'stone', collision: true }),
      Object.freeze({ id: 'warden-south-east', minimum: Object.freeze([92,0,-154]), maximum: Object.freeze([96,5,-153.7]), material: 'stone', collision: true }),
      Object.freeze({ id: 'warden-side-west', minimum: Object.freeze([84,0,-160]), maximum: Object.freeze([84.3,5,-154]), material: 'stone', collision: true }),
      Object.freeze({ id: 'warden-side-east', minimum: Object.freeze([91.7,0,-160]), maximum: Object.freeze([92,5,-154]), material: 'stone', collision: true }),
      Object.freeze({ id: 'warden-side-south', minimum: Object.freeze([84,0,-160]), maximum: Object.freeze([92,5,-159.7]), material: 'stone', collision: true }),
      Object.freeze({ id: 'warden-east-wall', minimum: Object.freeze([103.7,0,-154]), maximum: Object.freeze([104,5,-146]), material: 'stone', collision: true }),
      Object.freeze({ id: 'warden-dais', minimum: Object.freeze([86.35,0,-151.65]), maximum: Object.freeze([89.65,.78,-148.35]), material: 'iron', collision: true }),
      Object.freeze({ id: 'warden-seal', minimum: Object.freeze([87.28,.78,-150.7]), maximum: Object.freeze([88.72,1.78,-149.3]), material: 'seal', collision: true }),
      Object.freeze({ id: 'warden-vault-door', minimum: Object.freeze([96.3,0,-154.3]), maximum: Object.freeze([103.7,4.1,-153.7]), material: 'iron', collision: true, opensWith: 'wardens-door', travel: 4.35 }),
      Object.freeze({ id: 'vault-west-wall', minimum: Object.freeze([96,0,-182]), maximum: Object.freeze([96.3,5,-154]), material: 'stone', collision: true }),
      Object.freeze({ id: 'vault-east-wall', minimum: Object.freeze([103.7,0,-182]), maximum: Object.freeze([104,5,-154]), material: 'stone', collision: true }),
      Object.freeze({ id: 'vault-south-wall', minimum: Object.freeze([96,0,-182]), maximum: Object.freeze([104,5,-181.7]), material: 'stone', collision: true }),
      Object.freeze({ id: 'dawn-dais', minimum: Object.freeze([98.35,0,-172.05]), maximum: Object.freeze([101.65,.78,-168.8]), material: 'floor', collision: true }),
      Object.freeze({ id: 'dawn-seal', minimum: Object.freeze([99.28,.78,-171.35]), maximum: Object.freeze([100.72,1.78,-169.95]), material: 'seal', collision: true }),
      Object.freeze({ id: 'dawn-roof-shutter', minimum: Object.freeze([96.3,0,-181.7]), maximum: Object.freeze([103.7,4.1,-181.1]), material: 'iron', collision: true, opensWith: 'dawn-vault', travel: 4.35 })
    ])
  });
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
  let storyProgressState = null;
  let storyEncounterActive = false;
  let storyPreparing = false;
  let storyCheckpointIndex = 0;
  let storyPlayerMoves = 0;
  let storyTargetSignature = '';
  let storyPressure = 0;
  let storyStagnantMoves = 0;
  let storyLastProgress = 0;
  let storyHintIndex = 0;
  let storyMenuReturnFocus = null;
  const storyPressureLabels = Object.freeze(['Distant', 'Searching', 'Closing', 'Near', 'At the Door', 'Reached']);
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
    if (preserve !== 'story') {
      storyEncounterActive = false;
      storyPreparing = false;
      storyCheckpointIndex = 0;
      storyPlayerMoves = 0;
      storyPressure = 0;
      storyStagnantMoves = 0;
      storyHintIndex = 0;
    }
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

  function solvedCubieCount(predicate) {
    const positions = new Set(stickers.filter(predicate).map(sticker => sticker.position.join(',')));
    return [...positions].filter(positionKey => {
      const position = positionKey.split(',').map(Number);
      return stickers.filter(sticker => sticker.position.every((value, index) => value === position[index])).every(isSolvedAtPosition);
    }).length;
  }

  function whiteEdgeCount() {
    return solvedCubieCount(sticker => sticker.position[1] === 1 && [sticker.position[0], sticker.position[2]].filter(value => value !== 0).length === 1);
  }

  function whiteCornerCount() {
    return solvedCubieCount(sticker => sticker.position[1] === 1 && sticker.position[0] !== 0 && sticker.position[2] !== 0);
  }

  function middleEdgeCount() {
    return solvedCubieCount(sticker => sticker.position[1] === 0 && [sticker.position[0], sticker.position[2]].filter(value => value !== 0).length === 1);
  }

  function yellowFaceComplete() {
    return stickers.filter(sticker => sticker.normal[1] === -1).every(sticker => sticker.color === 'yellow');
  }

  function stickerSignature(source = stickers) {
    return source.map(sticker => `${key(sticker.position, sticker.normal)}:${sticker.color}`).sort().join('|');
  }

  function simulatedSignature(moves) {
    const simulated = stickers.map(sticker => ({ position: sticker.position.slice(), normal: sticker.normal.slice(), color: sticker.color }));
    moves.forEach(move => {
      const { face, rotations } = parseMove(move);
      const axis = faces[face].n;
      for (let pass = 0; pass < rotations; pass += 1) simulated.forEach(sticker => {
        if (dot(sticker.position, axis) === 1) {
          sticker.position = rotateVector(sticker.position, axis);
          sticker.normal = rotateVector(sticker.normal, axis);
        }
      });
    });
    return stickerSignature(simulated);
  }

  const storyValidators = Object.freeze({
    sequence: () => stickerSignature() === storyTargetSignature,
    solved: isSolvedState,
    whiteEdgesTwo: () => whiteEdgeCount() >= 2,
    whiteCross: isWhiteCrossComplete,
    whiteCornerOne: () => whiteCornerCount() >= 1,
    firstLayer: isFirstLayerComplete,
    middleEdgeOne: () => middleEdgeCount() >= 1,
    middleLayer: isMiddleLayerComplete,
    yellowCross: isYellowCrossComplete,
    yellowFace: yellowFaceComplete,
    lastLayerPositioned: isYellowCornersPlaced
  });

  function solvedStickerCount(predicate = () => true) {
    return stickers.filter(sticker => predicate(sticker) && isSolvedAtPosition(sticker)).length;
  }

  function storySequenceProgress() {
    const expected = ['R', 'U', "R'", "U'"];
    const playerMoves = history.slice(storyCheckpointIndex);
    let progress = 0;
    while (progress < expected.length && playerMoves[progress] === expected[progress]) progress += 1;
    return progress;
  }

  function storyProgressValue() {
    const progressId = currentStoryEncounter().progressId;
    if (progressId === 'sequence') return storySequenceProgress();
    if (progressId === 'whiteEdges' || progressId === 'whiteCross') return whiteEdgeCount();
    if (progressId === 'whiteCorners') return whiteCornerCount();
    if (progressId === 'firstLayer') return solvedStickerCount(sticker => sticker.position[1] === 1);
    if (progressId === 'middleEdges') return middleEdgeCount();
    if (progressId === 'middleLayer') return solvedStickerCount(sticker => sticker.position[1] === 0 && sticker.normal[1] === 0);
    if (progressId === 'yellowEdges') return stickers.filter(sticker => sticker.normal[1] === -1 && (sticker.position[0] === 0 || sticker.position[2] === 0) && sticker.color === 'yellow').length;
    if (progressId === 'yellowFace') return stickers.filter(sticker => sticker.normal[1] === -1 && sticker.color === 'yellow').length;
    if (progressId === 'solvedFaces' || progressId === 'solvedStickers') return solvedStickerCount();
    return solvedStickerCount();
  }

  function storyProgressDescription(prefix = 'Seal progress') {
    const detail = storyEncounterContent[currentStoryEncounter().id];
    if (!detail?.progressGoal) return `${prefix}: active`;
    return `${prefix}: ${Math.min(storyProgressValue(), detail.progressGoal)} of ${detail.progressGoal} ${detail.progressUnit}`;
  }

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
    if (record && storyEncounterActive && !storyPreparing) updateStoryAfterTurn(move);
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
    storyTurnControls.disabled = value;
  }

  function defaultStoryProgress() {
    const { completedSealIds, ...state } = archiveStateModel.defaultState();
    return {
      ...state,
      currentEncounterId: storyEncounters[0].id,
      completedEncounterIds: [],
      retries: 0
    };
  }

  function sanitizeStoryProgress(value) {
    const { completedSealIds: completedEncounterIds, ...state } = archiveStateModel.sanitize(value);
    const firstIncomplete = storyEncounters.find(encounter => !completedEncounterIds.includes(encounter.id));
    return {
      ...state,
      currentEncounterId: state.storyCompleted ? storyEncounters[storyEncounters.length - 1].id : firstIncomplete?.id || storyEncounters[0].id,
      completedEncounterIds,
      retries: 0
    };
  }

  function loadStoryProgress() {
    return sanitizeStoryProgress(archiveStateModel.load(window.localStorage, storyStorageKey));
  }

  function saveStoryProgress() {
    storyProgressState.updatedAt = new Date().toISOString();
    storyProgressState.checkpointSealId = storyProgressState.completedEncounterIds.at(-1) || 'archive-entrance';
    try {
      archiveStateModel.save(window.localStorage, storyStorageKey, {
        ...storyProgressState,
        checkpointSealId: storyProgressState.checkpointSealId,
        completedSealIds: storyProgressState.completedEncounterIds.slice()
      });
    } catch (error) { /* optional */ }
  }

  function resetStoryProgress() {
    storyProgressState = defaultStoryProgress();
    try { archiveStateModel.reset(window.localStorage, storyStorageKey); } catch (error) { /* optional */ }
    restoreArchiveCheckpointPosition();
  }

  function restoreArchiveCheckpointPosition() {
    const spawn = archiveStateModel.resolveSpawn({
      ...storyProgressState,
      completedSealIds: storyProgressState.completedEncounterIds
    }, archiveCheckpointSpawns);
    archivePlayer.x = spawn.x;
    archivePlayer.z = spawn.z;
    archivePlayer.yaw = spawn.yaw;
    updateArchivePlayerDiagnostics();
  }

  function currentStoryEncounter() {
    return storyEncounters.find(encounter => encounter.id === storyProgressState.currentEncounterId) || storyEncounters[0];
  }

  function hasStoryProgress() {
    return Boolean(storyProgressState.updatedAt || storyProgressState.completedEncounterIds.length || storyProgressState.storyCompleted);
  }

  function closeStoryMenu(returnFocus = false) {
    storyMenu.hidden = true;
    storyMenuToggle.setAttribute('aria-expanded', 'false');
    if (returnFocus && storyMenuReturnFocus instanceof HTMLElement) storyMenuReturnFocus.focus();
    storyMenuReturnFocus = null;
  }

  function handleStoryMenuKeydown(event) {
    if (storyMenu.hidden) return false;
    if (event.key === 'Escape') {
      event.preventDefault();
      resumeArchiveAfterPause();
      return true;
    }
    if (event.key !== 'Tab') return false;
    const focusable = [...storyMenu.querySelectorAll('button:not(:disabled)')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) return false;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
      return true;
    }
    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
      return true;
    }
    return false;
  }

  function createArchiveShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const message = gl.getShaderInfoLog(shader) || 'Unknown shader compilation error.';
      gl.deleteShader(shader);
      throw new Error(message);
    }
    return shader;
  }

  function createArchiveProgram(gl) {
    const vertexShader = createArchiveShader(gl, gl.VERTEX_SHADER, `
      attribute vec3 aPosition;
      attribute vec3 aColor;
      attribute vec2 aUv;
      uniform mat4 uView;
      uniform mat4 uProjection;
      varying vec3 vColor;
      varying vec2 vUv;
      varying float vDepth;
      void main() {
        vec4 viewPosition = uView * vec4(aPosition, 1.0);
        vColor = aColor;
        vUv = aUv;
        vDepth = -viewPosition.z;
        gl_Position = uProjection * viewPosition;
      }
    `);
    const fragmentShader = createArchiveShader(gl, gl.FRAGMENT_SHADER, `
      precision mediump float;
      varying vec3 vColor;
      varying vec2 vUv;
      varying float vDepth;
      uniform float uPulse;
      uniform sampler2D uTexture;
      void main() {
        float fog = smoothstep(8.0, 34.0, vDepth);
        float light = 0.82 + uPulse * 0.12;
        vec3 material = texture2D(uTexture, vUv).rgb;
        vec3 litColor = material * vColor * light;
        gl_FragColor = vec4(mix(litColor, vec3(0.012, 0.027, 0.032), fog), 1.0);
      }
    `);
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const message = gl.getProgramInfoLog(program) || 'Unknown shader link error.';
      gl.deleteProgram(program);
      throw new Error(message);
    }
    return program;
  }

  function addArchiveQuad(vertices, a, b, c, d, materialName, tile = [1,1]) {
    const material = archiveMaterials[materialName] || archiveMaterials.stone;
    const [u0,v0,u1,v1] = material.atlas;
    const inset = .002;
    const uv = [[u0+inset,v0+inset],[u1-inset,v0+inset],[u1-inset,v1-inset],[u0+inset,v1-inset]];
    [[a,uv[0]],[b,uv[1]],[c,uv[2]],[a,uv[0]],[c,uv[2]],[d,uv[3]]].forEach(([point,texturePoint]) => {
      vertices.push(...point, ...material.tint, ...texturePoint);
    });
  }

  function addArchiveBox(vertices, minimum, maximum, materialName) {
    const [x0, y0, z0] = minimum;
    const [x1, y1, z1] = maximum;
    const horizontalTile = [Math.max(1, Math.round(Math.abs(x1-x0))), Math.max(1, Math.round(Math.abs(y1-y0)))];
    const depthTile = [Math.max(1, Math.round(Math.abs(z1-z0))), Math.max(1, Math.round(Math.abs(y1-y0)))];
    addArchiveQuad(vertices, [x0,y0,z1], [x1,y0,z1], [x1,y1,z1], [x0,y1,z1], materialName, horizontalTile);
    addArchiveQuad(vertices, [x1,y0,z0], [x0,y0,z0], [x0,y1,z0], [x1,y1,z0], materialName, horizontalTile);
    addArchiveQuad(vertices, [x0,y0,z0], [x0,y0,z1], [x0,y1,z1], [x0,y1,z0], materialName, depthTile);
    addArchiveQuad(vertices, [x1,y0,z1], [x1,y0,z0], [x1,y1,z0], [x1,y1,z1], materialName, depthTile);
    addArchiveQuad(vertices, [x0,y1,z1], [x1,y1,z1], [x1,y1,z0], [x0,y1,z0], materialName, [horizontalTile[0], depthTile[0]]);
  }

  function archiveWorldChangeProgress(sealId) {
    if (!storyProgressState.completedEncounterIds.includes(sealId)) return 0;
    if (archivePendingWorldChange?.sealId === sealId) return archivePendingWorldChange.progress;
    return 1;
  }

  function createArchiveBootstrapGeometry() {
    const vertices = [];
    archiveWorld.surfaces.forEach(surface => addArchiveQuad(vertices, ...surface.points, surface.material, surface.tile));
    archiveWorld.solids.forEach(solid => {
      const progress = solid.opensWith ? archiveWorldChangeProgress(solid.opensWith) : 0;
      const travel = (solid.travel || 0) * progress;
      const minimum = [solid.minimum[0], solid.minimum[1] + travel, solid.minimum[2]];
      const maximum = [solid.maximum[0], solid.maximum[1] + travel, solid.maximum[2]];
      addArchiveBox(vertices, minimum, maximum, solid.material);
    });
    return new Float32Array(vertices);
  }

  function createArchiveTexture(gl) {
    const source = document.createElement('canvas');
    source.width = 512;
    source.height = 512;
    const context = source.getContext('2d');
    const drawNoise = (x, y, size, base, mortar, pattern) => {
      context.fillStyle = base;
      context.fillRect(x, y, size, size);
      context.strokeStyle = mortar;
      context.lineWidth = 3;
      pattern(context, x, y, size);
      for (let index = 0; index < 900; index += 1) {
        const px = x + (index * 83 % size);
        const py = y + (index * 47 % size);
        const alpha = .025 + (index % 7) * .006;
        context.fillStyle = `rgba(255,255,255,${alpha})`;
        context.fillRect(px, py, 1 + index % 2, 1 + index % 2);
      }
    };
    drawNoise(0,0,256,'#344443','#172321',(ctx,x,y,size) => {
      for (let row = 0; row <= size; row += 48) {
        ctx.beginPath(); ctx.moveTo(x,y+row); ctx.lineTo(x+size,y+row); ctx.stroke();
        const offset = row % 96 ? 34 : 0;
        for (let column = offset; column <= size; column += 68) {
          ctx.beginPath(); ctx.moveTo(x+column,y+row); ctx.lineTo(x+column,y+Math.min(size,row+48)); ctx.stroke();
        }
      }
    });
    drawNoise(256,0,256,'#594939','#241f1b',(ctx,x,y,size) => {
      for (let line = 0; line <= size; line += 28) {
        ctx.beginPath(); ctx.moveTo(x+line,y); ctx.lineTo(x+line,y+size); ctx.stroke();
      }
      ctx.fillStyle = '#8c6a3e';
      for (let rivet = 14; rivet < size; rivet += 56) ctx.fillRect(x+rivet,y+14,5,5);
    });
    drawNoise(0,256,256,'#4f5148','#292d2b',(ctx,x,y,size) => {
      for (let line = 0; line <= size; line += 64) {
        ctx.beginPath(); ctx.moveTo(x+line,y); ctx.lineTo(x+line,y+size); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x,y+line); ctx.lineTo(x+size,y+line); ctx.stroke();
      }
    });
    const sealGradient = context.createRadialGradient(384,384,12,384,384,120);
    sealGradient.addColorStop(0,'#fff0a1');
    sealGradient.addColorStop(.38,'#d9982c');
    sealGradient.addColorStop(1,'#4b2d12');
    context.fillStyle = sealGradient;
    context.fillRect(256,256,256,256);
    context.strokeStyle = '#f5c85d';
    context.lineWidth = 5;
    for (let ring = 34; ring < 122; ring += 24) {
      context.beginPath(); context.arc(384,384,ring,0,Math.PI*2); context.stroke();
    }
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    return texture;
  }

  function archivePerspective(fieldOfView, aspect, near, far) {
    const f = 1 / Math.tan(fieldOfView / 2);
    const rangeInverse = 1 / (near - far);
    return new Float32Array([
      f / aspect, 0, 0, 0,
      0, f, 0, 0,
      0, 0, (near + far) * rangeInverse, -1,
      0, 0, near * far * rangeInverse * 2, 0
    ]);
  }

  function archiveNormalize(vector) {
    const length = Math.hypot(...vector) || 1;
    return vector.map(value => value / length);
  }

  function archiveLookAt(eye, target, up) {
    const z = archiveNormalize(eye.map((value, index) => value - target[index]));
    const x = archiveNormalize([
      up[1] * z[2] - up[2] * z[1],
      up[2] * z[0] - up[0] * z[2],
      up[0] * z[1] - up[1] * z[0]
    ]);
    const y = [
      z[1] * x[2] - z[2] * x[1],
      z[2] * x[0] - z[0] * x[2],
      z[0] * x[1] - z[1] * x[0]
    ];
    return new Float32Array([
      x[0], y[0], z[0], 0,
      x[1], y[1], z[1], 0,
      x[2], y[2], z[2], 0,
      -x.reduce((sum, value, index) => sum + value * eye[index], 0),
      -y.reduce((sum, value, index) => sum + value * eye[index], 0),
      -z.reduce((sum, value, index) => sum + value * eye[index], 0),
      1
    ]);
  }

  function initializeArchiveRenderer() {
    if (archiveGl && archiveProgram && archiveVertexBuffer && archiveTexture) return true;
    const gl = archiveCanvas.getContext('webgl', { alpha: false, antialias: true, powerPreference: 'high-performance' });
    if (!gl) {
      archiveRendererAvailable = false;
      archiveCanvas.dataset.renderer = 'unavailable';
      return false;
    }
    try {
      archiveProgram = createArchiveProgram(gl);
      archiveVertexBuffer = gl.createBuffer();
      const geometry = createArchiveBootstrapGeometry();
      archiveVertexCount = geometry.length / 8;
      gl.bindBuffer(gl.ARRAY_BUFFER, archiveVertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, geometry, gl.DYNAMIC_DRAW);
      archiveGeometrySignature = archiveWorld.solids
        .filter(solid => solid.opensWith)
        .map(solid => `${solid.opensWith}:${archiveWorldChangeProgress(solid.opensWith).toFixed(3)}`)
        .join('|');
      archiveTexture = createArchiveTexture(gl);
      archiveGl = gl;
      archiveRendererAvailable = true;
      archiveCanvas.dataset.vertices = String(archiveVertexCount);
      archiveCanvas.dataset.collisionSolids = String(archiveWorld.solids.filter(solid => solid.collision).length);
      archiveCanvas.dataset.gatehouseDoor = archiveWorldChangeProgress('gatehouse').toFixed(2);
      archiveCanvas.dataset.worldChanges = archiveGeometrySignature;
      archiveCanvas.dataset.storageKey = storyStorageKey;
      return true;
    } catch (error) {
      archiveRendererAvailable = false;
      archiveCanvas.dataset.renderer = 'unavailable';
      storyShellStatus.textContent = `The 3D Archive could not start: ${error.message}`;
      return false;
    }
  }

  function resizeArchiveCanvas() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.round(archiveCanvas.clientWidth * pixelRatio));
    const height = Math.max(1, Math.round(archiveCanvas.clientHeight * pixelRatio));
    if (archiveCanvas.width !== width || archiveCanvas.height !== height) {
      archiveCanvas.width = width;
      archiveCanvas.height = height;
    }
    return { width, height };
  }

  function archivePositionBlocked(x, z) {
    const blockingSolid = archiveWorld.solids.find(solid => {
      if (!solid.collision || solid.maximum[1] <= 0 || solid.minimum[1] >= archivePlayer.y + .15) return false;
      if (solid.opensWith && storyProgressState.completedEncounterIds.includes(solid.opensWith)) return false;
      return x + archivePlayer.radius > solid.minimum[0]
        && x - archivePlayer.radius < solid.maximum[0]
        && z + archivePlayer.radius > solid.minimum[2]
        && z - archivePlayer.radius < solid.maximum[2];
    });
    archiveCanvas.dataset.blockedBy = blockingSolid?.id || '';
    return Boolean(blockingSolid);
  }

  function moveArchivePlayer(delta) {
    const turnInput = Number(archiveMovementKeys.has('turnRight')) - Number(archiveMovementKeys.has('turnLeft'));
    if (turnInput) {
      archivePlayer.yaw += turnInput * 1.95 * delta;
      archivePlayer.yaw = Math.atan2(Math.sin(archivePlayer.yaw), Math.cos(archivePlayer.yaw));
    }
    let forwardInput = 0;
    let rightInput = 0;
    if (archiveMovementKeys.has('forward')) forwardInput += 1;
    if (archiveMovementKeys.has('backward')) forwardInput -= 1;
    if (archiveMovementKeys.has('right')) rightInput += 1;
    if (archiveMovementKeys.has('left')) rightInput -= 1;
    const inputLength = Math.hypot(forwardInput, rightInput);
    if (!inputLength) {
      archivePlayerMoving = Boolean(turnInput);
      return;
    }
    forwardInput /= inputLength;
    rightInput /= inputLength;
    const speed = archiveMovementKeys.has('sprint') ? archivePlayer.sprintSpeed : archivePlayer.walkSpeed;
    const forwardX = Math.sin(archivePlayer.yaw);
    const forwardZ = -Math.cos(archivePlayer.yaw);
    const rightX = Math.cos(archivePlayer.yaw);
    const rightZ = Math.sin(archivePlayer.yaw);
    const movementX = (forwardX * forwardInput + rightX * rightInput) * speed * delta;
    const movementZ = (forwardZ * forwardInput + rightZ * rightInput) * speed * delta;
    const nextX = archivePlayer.x + movementX;
    const nextZ = archivePlayer.z + movementZ;
    let moved = false;
    if (!archivePositionBlocked(nextX, archivePlayer.z)) {
      archivePlayer.x = nextX;
      moved = moved || Math.abs(movementX) > .0001;
    }
    if (!archivePositionBlocked(archivePlayer.x, nextZ)) {
      archivePlayer.z = nextZ;
      moved = moved || Math.abs(movementZ) > .0001;
    }
    archivePlayerMoving = moved;
  }

  function updateArchivePlayerDiagnostics() {
    archiveCanvas.dataset.playerX = archivePlayer.x.toFixed(3);
    archiveCanvas.dataset.playerZ = archivePlayer.z.toFixed(3);
    archiveCanvas.dataset.playerYaw = archivePlayer.yaw.toFixed(3);
    archiveCanvas.dataset.playerMoving = String(archivePlayerMoving);
  }

  function activeArchiveSeal() {
    const encounter = currentStoryEncounter();
    return archiveWorld.seals.find(seal => seal.id === encounter.id) || null;
  }

  function updateArchiveNavigation(inRange) {
    const refuge = archiveWorld.refuges.find(item => Math.hypot(archivePlayer.x - item.position[0], archivePlayer.z - item.position[2]) <= 2.6);
    archiveCanvas.dataset.refuge = refuge?.id || '';
    archiveThreat.querySelector('strong').textContent = refuge ? `${refuge.label} active` : 'Wraiths distant';

    const discovery = archiveWorld.discoveries.find(item => !storyProgressState.discoveries.includes(item.id)
      && Math.hypot(archivePlayer.x - item.position[0], archivePlayer.z - item.position[2]) <= item.radius);
    if (discovery) {
      storyProgressState.discoveries.push(discovery.id);
      saveStoryProgress();
      archiveCanvas.dataset.discovery = discovery.id;
      storyShellStatus.textContent = `${discovery.label} discovered. Optional Archive knowledge saved.`;
    }
    archiveCanvas.dataset.discoveryCount = String(storyProgressState.discoveries.length);
    if (inRange) return;

    const landmark = archiveWorld.landmarks.find(item => item.encounterId === currentStoryEncounter().id);
    if (!landmark) return;
    const deltaX = landmark.position[0] - archivePlayer.x;
    const deltaZ = landmark.position[2] - archivePlayer.z;
    const direction = Math.abs(deltaX) > Math.abs(deltaZ)
      ? (deltaX > 0 ? 'east' : 'west')
      : (deltaZ > 0 ? 'north' : 'south');
    archiveInteractionStatus.textContent = `Follow the ${landmark.label} ${Math.max(1, Math.round(Math.hypot(deltaX, deltaZ)))} meters ${direction}.`;
    archiveCanvas.dataset.landmark = landmark.encounterId;
  }

  function updateArchiveSealProximity(force = false) {
    const seal = activeArchiveSeal();
    if (!seal) {
      archiveSealInRange = false;
      archiveApproachSeal.hidden = true;
      archiveCanvas.dataset.sealDistance = 'unavailable';
      archiveCanvas.dataset.sealInRange = 'false';
      archiveInteractionStatus.textContent = 'The Gatehouse is open. Continue through the portcullis to find the next seal.';
      return;
    }
    const distance = Math.hypot(archivePlayer.x - seal.position[0], archivePlayer.z - seal.position[2]);
    const inRange = distance <= seal.interactionRadius;
    archiveCanvas.dataset.sealDistance = distance.toFixed(2);
    archiveCanvas.dataset.sealInRange = String(inRange);
    updateArchiveNavigation(inRange);
    if (!force && inRange === archiveSealInRange) return;
    archiveSealInRange = inRange;
    const encounter = currentStoryEncounter();
    archiveApproachSeal.hidden = !inRange;
    archiveApproachSeal.textContent = `Restore ${encounter.location} seal`;
    archiveInteractionStatus.textContent = inRange
      ? `Seal within reach. Press E or activate the Restore ${encounter.location} seal button.`
      : archiveInteractionStatus.textContent;
  }

  function queueArchiveWorldChange(sealId) {
    archivePendingWorldChange = {
      sealId,
      progress: reducedMotion ? 1 : 0,
      startedAt: 0
    };
    archiveGeometrySignature = '';
  }

  function updateArchiveWorldChange(time) {
    if (archivePendingWorldChange && archivePendingWorldChange.progress < 1) {
      if (!archivePendingWorldChange.startedAt) archivePendingWorldChange.startedAt = time;
      archivePendingWorldChange.progress = Math.min(1, (time - archivePendingWorldChange.startedAt) / 1450);
      archiveCanvas.dataset.worldChange = `${archivePendingWorldChange.sealId}:${archivePendingWorldChange.progress.toFixed(2)}`;
      if (archivePendingWorldChange.progress >= 1) {
        const restoredEncounter = storyEncounters.find(encounter => encounter.id === archivePendingWorldChange.sealId);
        storyShellStatus.textContent = `${restoredEncounter?.location || 'Seal'} restored. The route mechanism is fully open and the passage ahead is safe to enter.`;
      }
    }
    const geometrySignature = archiveWorld.solids
      .filter(solid => solid.opensWith)
      .map(solid => `${solid.opensWith}:${archiveWorldChangeProgress(solid.opensWith).toFixed(3)}`)
      .join('|');
    if (geometrySignature === archiveGeometrySignature || !archiveGl || !archiveVertexBuffer) return;
    const geometry = createArchiveBootstrapGeometry();
    archiveVertexCount = geometry.length / 8;
    archiveGl.bindBuffer(archiveGl.ARRAY_BUFFER, archiveVertexBuffer);
    archiveGl.bufferData(archiveGl.ARRAY_BUFFER, geometry, archiveGl.DYNAMIC_DRAW);
    archiveGeometrySignature = geometrySignature;
    archiveCanvas.dataset.vertices = String(archiveVertexCount);
    archiveCanvas.dataset.gatehouseDoor = archiveWorldChangeProgress('gatehouse').toFixed(2);
    archiveCanvas.dataset.worldChanges = geometrySignature;
  }

  function beginArchiveSealFocus() {
    if (storyProgressState.storyCompleted) {
      showStoryEpilogue();
      return;
    }
    updateArchiveSealProximity(true);
    if (!archiveSealInRange) {
      storyShellStatus.textContent = `${currentStoryEncounter().location} is not within reach. Move closer to the glowing seal.`;
      archiveCanvas.focus();
      return;
    }
    archiveReturnAnchor = { x: archivePlayer.x, z: archivePlayer.z, yaw: archivePlayer.yaw };
    const seal = activeArchiveSeal();
    if (!seal) return;
    archivePlayer.yaw = Math.atan2(seal.position[0] - archivePlayer.x, -(seal.position[2] - archivePlayer.z));
    updateArchivePlayerDiagnostics();
    showStoryBriefing();
  }

  function restoreArchiveFocusAnchor() {
    if (!archiveReturnAnchor) return;
    archivePlayer.x = archiveReturnAnchor.x;
    archivePlayer.z = archiveReturnAnchor.z;
    archivePlayer.yaw = archiveReturnAnchor.yaw;
    archiveReturnAnchor = null;
    updateArchivePlayerDiagnostics();
  }

  function renderArchiveFrame(time) {
    if (!archiveAnimationFrame || archiveExploration.hidden || !archiveGl || !archiveProgram) return;
    const delta = archiveLastFrameTime ? Math.min((time - archiveLastFrameTime) / 1000, .05) : 0;
    archiveLastFrameTime = time;
    archiveElapsedTime += delta;
    updateArchiveWorldChange(time);
    moveArchivePlayer(delta);
    updateArchivePlayerDiagnostics();
    updateArchiveSealProximity();
    const gl = archiveGl;
    const { width, height } = resizeArchiveCanvas();
    gl.viewport(0, 0, width, height);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);
    gl.clearColor(.012, .027, .032, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.useProgram(archiveProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, archiveVertexBuffer);
    const positionLocation = gl.getAttribLocation(archiveProgram, 'aPosition');
    const colorLocation = gl.getAttribLocation(archiveProgram, 'aColor');
    const uvLocation = gl.getAttribLocation(archiveProgram, 'aUv');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 32, 0);
    gl.enableVertexAttribArray(colorLocation);
    gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 32, 12);
    gl.enableVertexAttribArray(uvLocation);
    gl.vertexAttribPointer(uvLocation, 2, gl.FLOAT, false, 32, 24);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, archiveTexture);
    const bob = archivePlayerMoving && !reducedMotion ? Math.sin(archiveElapsedTime * 10.5) * .025 : 0;
    const eye = [archivePlayer.x, archivePlayer.y + bob, archivePlayer.z];
    const target = [
      archivePlayer.x + Math.sin(archivePlayer.yaw),
      archivePlayer.y - .06 + bob,
      archivePlayer.z - Math.cos(archivePlayer.yaw)
    ];
    const view = archiveLookAt(eye, target, [0,1,0]);
    const projection = archivePerspective(Math.PI / 3.15, width / height, .1, 60);
    gl.uniformMatrix4fv(gl.getUniformLocation(archiveProgram, 'uView'), false, view);
    gl.uniformMatrix4fv(gl.getUniformLocation(archiveProgram, 'uProjection'), false, projection);
    gl.uniform1f(gl.getUniformLocation(archiveProgram, 'uPulse'), (Math.sin(archiveElapsedTime * 2.2) + 1) / 2);
    gl.uniform1i(gl.getUniformLocation(archiveProgram, 'uTexture'), 0);
    gl.drawArrays(gl.TRIANGLES, 0, archiveVertexCount);
    archiveAnimationFrame = window.requestAnimationFrame(renderArchiveFrame);
  }

  function startArchiveRenderer() {
    if (archiveAnimationFrame) return;
    if (!initializeArchiveRenderer()) {
      archiveThreat.querySelector('strong').textContent = '3D view unavailable';
      return;
    }
    archiveLastFrameTime = 0;
    archiveAnimationFrame = window.requestAnimationFrame(renderArchiveFrame);
    archiveCanvas.dataset.renderer = 'active';
  }

  function stopArchiveRenderer() {
    if (archiveAnimationFrame) window.cancelAnimationFrame(archiveAnimationFrame);
    archiveAnimationFrame = 0;
    archiveLastFrameTime = 0;
    archiveMovementKeys.clear();
    archivePlayerMoving = false;
    updateArchivePlayerDiagnostics();
    archiveCanvas.dataset.renderer = archiveRendererAvailable ? 'stopped' : 'unavailable';
    if (document.pointerLockElement === archiveCanvas && document.exitPointerLock) document.exitPointerLock();
  }

  function setArchiveRuntimePhase(nextPhase, { preserveSession = false, closeMenu = true } = {}) {
    if (!archiveRuntimePhases.has(nextPhase)) throw new Error(`Unknown Archive runtime phase: ${nextPhase}`);
    if (nextPhase !== 'exploration') stopArchiveRenderer();
    if (closeMenu) closeStoryMenu();
    if (!preserveSession) {
      clearChallengeState(nextPhase === 'seal-focus' || nextPhase === 'capture' ? 'story' : '');
      if (nextPhase !== 'field-kit') closeFieldKitPanels();
      if (nextPhase !== 'seal-focus' && nextPhase !== 'capture') {
        storyEncounterActive = false;
        storyPreparing = false;
        storyTurnControls.disabled = true;
      }
    }
    archiveRuntimePhase = nextPhase;
    document.body.dataset.archivePhase = nextPhase;
    archiveCanvas.dataset.phase = nextPhase;
  }

  function resumeArchiveAfterPause() {
    const resumePhase = archivePauseReturnPhase;
    closeStoryMenu(true);
    setArchiveRuntimePhase(resumePhase, { preserveSession: true, closeMenu: false });
    if (resumePhase === 'exploration') {
      startArchiveRenderer();
    }
  }

  function showStoryTitle(message = '') {
    setArchiveRuntimePhase('title');
    storyShell.hidden = false;
    storyTitleCopy.hidden = false;
    archiveExploration.hidden = true;
    fieldKitContent.hidden = true;
    fieldKitCube.hidden = true;
    storyEncounterPanel.hidden = true;
    storyShell.dataset.view = 'title';
    storyPrimary.textContent = hasStoryProgress() ? 'Continue in the Archive' : 'Enter the Archive';
    const encounter = currentStoryEncounter();
    const encounterIndex = storyEncounters.findIndex(item => item.id === encounter.id);
    storyLocation.textContent = storyProgressState.storyCompleted ? 'The Dawn Vault is restored' : `${encounter.sector} · ${encounter.location} · ${encounterIndex + 1} of ${storyEncounters.length}`;
    storyShellStatus.textContent = message;
    document.body.dataset.experience = 'story';
    storyPrimary.focus();
  }

  function renderArchiveExploration() {
    const current = currentStoryEncounter();
    const currentIndex = storyEncounters.findIndex(encounter => encounter.id === current.id);
    const completedCount = storyProgressState.completedEncounterIds.length;
    archiveSector.textContent = `${current.sector} · Seal ${currentIndex + 1} of ${storyEncounters.length}`;
    archiveLocation.textContent = current.location;
    archiveObjective.textContent = storyProgressState.storyCompleted ? 'Return to the restored Dawn Vault.' : current.objective;
    archiveProgress.textContent = `${completedCount} of ${storyEncounters.length} seals restored · Latest refuge: ${completedCount ? current.sector : 'Archive entrance'}`;
    archiveApproachSeal.textContent = storyProgressState.storyCompleted ? 'Enter the Dawn Vault' : `Approach ${current.location} seal`;
    archiveThreat.querySelector('strong').textContent = 'Wraiths distant';
    if (storyProgressState.completedEncounterIds.includes('gatehouse')) {
      archiveInteractionStatus.textContent = 'The Gatehouse portcullis is open. Continue deeper into the Archive.';
    }
  }

  function showArchiveExploration() {
    setArchiveRuntimePhase('exploration');
    storyShell.hidden = false;
    storyTitleCopy.hidden = true;
    archiveExploration.hidden = false;
    fieldKitContent.hidden = true;
    fieldKitCube.hidden = true;
    storyEncounterPanel.hidden = true;
    storyShell.dataset.view = 'archive';
    document.body.dataset.experience = 'archive';
    saveStoryProgress();
    restoreArchiveFocusAnchor();
    renderArchiveExploration();
    updateArchiveSealProximity(true);
    startArchiveRenderer();
    const encounter = currentStoryEncounter();
    storyShellStatus.textContent = storyProgressState.storyCompleted ? 'All twelve seals are restored. The Dawn Vault is open.' : `Exploration ready in ${encounter.sector}. ${encounter.location} is the active seal.`;
    if (archiveSealInRange) archiveApproachSeal.focus();
    else archiveCanvas.focus();
  }

  function showStoryBriefing() {
    setArchiveRuntimePhase('seal-focus');
    const encounter = currentStoryEncounter();
    const encounterIndex = storyEncounters.findIndex(item => item.id === encounter.id);
    storyShell.hidden = true;
    fieldKitContent.hidden = true;
    fieldKitCube.hidden = false;
    storyEncounterPanel.hidden = false;
    storyBriefing.hidden = false;
    storyGameplay.hidden = true;
    storyVictory.hidden = true;
    storyFailure.hidden = true;
    storyEpilogue.hidden = true;
    storyEncounterSector.textContent = `${encounter.sector} · Seal ${encounterIndex + 1} of ${storyEncounters.length}`;
    storyEncounterTitle.textContent = encounter.location;
    storyEncounterNarrative.textContent = encounter.narrative;
    storyEncounterOrientation.textContent = `Orientation: ${storyEncounterContent[encounter.id]?.orientation || 'Keep the cube steady and follow the objective one piece at a time.'}`;
    storyEncounterObjective.textContent = encounter.objective;
    storyEncounterStatus.textContent = 'Read the objective, then enter the seal.';
    document.body.dataset.experience = 'story-encounter';
    storyEnterSeal.focus();
  }

  function storyEncounterComplete() {
    const encounter = currentStoryEncounter();
    return Boolean(storyValidators[encounter.validatorId]?.());
  }

  function renderStoryPursuit() {
    const labelIndex = Math.min(storyPressure, storyPressureLabels.length - 1);
    storyPursuitLabel.textContent = `Void Wraiths: ${storyPressureLabels[labelIndex]}`;
    storyPursuitCount.textContent = `${storyPressure} of ${currentStoryEncounter().pressureBudget}`;
    [...storyPursuitTrack.children].forEach((segment, index) => segment.classList.toggle('is-active', index < storyPressure));
    storyPursuitTrack.setAttribute('aria-label', `Void Wraith pursuit: ${storyPressure} of ${currentStoryEncounter().pressureBudget}, ${storyPressureLabels[labelIndex]}`);
  }

  function resetStoryEncounterHud() {
    storyPressure = 0;
    storyStagnantMoves = 0;
    storyHintIndex = 0;
    storyLastProgress = storyProgressValue();
    storyHintText.hidden = true;
    storyHintText.textContent = '';
    storyHint.disabled = false;
    storyHint.textContent = 'Reveal a Hint';
    renderStoryPursuit();
  }

  function failStoryEncounter(reason) {
    if (!storyEncounterActive) return;
    setArchiveRuntimePhase('capture', { preserveSession: true });
    storyEncounterActive = false;
    storyGameplay.hidden = true;
    storyFailure.hidden = false;
    storyTurnControls.disabled = true;
    storyEncounterStatus.textContent = `The Void Wraiths reached the chamber after ${reason}. The checkpoint is safe.`;
    storyFailureRetry.focus();
  }

  function advanceStoryPressure(reason) {
    if (!storyEncounterActive) return;
    storyPressure = Math.min(currentStoryEncounter().pressureBudget, storyPressure + 1);
    renderStoryPursuit();
    if (storyPressure >= currentStoryEncounter().pressureBudget) failStoryEncounter(reason);
    else storyEncounterStatus.textContent = `The Void Wraiths move closer: ${storyPressureLabels[storyPressure]}.`;
  }

  function useStoryHint() {
    if (!storyEncounterActive || storyHintIndex >= 3) return;
    const encounter = currentStoryEncounter();
    storyHintText.textContent = `Compass hint ${storyHintIndex + 1}: ${encounter.hints[storyHintIndex]}`;
    storyHintText.hidden = false;
    storyHintIndex += 1;
    storyHint.textContent = storyHintIndex >= 3 ? 'All Hints Revealed' : 'Ask for the Next Hint';
    storyHint.disabled = storyHintIndex >= 3;
    storyEncounterStatus.textContent = `Hint ${storyHintIndex} revealed. Wraiths remain paused while the seal is in focus.`;
  }

  async function startStoryEncounter() {
    if (busy) return;
    const encounter = currentStoryEncounter();
    const encounterIndex = storyEncounters.findIndex(item => item.id === encounter.id);
    clearChallengeState('story');
    setArchiveRuntimePhase('seal-focus', { preserveSession: true });
    storyEncounterActive = false;
    storyPreparing = true;
    history = [];
    initialize();
    storyEncounterStatus.textContent = `Preparing the ${encounter.location} seal…`;
    await runSequence(encounter.setupMoves, true);
    storyCheckpointIndex = history.length;
    storyPlayerMoves = 0;
    storyTargetSignature = encounter.validatorId === 'sequence' ? simulatedSignature(storyEncounterContent[encounter.id]?.expectedMoves || []) : '';
    storyPreparing = false;
    storyEncounterActive = true;
    storyBriefing.hidden = true;
    storyVictory.hidden = true;
    storyFailure.hidden = true;
    storyEpilogue.hidden = true;
    storyGameplay.hidden = false;
    storyGameplaySector.textContent = `${encounter.sector} · Seal ${encounterIndex + 1} active`;
    storyGameplayTitle.textContent = encounter.location;
    storyGameplayObjective.textContent = encounter.objective;
    storyMoveCount.textContent = 'Moves: 0';
    storyProgressLabel.textContent = storyProgressDescription();
    resetStoryEncounterHud();
    storyEncounterStatus.textContent = `${encounter.location} ready. Wraiths are paused; take the time you need and make legal face turns.`;
    storyTurnControls.disabled = false;
    storyTurnControls.querySelector('button').focus();
  }

  function updateStoryAfterTurn() {
    if (!storyEncounterActive) return;
    storyPlayerMoves += 1;
    storyMoveCount.textContent = `Moves: ${storyPlayerMoves}`;
    if (storyEncounterComplete()) {
      storyProgressLabel.textContent = 'Seal progress: restored';
      completeStoryEncounter();
      return;
    }
    const currentProgress = storyProgressValue();
    const direction = currentProgress > storyLastProgress ? 'improving' : currentProgress < storyLastProgress ? 'slipped' : 'holding';
    const detail = storyEncounterContent[currentStoryEncounter().id];
    storyProgressLabel.textContent = detail?.progressGoal ? `${Math.min(currentProgress, detail.progressGoal)} of ${detail.progressGoal} ${detail.progressUnit} · ${direction}` : `Seal progress: ${direction}`;
    storyStagnantMoves = currentProgress === storyLastProgress ? storyStagnantMoves + 1 : 0;
    storyLastProgress = currentProgress;
  }

  function completeStoryEncounter() {
    if (!storyEncounterActive) return;
    storyEncounterActive = false;
    const encounter = currentStoryEncounter();
    const encounterIndex = storyEncounters.findIndex(item => item.id === encounter.id);
    if (!storyProgressState.completedEncounterIds.includes(encounter.id)) storyProgressState.completedEncounterIds.push(encounter.id);
    const previousBest = storyProgressState.bestMoveCounts[encounter.id];
    storyProgressState.bestMoveCounts[encounter.id] = previousBest ? Math.min(previousBest, storyPlayerMoves) : storyPlayerMoves;
    const finalEncounter = encounterIndex === storyEncounters.length - 1;
    storyProgressState.storyCompleted = finalEncounter;
    if (!finalEncounter) storyProgressState.currentEncounterId = storyEncounters[encounterIndex + 1].id;
    saveStoryProgress();
    queueArchiveWorldChange(encounter.id);
    storyGameplay.hidden = true;
    storyFailure.hidden = true;
    storyVictory.hidden = false;
    storyVictoryTitle.textContent = finalEncounter ? 'The Dawn Vault opens' : `${encounter.location} secured`;
    const storyBeat = storyEncounterContent[encounter.id]?.success || 'The restored seal lights the next section of the route.';
    storyVictorySummary.textContent = finalEncounter ? `${storyBeat} Aya completed the final seal in ${storyPlayerMoves} moves.` : `${storyBeat} ${storyPlayerMoves} moves recorded; ${storyEncounters[encounterIndex + 1].location} is now open.`;
    storyVictoryContinue.textContent = finalEncounter ? 'Enter the Restored Dawn Vault' : 'Return to the Archive';
    storyEncounterStatus.textContent = `Seal restored in ${storyPlayerMoves} moves.`;
    storyVictoryContinue.focus();
  }

  async function retryStoryEncounter() {
    if (busy || !storyCheckpointIndex && history.length === 0) return;
    setArchiveRuntimePhase('seal-focus', { preserveSession: true });
    storyEncounterActive = false;
    const playerMoves = history.slice(storyCheckpointIndex);
    storyEncounterStatus.textContent = 'Returning to the seal checkpoint…';
    await runSequence(playerMoves.reverse().map(inverse), false);
    history.splice(storyCheckpointIndex);
    storyPlayerMoves = 0;
    storyMoveCount.textContent = 'Moves: 0';
    storyProgressLabel.textContent = storyProgressDescription();
    storyGameplay.hidden = false;
    storyFailure.hidden = true;
    resetStoryEncounterHud();
    storyEncounterActive = true;
    storyProgressState.retries += 1;
    saveStoryProgress();
    storyEncounterStatus.textContent = 'Checkpoint restored. Try the seal again.';
  }

  async function leaveStoryEncounterToMap() {
    if (busy) return;
    storyEncounterActive = false;
    storyPreparing = true;
    if (history.length) await runSequence([...history].reverse().map(inverse), false);
    history = [];
    storyPreparing = false;
    updateCubeLabel();
    showArchiveExploration();
  }

  function continueStoryRoute() {
    if (storyProgressState.storyCompleted) {
      showStoryEpilogue();
      return;
    }
    storyEncounterPanel.hidden = true;
    fieldKitCube.hidden = true;
    history = [];
    initialize();
    showArchiveExploration();
  }

  function showStoryEpilogue() {
    setArchiveRuntimePhase('epilogue');
    storyShell.hidden = true;
    fieldKitContent.hidden = true;
    fieldKitCube.hidden = true;
    storyEncounterPanel.hidden = false;
    storyBriefing.hidden = true;
    storyGameplay.hidden = true;
    storyFailure.hidden = true;
    storyVictory.hidden = true;
    storyEpilogue.hidden = false;
    history = [];
    initialize();
    const totalMoves = Object.values(storyProgressState.bestMoveCounts).reduce((total, moves) => total + moves, 0);
    storyEpilogueStat.textContent = `Twelve seals restored${totalMoves ? ` · Best recorded route: ${totalMoves} moves` : ''}.`;
    storyEncounterStatus.textContent = 'The Living Archive is restored. Dawn has returned.';
    document.body.dataset.experience = 'story-encounter';
    storyReplayRoute.focus();
  }

  async function restoreSolvedCubeForModeChange() {
    if (busy) return false;
    storyEncounterActive = false;
    storyPreparing = true;
    if (history.length) await runSequence([...history].reverse().map(inverse), false);
    history = [];
    initialize();
    storyPreparing = false;
    updateCubeLabel();
    return true;
  }

  function closeFieldKitPanels() {
    [speedrun, missions, replays, algorithms, stateTools, progressPanel, inputHelp, achievements, tutor, academyHud].forEach(panel => { panel.hidden = true; });
    document.querySelectorAll('.legacy-tool').forEach(panel => { panel.hidden = true; });
    [speedrunToggle, missionsToggle, replaysToggle, algorithmsToggle, stateToggle, progressToggle, inputToggle, achievementsToggle, tutorToggle].forEach(toggle => toggle.setAttribute('aria-expanded', 'false'));
    tutorToggle.textContent = 'Guided solve';
    controls.hidden = true;
  }

  async function openFieldKit() {
    if (!await restoreSolvedCubeForModeChange()) return;
    setArchiveRuntimePhase('field-kit');
    storyShell.hidden = true;
    fieldKitContent.hidden = false;
    fieldKitCube.hidden = false;
    storyEncounterPanel.hidden = true;
    document.body.dataset.experience = 'field-kit';
    status.textContent = 'Field Kit opened. Story progress is unchanged.';
    fieldKitExit.focus();
  }

  async function exitFieldKitToStory() {
    if (!await restoreSolvedCubeForModeChange()) return;
    clearChallengeState();
    closeFieldKitPanels();
    showStoryTitle('Returned to the Archive. Timers and active Field Kit sessions were cleared.');
  }

  function enterStoryRoute() {
    showArchiveExploration();
    const encounter = currentStoryEncounter();
    storyShellStatus.textContent = storyProgressState.storyCompleted ? 'The restored Archive is open.' : `Entered the Archive. Find the ${encounter.location} seal.`;
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
    if (handleStoryMenuKeydown(event)) return;
    const target = event.target;
    if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement || target.isContentEditable) return;
    if (document.body.dataset.experience === 'archive' && storyMenu.hidden) {
      const movement = archiveMovementKeyMap[event.key.toLowerCase()];
      const turning = archiveTurnKeyMap[event.key.toLowerCase()];
      if (movement || turning || event.key === 'Shift') {
        event.preventDefault();
        archiveMovementKeys.add(movement || turning || 'sprint');
        if (!event.repeat) {
          moveArchivePlayer(1 / 60);
          updateArchivePlayerDiagnostics();
        }
        return;
      }
      if (event.key.toLowerCase() === 'e' && !event.repeat) {
        event.preventDefault();
        beginArchiveSealFocus();
        return;
      }
    }
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
  document.addEventListener('keyup', event => {
    const movement = archiveMovementKeyMap[event.key.toLowerCase()];
    const turning = archiveTurnKeyMap[event.key.toLowerCase()];
    if (movement) archiveMovementKeys.delete(movement);
    if (turning) archiveMovementKeys.delete(turning);
    if (event.key === 'Shift') archiveMovementKeys.delete('sprint');
  });
  window.addEventListener('blur', () => {
    archiveMovementKeys.clear();
    archivePlayerMoving = false;
  });
  archiveCanvas.addEventListener('click', () => {
    if (document.body.dataset.experience !== 'archive' || !storyMenu.hidden) return;
    archiveCanvas.focus();
    if (!archiveCanvas.requestPointerLock) return;
    try {
      const request = archiveCanvas.requestPointerLock();
      if (request && typeof request.catch === 'function') {
        request.catch(() => {
          archiveCanvas.dataset.pointerLock = 'unavailable';
          storyShellStatus.textContent = 'Mouse look was not enabled. Keyboard turning remains available.';
        });
      }
    } catch (error) {
      archiveCanvas.dataset.pointerLock = 'unavailable';
      storyShellStatus.textContent = 'Mouse look was not enabled. Keyboard turning remains available.';
    }
  });
  document.addEventListener('mousemove', event => {
    if (document.pointerLockElement !== archiveCanvas || document.body.dataset.experience !== 'archive') return;
    archivePlayer.yaw += event.movementX * .0022;
    archivePlayer.yaw = Math.atan2(Math.sin(archivePlayer.yaw), Math.cos(archivePlayer.yaw));
    updateArchivePlayerDiagnostics();
  });
  document.addEventListener('pointerlockchange', () => {
    if (document.pointerLockElement === archiveCanvas) {
      archiveCanvas.dataset.pointerLock = 'active';
      storyShellStatus.textContent = 'Mouse look active. Press Escape to release the pointer.';
    } else {
      archiveCanvas.dataset.pointerLock = 'inactive';
    }
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
    if (!opening) {
      resumeArchiveAfterPause();
      return;
    }
    archivePauseReturnPhase = archiveRuntimePhase === 'exploration' ? 'exploration' : 'title';
    setArchiveRuntimePhase('pause', { preserveSession: true, closeMenu: false });
    storyMenuReturnFocus = document.activeElement;
    storyMenu.hidden = false;
    storyMenuToggle.setAttribute('aria-expanded', 'true');
    storyMenuClose.focus();
  });
  storyMenuClose.addEventListener('click', resumeArchiveAfterPause);
  storyFieldKit.addEventListener('click', openFieldKit);
  fieldKitExit.addEventListener('click', exitFieldKitToStory);
  storyNewGame.addEventListener('click', () => {
    if (!window.confirm('Start a new Archive campaign? This resets only Cube Warden campaign progress.')) return;
    resetStoryProgress();
    storyShell.dataset.view = 'title';
    storyIntro.textContent = 'Twelve seals stand between Aya and the Dawn Vault. Restore each cube before the Void Wraiths close in.';
    showStoryTitle('New route ready at the Ash Gate.');
  });
  storyPrimary.addEventListener('click', enterStoryRoute);
  archiveBack.addEventListener('click', () => showStoryTitle('Returned to the title. Archive progress is saved.'));
  archiveApproachSeal.addEventListener('click', beginArchiveSealFocus);
  storyEnterSeal.addEventListener('click', startStoryEncounter);
  storyBriefingMap.addEventListener('click', showArchiveExploration);
  storyBriefingFieldKit.addEventListener('click', openFieldKit);
  storyTurnControls.addEventListener('click', event => {
    const button = event.target.closest('button[data-story-move]');
    if (!button || busy || !storyEncounterActive) return;
    turn(button.dataset.storyMove);
    if (storyEncounterActive) storyEncounterStatus.textContent = `${button.dataset.storyMove} turn applied.`;
  });
  storyHint.addEventListener('click', useStoryHint);
  storyRetry.addEventListener('click', retryStoryEncounter);
  storyGameplayMap.addEventListener('click', leaveStoryEncounterToMap);
  storyGameplayFieldKit.addEventListener('click', openFieldKit);
  storyFailureRetry.addEventListener('click', retryStoryEncounter);
  storyFailureMap.addEventListener('click', leaveStoryEncounterToMap);
  storyFailureFieldKit.addEventListener('click', openFieldKit);
  storyVictoryContinue.addEventListener('click', continueStoryRoute);
  storyReplayRoute.addEventListener('click', () => {
    resetStoryProgress();
    history = [];
    initialize();
    showStoryTitle('A new Archive campaign is ready at the Ash Gate.');
  });
  storyEpilogueFieldKit.addEventListener('click', openFieldKit);
  storyEpilogueTitle.addEventListener('click', () => showStoryTitle('The completed route is saved.'));

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
  storyProgressState = loadStoryProgress();
  restoreArchiveCheckpointPosition();
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
  window.CubeWardenRuntime = Object.freeze({ phase: () => archiveRuntimePhase });
  window.RubiksCubeFeedback = Object.freeze({ capabilities: feedbackCapabilities, preferences: () => ({ ...feedbackPreferences }), save: saveFeedbackPreferences });
  window.RubiksCubeTwoPlayer = Object.freeze({ state: () => ({ ...twoPlayerState, players: twoPlayerState.players.map(player => ({ ...player })), moves: twoPlayerState.moves.slice(), timesMs: twoPlayerState.timesMs.slice() }), start: startTwoPlayerRound, next: advanceTwoPlayerTurn, finish: finishTwoPlayerRound, reset: resetTwoPlayerState });
  window.RubiksCubeReplay = Object.freeze({ create: createReplay, isValid: isReplay, encode: encodeReplay, decode: decodeReplay, play: playReplay, step: stepReplay, version: replayVersion });
  window.CubeWardenStory = Object.freeze({
    version: storyVersion,
    encounters: () => storyEncounters.map(encounter => ({ ...encounter, setupMoves: encounter.setupMoves.slice(), hints: encounter.hints.slice() })),
    state: () => ({ ...storyProgressState, completedEncounterIds: storyProgressState.completedEncounterIds.slice(), bestMoveCounts: { ...storyProgressState.bestMoveCounts } })
  });
  window.CubeWardenArchive = Object.freeze({
    renderer: () => ({
      available: archiveRendererAvailable,
      active: Boolean(archiveAnimationFrame),
      width: archiveCanvas.width,
      height: archiveCanvas.height,
      vertices: archiveVertexCount,
      collisionSolids: archiveWorld.solids.filter(solid => solid.collision).length
    })
  });
})();
