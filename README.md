# Dunya 🌍

**An original, open-source, browser-first Muslim life simulation about learning, service, ethical choices and building better institutions.**

> **Status: early specification and monorepo scaffold.** No playable release, passing CI or completed religious content review has been verified. See [current audit](docs/REQUIREMENTS_AUDIT_2026-11-20.md) and [engineering blocker #26](https://github.com/codingshot/gtahalal/issues/26).

## Start here
- [Contributor guide by role](docs/START_HERE.md)
- [Claude agent instructions](CLAUDE.md)
- [Roadmap](docs/ROADMAP.md) and [architecture ADR](docs/ADR-001-THREE_APP_ARCHITECTURE.md)
- [Main story campaign](docs/MAIN_CAMPAIGN_WORLD_BIBLE.md) and [industry requirements](docs/INDUSTRY_CAMPAIGN_REQUIREMENTS.md)
- [Islamic source and content review](docs/CONTENT_REVIEW_AND_ACCEPTANCE.md) and [source ledger](docs/ISLAMIC_SOURCE_LEDGER.md)
- [Open issues](https://github.com/codingshot/gtahalal/issues)

## Intended stack
| Workspace | Purpose | Stack |
|---|---|---|
| apps/game | Browser-based 3D world | Vite, React, Three.js, React Three Fiber |
| apps/web | Landing/community | Next.js |
| apps/studio | Editorial review | Next.js |
| packages/content | Future reviewed missions and city packs | TypeScript/JSON |
| packages/game-core | Future deterministic quest state | TypeScript |

**Known gaps:** Studio manifest not found in last audit, placeholder lint/test scripts and non-frozen CI install. The commands below are intended, **not verified**:

```sh
corepack enable
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Contribute
Read [CONTRIBUTING.md](CONTRIBUTING.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), [SECURITY.md](SECURITY.md), and [AGENTS.md](AGENTS.md). Propose focused work using issue templates. Current mandate: documentation and harness improvements before gameplay logic.

## Principles
Constructive, nonviolent gameplay; no coercive dawah or divine-reward scoring; exact Qur'an and Sunnah citations with qualified scholarly review; respect for all innocent people and houses of worship; original licensed assets, not Rockstar/GTA material; no personal information in this public repository.

[Full product requirements in Notion](https://app.notion.com/p/41ec1f4ba97e81d8b38eec78a7909e74).
