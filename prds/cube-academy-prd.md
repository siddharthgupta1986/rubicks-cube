# Cube Academy Product Requirements Document

## Product summary

Cube Academy turns the current Rubik's Cube feature dashboard into a bright, modern training game. It gives new players a clear path from first turn to confident solve, while preserving the advanced tools that existing players use.

The product should feel like entering a premium game command deck: the cube is central, the next action is obvious, and every mode has a purposeful place.

## Goals

- Make the first screen feel like a game, not a configuration panel.
- Give players one recommended next action: continue their training.
- Convert the beginner method into a soft-progression campaign.
- Preserve all current play modes and power-user tools without crowding the primary experience.
- Keep the app static, dependency-free, accessible, and usable directly from `index.html`.

## Player experience

### Audience

- Beginners who need a friendly, motivating path to their first solve.
- Returning players who want a focused next challenge.
- Enthusiasts who need speedrun, replay, algorithm, state, and customization tools.

### Core loop

1. Open Cube Academy and select Continue Training.
2. Receive a short chapter briefing with a concrete cube goal.
3. Complete a guided drill using real cube moves.
4. Finish a chapter trial.
5. Earn progress, see the next recommended chapter, and optionally continue into Practice.

### Soft progression

Journey recommends an order but does not lock Practice or Vault. Players can return to completed chapters or explore advanced modes at any time.

## Information architecture

### Journey

Journey is the default home destination. It contains the Academy campaign and shows the recommended next chapter.

The campaign has six chapters:

1. Orientation
2. The White Cross
3. First Layer
4. Middle Layer
5. Last Layer
6. Mastery Trials

Each chapter uses the same predictable sequence: briefing, drill, and trial. Existing Tutor lessons and Missions are reused as the underlying instructional and challenge content.

### Practice

Practice is the focused play hub. It contains:

- Free Cube
- Daily Challenge
- Time Trial
- Algorithm Drills
- Custom Scramble
- Pass and Play

### Vault

Vault is the compact secondary menu for tools and player history. It contains:

- Progress and achievements
- Replays
- Import and export
- Themes and camera controls
- Input help
- Sound and vibration settings
- Reset and data-management actions

## Experience and visual direction

- Product name: Cube Academy.
- Tone: bright modern, premium, tactile, and calm rather than neon arcade or dense SaaS.
- Palette: warm white and ink foundations with the physical cube colors as the expressive accents.
- Home screen: a large cube scene, current rank/progress, and one dominant Continue Training command.
- Navigation: Journey, Practice, and Vault are the only first-level destinations.
- Active session: show a contextual game HUD with objective, current step, move controls, and exit action; hide unrelated utilities.
- Use locally committed bitmap art for Academy backdrops and chapter visuals. Do not add a network dependency.
- Respect `prefers-reduced-motion`; no important state or instruction may depend on animation or color alone.

## Functional requirements

- Introduce explicit UI navigation state for home, Journey, Practice, Vault, and active sessions.
- Persist Academy chapter progress, recommended-next state, and rank locally with malformed-storage recovery.
- Reuse existing local progress, Tutor, Mission, Achievement, and speedrun data where it maps safely.
- Keep all current tools reachable within two navigation actions.
- Keep the 54-sticker model as the only cube-state source of truth.
- Preserve valid shuffle generation, exact Solve reversal, drag-only camera behavior, all six rendered faces, keyboard/gamepad support, and direct-file operation.

## Success criteria

- The first viewport has one visually dominant primary action and no exposed wall of configuration panels.
- A new player can complete Orientation through a clearly labeled Journey flow.
- A returning player sees an accurate recommended next chapter after refresh.
- Every existing feature remains available from Practice or Vault.
- Desktop and 320px mobile views have no horizontal scrolling, clipped controls, or incoherent overlap.
- Keyboard focus order, native controls, status announcements, and reduced-motion behavior remain intact.
- Existing cube and workflow validation checks continue to pass.

## Non-goals

- No accounts, backend, multiplayer networking, or payment systems.
- No change to cube-solving rules or the sticker-state model.
- No removal of existing modes or local player data without an explicit migration/reset path.

## Delivery approach

Implement the Academy in independently mergeable increments. Every child task receives at least one focused pull request, is merged to `main`, and is published to GitHub before its dependent task begins.
