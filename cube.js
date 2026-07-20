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
  const solveButton = document.getElementById('solve');
  const controls = document.getElementById('turn-controls');
  const status = document.getElementById('status');
  const tutorToggle = document.getElementById('tutor-toggle');
  const tutor = document.getElementById('tutor');
  const tutorTitle = document.getElementById('tutor-title');
  const tutorBody = document.getElementById('tutor-body');
  const tutorTip = document.getElementById('tutor-tip');
  const tutorMoves = document.getElementById('tutor-moves');
  const tutorCount = document.getElementById('tutor-count');
  const tutorPrevious = document.getElementById('tutor-prev');
  const tutorNext = document.getElementById('tutor-next');
  const tutorDemo = document.getElementById('tutor-demo');
  const faceElements = [...document.querySelectorAll('[data-face]')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let stickers = [];
  let history = [];
  let busy = false;
  let rotation = { x: -28, y: 36 };
  let pointer = null;
  let tutorStep = 0;
  const lessons = [
    { title: 'Meet your cube', body: 'The six center stickers never move, so they name each face. Hold white on top and green facing you. A solved cube has each face matching its center.', tip: 'Notation: U, R, F, D, L, and B mean turn the Up, Right, Front, Down, Left, or Back face clockwise. An apostrophe means turn it counter-clockwise.', moves: [] },
    { title: 'Make the white cross', body: 'Find the four white edge pieces (they have two colors). Move each beside the matching side-center, then turn that face twice to bring the white sticker to the top. Keep the side color matched before each double turn.', tip: 'Do not worry about white corners yet. The goal is a white plus sign with all four side colors matching their centers.', moves: ['F2', 'R2', 'L2', 'B2'] },
    { title: 'Finish the white corners', body: 'Keep white on top. Place a white corner directly below where it belongs, at the front-right-bottom. Repeat the short move until the corner goes in; then turn only the bottom layer to bring the next corner there.', tip: 'If a white corner is stuck on top in the wrong place, use the same short move once to bring it down first.', moves: ["R'", "D'", 'R', 'D'] },
    { title: 'Solve the middle layer', body: 'Turn the cube upside down so white is on the bottom. Find a top-layer edge with no yellow. Match its front color to the front center, then choose whether its other color belongs on the right or the left.', tip: 'Use the right algorithm for an edge going right; mirror it for an edge going left. Repeat if the edge needs to be brought out first.', moves: ['R', 'U', "R'", "U'", "F'", "U'", 'F'] },
    { title: 'Make a yellow cross', body: 'Keep yellow on top. Use this algorithm for the yellow dot, L shape, or line. For an L, hold it like an L in the top-left; for a line, hold it horizontally. Repeat until you see a yellow cross.', tip: 'Only the yellow face matters in this step; side colors can look messy for now.', moves: ['F', 'R', 'U', "R'", "U'", "F'"] },
    { title: 'Put yellow corners in the right spots', body: 'A corner is in the right spot when its three colors match the three surrounding centers, even if yellow is not facing up. Find one correct corner and hold it at front-right-top. Use the algorithm, then check again.', tip: 'If no corner is correct, run the algorithm once from any position; then you should have one correct corner to hold in place.', moves: ['U', 'R', "U'", "L'", 'U', "R'", "U'", 'L'] },
    { title: 'Twist the yellow corners', body: 'Put an unsolved yellow corner at front-right-top. Repeat the four moves until yellow faces up on that corner. Turn only the top face to bring the next unsolved corner to front-right-top, then repeat.', tip: 'The cube will look worse halfway through. Keep going and do not rotate the whole cube.', moves: ["R'", "D'", 'R', 'D'] },
    { title: 'Finish the yellow edges', body: 'If one top edge already matches its side center, hold that solved edge at the back. Run the final algorithm. If no edge matches, run it once from any side, then hold the matching edge at the back and run it again.', tip: 'Congratulations — the cube should now be solved. Practice slowly; accuracy matters more than speed.', moves: ['F2', 'U', 'L', "R'", 'F2', "L'", 'R', 'U', 'F2'] }
  ];

  const key = (p, n) => `${p.join(',')}|${n.join(',')}`;
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const inverse = move => move.endsWith("'") ? move[0] : `${move}'`;
  const wait = milliseconds => new Promise(resolve => window.setTimeout(resolve, milliseconds));

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

  function render() {
    const locations = new Map(stickers.map(sticker => [key(sticker.position, sticker.normal), sticker]));
    faceElements.forEach(element => {
      const definition = faces[element.dataset.face];
      element.replaceChildren();
      for (let row = 0; row < 3; row += 1) for (let col = 0; col < 3; col += 1) {
        const sticker = locations.get(key(definition.location(row, col), definition.n));
        const cell = document.createElement('span');
        cell.className = `sticker ${sticker.color}`;
        element.append(cell);
      }
    });
  }

  function turn(move, record = true) {
    const axis = faces[move[0]].n;
    const rotations = move.endsWith("'") ? 3 : 1;
    for (let pass = 0; pass < rotations; pass += 1) stickers.forEach(sticker => {
      if (dot(sticker.position, axis) === 1) {
        sticker.position = rotateVector(sticker.position, axis);
        sticker.normal = rotateVector(sticker.normal, axis);
      }
    });
    if (record) history.push(move);
    render();
  }

  function updateView() {
    cube.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
  }

  function renderTutor() {
    const lesson = lessons[tutorStep];
    tutorTitle.textContent = lesson.title;
    tutorBody.textContent = lesson.body;
    tutorTip.textContent = lesson.tip;
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
  }

  function setBusy(value) {
    busy = value;
    shuffleButton.disabled = value;
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
  });

  shuffleButton.addEventListener('click', async () => {
    if (busy) return;
    initialize();
    history = [];
    status.textContent = 'Shuffling…';
    await runSequence(shuffleMoves(), true);
    status.textContent = 'Shuffled. Drag to inspect it or make a face turn.';
  });

  solveButton.addEventListener('click', async () => {
    if (busy || !history.length) return;
    status.textContent = 'Solving…';
    const solution = [...history].reverse().map(inverse);
    await runSequence(solution, false);
    history = [];
    solveButton.disabled = true;
    status.textContent = 'Solved — every face is back in place.';
  });

  tutorToggle.addEventListener('click', () => {
    const opening = tutor.hidden;
    tutor.hidden = !opening;
    tutorToggle.setAttribute('aria-expanded', String(opening));
    tutorToggle.textContent = opening ? 'Close tutor' : 'Tutor mode';
    if (opening) renderTutor();
  });
  tutorPrevious.addEventListener('click', () => { if (tutorStep > 0) { tutorStep -= 1; renderTutor(); } });
  tutorNext.addEventListener('click', () => { tutorStep = tutorStep === lessons.length - 1 ? 0 : tutorStep + 1; renderTutor(); });
  tutorDemo.addEventListener('click', async () => {
    if (busy) return;
    const lesson = lessons[tutorStep];
    status.textContent = `Practising ${lesson.moves.join(' ')}…`;
    await runSequence(lesson.moves, true);
    status.textContent = 'Practice move applied. Use Solve any time to undo your practice.';
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
})();
