# Next.js + Three.js implementation architecture

## Monorepo target
apps/web (Next.js App Router), apps/studio (Next.js App Router), apps/game (Vite + React Three Fiber) with a proposed Next.js host shell for seamless web deployment; packages/game-core, content, ui, cities, characters, config. Decision: retain Vite game for predictable canvas/HMR while sharing TypeScript components; evaluate moving game into Next.js only with measured benefit.

## Rendering
Three.js, React Three Fiber, Drei, Rapier, Zustand, glTF/GLB, KTX2, Meshopt, baked + dynamic lights, PBR, instancing, LOD, streamed districts, postprocessing presets. No borrowed Rockstar content. Separate simulation from rendering, use fixed-step update and deterministic quest state machine.

## Domain systems
World loader, city manifests, player controller, camera, collision/navmesh, NPC schedules, dialogue, interaction, inventory, quests, character profiles, educational story modes, localization and accessible HUD. Content versioned JSON schema with approval status. Default offline-first; cloud opt-in.

## Technical harness
pnpm + Turborepo; Node 22; TypeScript strict; Vitest for logic; Playwright for browser E2E; GitHub Actions lint/typecheck/test/build; content validation, asset licensing scan, secret detection, accessibility checks and performance budgets. Require reproducible pnpm lockfile and eliminate placeholder test scripts.

## MVP milestones
M0: builds for all three apps, source control templates, baseline CI, original empty city, third-person movement.
M1: Ahmed and Fatimah selection, appropriate attire and interactions, one neighborhood, 10 reviewed missions, quest engine, save/load, optional niyyah.
M2: city packs, approved story-mode engine, Arabic matching, Wudu Hero-inspired sequencing and Mosque Maze-inspired wayfinding (research original licenses first).
M3: learning routes including Path to Imam and Community Educator, 50 missions, accessibility/RTL audit.
M4: invite-only co-op, moderated sharing, multi-city travel, performance and security load tests.

## Definition of done
No unapproved religious claim in public build; no personal data; tests pass in clean CI; assets licensed; low-end and desktop benchmarks documented; accessible alternatives for each interaction; peer review completed.
