# Dunya

An original, open-source, browser-first 3D game about learning, service, ethical choices, and community. Former concept name: GTA HALAL; **do not use Rockstar IP or assets**.

## Monorepo
- `apps/game` — Three.js / React Three Fiber playable client
- `apps/web` — Next.js landing and contributor site
- `apps/studio` — Next.js mission editor and review portal
- `packages/game-core` — quest state and gameplay contracts
- `packages/content` — reviewed missions and city packs

## Quick start
Requires Node.js 22+ and pnpm 9+.

```sh
corepack enable
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
```

Early scaffold: do not claim a playable game until tested. [Product spec](https://app.notion.com/p/41ec1f4ba97e81d8b38eec78a7909e74).

## Safety
No violence, gambling, illicit activities, divine-reward scoring, unreviewed religious claims, or personal data in this public repository. See `CONTRIBUTING.md` and `AGENTS.md`.
