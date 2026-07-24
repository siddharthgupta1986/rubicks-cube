# Cube Warden: The Living Archive Delivery Roadmap

This roadmap decomposes the PRD into independently testable feature tracks and
bounded subtasks.

## GitHub issue index

- Epic: #191
- Campaign shell and state boundary: #192
  - #242 Adopt the Living Archive product contract and issue roadmap
  - #205 Replace route shell with exploration canvas and HUD
  - #203 Add Archive v2 persistence and sanitization
  - #207 Implement campaign runtime transitions and cleanup
  - #200 Add campaign persistence and checkpoint fixtures
- Native WebGL renderer: #193
  - #202 Build renderer lifecycle and shaders
  - #204 Add environment meshes and materials
  - #201 Add lighting, fog, particles, and world-change animation
  - #206 Add quality controls, diagnostics, and fallback
- Movement and input: #195
  - #211 Implement movement, sprint, and collision
  - #208 Add keyboard, mouse turning, and pointer lock
  - #212 Add responsive touch movement and look controls
  - #209 Add gamepad exploration controls and focus remapping
- Authored world and progression: #194
  - #210 Build Ash Gate and Glass Quarter
  - #213 Build Sunken Stacks and Iron Depths
  - #214 Build Star Tower and Warden Keep
  - #215 Add transitions, refuges, landmarks, and side rooms
- In-world cube seal focus: #196
  - #217 Add proximity prompts and anchored focus transition
  - #216 Reuse all twelve legal cube objectives
  - #219 Animate completion into persistent world changes
  - #218 Verify retry, reversal, and mode isolation
- Void Wraith AI: #197
  - #220 Implement patrol and state machine
  - #221 Add detection, occlusion, and warning cues
  - #222 Add pursuit, search, capture, and recovery
  - #223 Add refuges and pursuit accessibility
- Art, animation, sound, and atmosphere: #198
  - #229 Create high-resolution materials and props
  - #224 Animate environments, fog, and particles
  - #226 Create and animate Void Wraith visuals
  - #227 Add local ambience, captions, and controls
- Accessibility, performance, QA, and release: #199
  - #231 Add accessible DOM state and keyboard-only campaign
  - #225 Add motion, pursuit, quality, contrast, and touch accessibility
  - #228 Profile and optimize rendering and simulation
  - #230 Execute release QA and update documentation
- Improvement passes:
  - #233 movement feel
  - #232 world readability
  - #234 Wraith fairness
  - #235 seal delight
  - #236 atmosphere
  - #237 optional exploration
  - #238 mobile and touch
  - #239 accessibility
  - #240 performance and resilience
  - #241 final release polish

## Epic: Living Archive campaign

Deliver the complete first-person WebGL campaign, preserve the Rubik's Cube and
Field Kit contracts, then run ten explicit improvement passes.

## Feature 1: Campaign shell and state boundary

- Replace the illustrated route entry with a campaign canvas and exploration HUD.
- Add Archive v2 persistence, sanitization, New Game, and seal checkpoints.
- Add exploration, seal-focus, pause, capture, and Field Kit transition cleanup.
- Add deterministic campaign fixtures for save/load and checkpoint restoration.

## Feature 2: Native WebGL renderer

- Create renderer lifecycle, shaders, camera matrices, resize, and quality scaling.
- Add authored mesh/material data for walls, floors, ceilings, doors, and props.
- Add fog, emissive seal lighting, particles, and animated world-change geometry.
- Add WebGL compatibility handling and renderer diagnostics.

## Feature 3: Player movement and input

- Implement frame-rate-independent walking, turning, strafing, sprint, collision,
  and door traversal.
- Integrate keyboard, optional pointer lock, mouse turning, and pause/focus rules.
- Add touch joystick/look controls and narrow-screen HUD layout.
- Add gamepad exploration mapping without breaking cube-turn mapping in seal focus.

## Feature 4: Authored world and progression

- Build Ash Gate and Glass Quarter with seals 1–4 and visible world changes.
- Build Sunken Stacks and Iron Depths with seals 5–8 and visible world changes.
- Build Star Tower and Warden Keep with seals 9–12 and visible world changes.
- Add continuous sector transitions, landmarks, refuges, side rooms, and epilogue.

## Feature 5: In-world cube seal focus

- Add proximity prompts, focus camera transition, input suspension, and safe exit.
- Reuse all twelve validators, setup moves, hints, and legal-history behavior.
- Animate cube completion back into the world and apply persistent geometry change.
- Verify retry, alternate solutions, full Solve reversal, and cross-mode isolation.

## Feature 6: Void Wraith AI

- Add patrol paths and deterministic state transitions.
- Add line-of-sight/proximity detection with warning cues and occlusion.
- Add pursuit, last-known-position search, return, capture, and checkpoint recovery.
- Add refuges, slow pursuit, no-chase mode, and deterministic AI fixtures.

## Feature 7: Art, animation, sound, and atmosphere

- Produce original high-resolution sector materials and environmental assets.
- Add animated doors, bridges, lifts, mechanisms, seal light, fog, and particles.
- Add original Wraith visuals with patrol/detect/pursue/search animation states.
- Add local ambience and necessary cue captions with independent volume controls.

## Feature 8: Accessibility, performance, QA, and release

- Add DOM equivalents for canvas state, keyboard-only play, focus, and live regions.
- Add reduced motion, quality controls, pursuit accessibility, and touch sizing.
- Profile and optimize desktop/mobile rendering and state updates.
- Execute the complete campaign/regression matrix and update public documentation.

## Ten post-completion improvement passes

Each pass begins only after the complete initial campaign acceptance criteria pass.

1. **Movement feel:** acceleration, deceleration, sprint feedback, collision slide,
   camera comfort, and input latency.
2. **World readability:** landmarks, signage, sector identity, critical-path
   guidance, and reduced dead ends.
3. **Wraith fairness:** patrol telegraphing, detection tuning, search behavior,
   capture recovery, and accessibility parity.
4. **Seal delight:** focus transition, cube staging, completion effects, world
   reactions, and alternate-solution feedback.
5. **Atmosphere:** lighting composition, fog, particles, environmental animation,
   ambience, and cue balance.
6. **Optional exploration:** side rooms, lore, viewpoints, discoveries, and
   non-blocking cosmetic rewards.
7. **Mobile and touch:** control ergonomics, adaptive resolution, HUD density,
   orientation changes, and thermal/performance behavior.
8. **Accessibility:** keyboard-only campaign, reduced motion, no-chase play,
   captions, contrast, live announcements, and screen-reader state.
9. **Performance and resilience:** hot-loop allocation, buffer reuse, context loss,
   malformed saves, tab suspension, and low-quality mode.
10. **Final release polish:** full regression, first-run clarity, pacing, epilogue,
    documentation, direct-file verification, and deployment evidence.

## Delivery rules

- Every feature track and subtask is represented by a GitHub issue.
- Each bounded implementation issue receives at least one focused pull request.
- Merge and validate in dependency order.
- Do not close a feature issue until all linked subtasks and acceptance criteria pass.
- Do not begin counting the ten improvement passes until the complete first version
  satisfies the PRD release acceptance criteria.
