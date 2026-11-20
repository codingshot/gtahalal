# Visual engineering backlog and truthful status

## Completed in repository source
- Original procedural preview in apps/game/src/WorldPreview.tsx with simple façade geometry, road, placeholder Ahmed/Fatimah silhouettes, orbit camera, lighting, fog and quality toggle.
- apps/game/src/main.tsx mounts preview.

## Not yet verified
No clean pnpm install, TypeScript build, GPU rendering screenshot, FPS profiling, deployed preview or original mockup parity test has been run in this task. Geometric placeholders are NOT photorealistic characters.

## Next engineering milestones
V0: verify clean build, lint/test scripts, studio manifest and CI; inspect preview at desktop/mobile.
V1: add asset manifest and reference-image ingestion contract, original placeholder GLB character loader with robust fallback.
V2: third-person controller, ground collision, camera collision, touch/gamepad accessibility and movement animations.
V3: rigged adult character art, layered modest wardrobe, facial rigs, material calibration and LOD.
V4: one fully authored neighborhood, modular building kit, streaming and performance profiles.
V5: lighting/time of day, weather, realistic vehicles and NPC schedules after profiling.
V6: screenshot regression against supplied original Dunya mockups, character closeups and licensed assets.

## Engineering caveats
Do not call a procedural preview GTA-level. Avoid loading unlicensed models. No religious animation should ship without review. Use desktop/mobile measurable benchmarks rather than broad fidelity promises.
