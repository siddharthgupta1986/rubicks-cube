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
  const shuffleButton = document.getElementById('shuffle');
  const dailyChallengeButton = document.getElementById('daily-challenge');
  const speedrunToggle = document.getElementById('speedrun-toggle');
  const speedrun = document.getElementById('speedrun');
  const speedrunTime = document.getElementById('speedrun-time');
  const speedrunStart = document.getElementById('speedrun-start');
  const speedrunReset = document.getElementById('speedrun-reset');
  const speedrunInspection = document.getElementById('speedrun-inspection');
  const dailyResult = document.getElementById('daily-result');
  const dailyResultSummary = document.getElementById('daily-result-summary');
  const dailyShareButton = document.getElementById('daily-share');
  const solveButton = document.getElementById('solve');
  const controls = document.getElementById('turn-controls');
  const status = document.getElementById('status');
  const tutorToggle = document.getElementById('tutor-toggle');
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
  const faceElements = [...document.querySelectorAll('[data-face]')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dailyStorageKey = 'rubiks-cube.daily-challenge.v1';
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
  let rotation = { x: -28, y: 36 };
  let pointer = null;
  let tutorStep = 0;
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

  const key = (p, n) => `${p.join(',')}|${n.join(',')}`;
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
    initialize();
    history = [];
    setSpeedrunState('scrambling');
    status.textContent = 'Preparing your speedrun scramble…';
    await runSequence(shuffleMoves(), true);
    if (speedrunInspection.checked && !reducedMotion) beginInspection();
    else beginTimedSpeedrun();
  }

  function resetSpeedrun() {
    stopSpeedrunTimer();
    setSpeedrunState('idle');
    speedrunStartedAt = 0;
    speedrunTime.textContent = '0:00.00';
    status.textContent = 'Speedrun timer reset.';
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
    if (!tutor.hidden && isGuidedStageComplete()) status.textContent = `Goal complete: ${lessons[tutorStep].title}. Move to the next step.`;
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
    render();
  }

  function updateView() {
    cube.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
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
    tutorPrevious.disabled = tutorStep === 0;
    tutorNext.textContent = tutorStep === lessons.length - 1 ? 'Start again' : 'Next step';
    render();
  }

  function setBusy(value) {
    busy = value;
    shuffleButton.disabled = value;
    dailyChallengeButton.disabled = value;
    solveButton.disabled = value || history.length === 0;
    controls.disabled = value;
  }

  async function runSequence(moves, record) {
    setBusy(true);
    for (const move of moves) {
      turn(move, record);
      if (!reducedMotion) await wait(95);
    }
    setBusy(false);
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

  controls.addEventListener('click', event => {
    const button = event.target.closest('button[data-move]');
    if (!button || busy) return;
    turn(button.dataset.move);
    solveButton.disabled = false;
    status.textContent = `${button.dataset.move} turn applied.`;
    announceGuidedProgress();
  });

  shuffleButton.addEventListener('click', async () => {
    if (busy) return;
    dailyChallengeActive = false;
    dailyChallengePreparing = false;
    dailyChallengeDateKey = '';
    history = [];
    initialize();
    status.textContent = 'Shuffling…';
    await runSequence(shuffleMoves(), true);
    status.textContent = 'Shuffled. Drag to inspect it or make a face turn.';
  });

  dailyChallengeButton.addEventListener('click', async () => {
    if (busy) return;
    initialize();
    history = [];
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

  initialize();
  dailyResults = loadDailyResults();

  window.RubiksCubeChallenge = Object.freeze({
    getLocalDateKey,
    dailyScrambleMoves: (date, length) => dailyScrambleMoves(date, length).slice()
  });
})();
