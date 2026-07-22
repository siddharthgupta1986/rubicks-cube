# Cube Academy Release Checks

## Automated checks

- `node --check cube.js`
- HTML parser check for `index.html`
- `git diff --check`

## Browser acceptance

- Journey opens with one recommended Continue Training action.
- Continue Training opens the guided chapter and contextual session HUD.
- Exit Session returns to the Academy destinations without changing cube state.
- Practice routes to Daily Challenge, Speedrun, Missions, Algorithms, Scramble Studio, and Pass and Play.
- Vault routes to Progress, Achievements, Replays, Cube State, View Controls, Feedback, Input Help, and Theme.
- A solve records the final Academy milestone and updates rank/progress locally.
- Dragging rotates the view only; face buttons mutate the cube state.
- 320px viewport reports no horizontal overflow.
- Reduced-motion preferences use instant scrolling and existing reduced-motion CSS.

## Known follow-up

The remaining compatibility hardening should consolidate mode transitions so imported state, replay playback, and challenge sessions cannot inherit unrelated active timers or counters.
