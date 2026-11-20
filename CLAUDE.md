# Dunya — Claude entrypoint
This public repository is an original, constructive, browser-first 3D Muslim life simulator. This phase is **specification and development harness only**. Do not implement gameplay or generate assets until an issue explicitly authorizes it.

## Read in order
1. AGENTS.md, README.md and docs/ROADMAP.md.
2. docs/CLAUDE_EXECUTION_PLAN.md for bounded work and verification.
3. docs/STORY_MODE_EXPANSION.md for sensitive story proposals.
4. docs/ISLAMIC_CONTENT_POLICY.md and docs/CONTENT_REVIEW_AND_ACCEPTANCE.md for release gates.
5. docs/NEXTJS_THREEJS_ARCHITECTURE.md for existing stack decisions.

## Working agreement
- Public repo: no personal information, private records, secrets, private contact details or unpublished personal stories.
- Never treat proposed content as verified Islamic rulings, legal advice or facts about named real organizations.
- Do not copy Rockstar/GTA graphics, code, UI, logos or game assets.
- Keep the three-app architecture: apps/game (Vite + Three.js/R3F), apps/web (Next.js), apps/studio (Next.js); do not migrate frameworks without ADR.
- Inspect files and issues before edits; never overwrite working content blindly.
- Each change should be small, scoped, reversible, documented and independently testable.
- No fabricated CI/build/test results. Report exact commands run and blockers.
- Religious content requires scholar review, legal content requires jurisdictional review, real mosque/city portrayals require local review.
- Avoid blanket accusations or profiling of religious, ethnic, political or professional groups.
- End every work session with: files changed, issues touched, tests actually run, risks, next three tasks.
