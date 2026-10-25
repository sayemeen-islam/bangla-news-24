<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Bangla News 24

Bengali-language news portal built with Next.js 16 App Router, React 19, TypeScript, Tailwind 4, and daisyUI.

## Commands

- `npm run dev`, `npm run build`, `npm start`
- `npm run lint` runs the ESLint 9 CLI directly; `next lint` no longer exists.
- `npx tsc --noEmit` is the typecheck (there is no `typecheck` script).
- No test suite, CI, or formatter is configured. Verify with lint + tsc, plus `npm run build` when routing or config changes.
- On PowerShell in this checkout, `npm`/`npx` shims may be blocked by execution policy; use `npm.cmd` / `npx.cmd`.

## Architecture

- All code lives in `src/`; `@/*` maps to `src/*`.
- News data comes from the remote API `https://news-api-v2.vercel.app`, not from MongoDB. Server components fetch it and read the `data` field: `/api/news/sections`, `/api/categories`, `/api/news/most-read`, `/api/category/:slug`, `/api/article/:id`.
- The category route is `[categoryId]`, but it expects a category **slug** (nav links pass `category.slug`), not a topic ID.
- Auth is Better Auth with the MongoDB adapter (`src/lib/auth.ts`, database `bangla_news_24`); the catch-all handler is `src/app/api/auth/[...all]/route.ts` and the browser client is `src/lib/auth-client.ts`.
- Route protection is in `src/proxy.ts` — do not add `middleware.ts`; Next 16 renamed the convention. It redirects unauthenticated requests for `/profile` and `/news/:path` to `/signin`.
- `.env` is gitignored and required for auth: `MONGODB_CLIENT_URI`, `BETTER_AUTH_URL`, `BETTER_AUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`. Keep server credentials out of client components.

## Next.js 16 notes

- Dynamic route `params` are Promises: `const { id } = await params`.
- `LayoutProps<"/">`, `PageProps<"/route/[id]">`, etc. are generated global types. Run `npx next typegen` if they are missing after adding routes.
- React Compiler is enabled in `next.config.ts`; don't add manual memoization unless profiling shows a need.
- `next/image` remote hosts must be listed in `next.config.ts` `images.remotePatterns` (currently only BBC iChef); add a pattern before using a new image host.

## Conventions

- UI copy is Bengali; keep new user-facing text consistent. Mixed English labels/placeholders already exist.
- Styling is Tailwind 4 plus daisyUI, loaded in `src/app/globals.css` via `@plugin "daisyui"`; the theme is set with `data-theme` on `<html>`.
- `CLAUDE.md` only imports this file, so update `AGENTS.md` rather than duplicating guidance.
