# ADR-001 — Three-app TypeScript monorepo

Status: Proposed, pending engineering validation.

## Context
Browser-first, original 3D game with a public landing/community site and an editorial studio. Avoid mixing unreviewed religious content with public runtime. The repo currently uses pnpm/Turborepo and partially scaffolded apps.

## Decision
- apps/game: Vite + React + Three.js/React Three Fiber, independent canvas lifecycle.
- apps/web: Next.js App Router for landing, contributor docs and discovery.
- apps/studio: Next.js App Router for future authenticated review and mission editorial workflows.
- packages/content: versioned source-reviewed content, no public export of unapproved material.
- packages/game-core: future pure deterministic logic, separately tested.
- packages/ui/config: shared accessible components and tooling where justified.

## Consequences
Three deployables add build complexity but keep graphics performance and editorial boundaries isolated. Do not migrate game to Next.js or merge apps without measured trade-offs and a new ADR.

## Validation before implementation
Restore missing studio manifest, commit lockfile, replace placeholder scripts, test all three builds, measure bundle and startup costs. No verified build is claimed by this ADR.
