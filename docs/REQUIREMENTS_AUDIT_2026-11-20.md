# Dunya requirements audit — 2026-11-20

## Verified findings
- GitHub search returned issues #1–#25, not evidence of implementation.
- Root uses pnpm and Turborepo; game uses Vite/Three.js/R3F; web uses Next.js.
- Game and web lint/test scripts are placeholders.
- Studio package manifest fetch returned 404.
- CI uses `pnpm install --no-frozen-lockfile`.
- No successful build, test run or playable deployment was verified.

## P0 engineering requirements
1. Reconcile actual files, restore three complete app manifests and strict TypeScript configuration.
2. Generate and commit lockfile, enforce frozen install, pin Node/pnpm.
3. Replace placeholder tests/lint with actual ESLint, Vitest, Playwright and smoke tests.
4. Implement content and game-core packages with schema and deterministic state-machine tests.
5. Gate public missions on reviewed Qur'an/Hadith evidence, context, translation rights and qualified approval.
6. Add secret scanning, asset provenance, accessibility and performance checks.

## P1 gameplay requirements
- Character selection: Ahmed and Fatimah, respectful clothing, equal non-ritual opportunities.
- One original city block, accessible third-person movement, deterministic interactions and save migration.
- Consent-based dawah and nonviolent defensive encounters; never punish victims for attacks.
- Wudu certainty-vs-doubt and school-specific differences, evidence notifications and no simulated fatwas.
- Reviewed prayer, tahajjud and learning minigames; private voice data.
- Mosque map and city packs require local cultural review and rights for assets.
- Halal advertising and donations require compliance and no worship monetization.

## Acceptance gates
Clean checkout builds three apps; real CI tests; only approved religious content ships; no secrets/personal data; licensed assets; keyboard/gamepad/captions/reduced motion; benchmarked FPS/loading; no offensive combat or coerced dawah.

## Risk register
IP/trademarks; scholarly disagreement; civil-rights safeguards; child safety; religious-data privacy; payment regulation; third-party map and audio licenses. No claim of a playable game until smoke tests pass.
