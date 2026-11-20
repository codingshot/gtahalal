# Islamic Defender implementation plan — Next.js / Three.js

## Packages
- packages/content/defender: versioned scenario JSON with sources, dialogue and reviewed safety policy.
- packages/game-core/defender: pure deterministic state machine (dialogue, escalation, disengage, threat, safety, outcome).
- apps/game: React Three Fiber NPC conversation/table interactions, camera-safe de-escalation sequences, non-graphic impact and instant overlay.
- apps/studio: Next.js approval interface for scholar/legal/content review; unapproved scenarios excluded from public builds.
- apps/web: documentation and learning module browser.

## Phases
P0 schemas, test fixtures, religious/legal review workflow, no gameplay release.
P1 Dawah table scene and dialogue with respectful questions, exit option and knowledge links.
P2 de-escalation branches and safety overlays; accessibility alternative without physical simulation.
P3 optional non-graphic immediate-threat self-protection simulation; proportionality and stop-condition tests.
P4 educational analytics opt-in only, localization and local cultural review.

## Engine requirements
State machine transitions: idle -> conversation -> disagreement -> hostile_words -> disengage OR immediate_threat -> escape/help OR minimum_protection -> safe_end. Attack input disabled outside approved immediate-threat simulation. Any deliberate harm to innocent NPC triggers pause/restart; accidents invoke review and repair, not religious condemnation. All rule labels sourced, reviewed and versioned.

## Quality gates
Vitest rule unit tests, Playwright dialogue and overlay flows, schema validation, source URL checks, i18n/RTL, accessibility, asset provenance and no personal data. Do not launch until reviewed by qualified Islamic scholars and local legal experts.
