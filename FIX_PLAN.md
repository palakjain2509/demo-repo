## Fix Plan

Date: 2025-08-13
Source: AUDIT_REPORT.md

### P0 – Critical (address first)

- [ ] Package management consistency
  - Affected: `/package-lock.json`, `/package.json`, `/pnpm-workspace.yaml`
  - Changes:
    - Remove `/package-lock.json` (keep `pnpm-lock.yaml` to avoid CI ambiguity).
    - In `package.json`, set a stable `packageManager` (e.g., `"pnpm@10.x"`, not a pre-release).
    - In `pnpm-workspace.yaml`, remove `"worker"` entry or add the missing `worker/` package.
  - Acceptance: CI (Vercel) installs via pnpm with a single lockfile; no workspace warnings.

### P1 – Important (quality, SEO, correctness)

- [ ] Consolidate sitemap endpoint
  - Affected: `src/app/api/sitemap.xml/route.ts`, `src/app/sitemap.xml/route.ts`
  - Changes: Delete `src/app/api/sitemap.xml/route.ts`. Keep `src/app/sitemap.xml/route.ts` as canonical `/sitemap.xml`.
  - Acceptance: Only `/sitemap.xml` route exists and renders sitemap.

- [ ] Fix metadata warnings (viewport/themeColor)
  - Affected: `src/lib/seo/utils.ts`, `src/app/layout.tsx` (and page files only if truly per-page overrides are needed)
  - Changes:
    - In `src/lib/seo/utils.ts` remove `viewport` and `themeColor` from returned `Metadata`.
    - In `src/app/layout.tsx`, add:
      - `export const viewport = { width: 'device-width', initialScale: 1 };`
      - `export const themeColor = '#2563eb';` (or supply via `generate-viewport` APIs if needed)
  - Acceptance: `next build` no longer logs unsupported metadata warnings.

- [ ] Replace raw <img> with Next Image
  - Affected:
    - `src/components/MGUIComponent/Card.tsx` (lines ~75-84)
    - `src/components/MGUIComponent/FeatureCard.tsx` (lines ~127-136)
    - `src/components/ui/MyGetsComponents.tsx` (line ~264)
  - Changes: Use `next/image` with `alt`, `width`+`height` (or `fill`) and `sizes`. Example:
    - `import Image from 'next/image'` and replace `<img src={image} alt={title} />` with `<Image src={image} alt={title} width={600} height={400} sizes="(max-width:768px) 100vw, 50vw" />`.
  - Acceptance: Lint passes `@next/next/no-img-element`; CLS stable for those components.

- [ ] Fix internal navigation using Link
  - Affected: `src/app/web-vitals/page.tsx` (line ~122)
  - Changes: Replace `<a href="/">` with `<Link href="/">...</Link>` and import `Link` from `next/link`.
  - Acceptance: Lint passes `@next/next/no-html-link-for-pages`.

- [ ] Google Analytics integration correctness
  - Affected: `src/app/layout.tsx`, `next.config.mjs`
  - Changes:
    - Replace inline GA scripts with `next/script` using `process.env.NEXT_PUBLIC_GA_ID`:
      - `<Script src={\`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}\`} strategy="afterInteractive" />`
      - `<Script id="ga" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}</Script>`
    - In `next.config.mjs` CSP, plan to remove `'unsafe-inline'` and `'unsafe-eval'` from `script-src` after switching to non-inline scripts (or adopt nonce/hash strategy).
  - Acceptance: Lint passes `next/next/next-script-for-ga`; GA events fire in prod; CSP tightened without breaking GA.

- [ ] Enforce `NEXT_PUBLIC_SITE_URL`
  - Affected: Vercel Project Settings (Env Vars), optionally `src/lib/seo/constants.ts` or `src/app/layout.tsx` runtime check
  - Changes: Ensure `NEXT_PUBLIC_SITE_URL` is set for all environments. Optionally, in production throw a clear error if missing.
  - Acceptance: Canonicals/OG URLs correct in HTML; no undefined site URL usage.

- [ ] Remove unused/incorrect config refs
  - Affected: `next.config.mjs`
  - Changes: In `experimental.optimizePackageImports`, remove `@radix-ui/react-icons` if not actually used/installed.
  - Acceptance: Config reflects only used packages; no dead references.

- [ ] Lint hygiene (targeted high-signal fixes)
  - Affected: Many files across `src/app/**` and `src/components/**`
  - Changes:
    - Remove unused imports/variables flagged by `@typescript-eslint/no-unused-vars` (e.g., `HeroSection.tsx` unused `Image`, `Header.tsx` unused `aboutUsItems`, etc.).
    - Resolve `no-unescaped-entities` by escaping (`&apos;`, `&quot;`) or interpolating strings.
    - Reduce `any` in SEO/Perf utilities where straightforward (e.g., typed event/data objects).
  - Acceptance: `pnpm lint` returns 0 errors for the above rule groups.

- [ ] Prune clearly unused dependencies
  - Affected: `package.json`
  - Changes: If unused in code, remove:
    - `@mdx-js/loader`, `@mdx-js/react`, `@next/mdx`, `@next/third-parties`, `framer-motion`, `remark-toc`, `@hookform/resolvers`.
    - Consider removing direct `caniuse-lite` pin and rely on Next’s managed versions.
  - Acceptance: `pnpm install` clean; `depcheck` no longer flags them; app builds and basic flows OK.

### P2 – Nice-to-have (polish, DX, perf)

- [ ] Add helpful scripts
  - Affected: `package.json`
  - Changes:
    - "type-check": "tsc -p tsconfig.json --noEmit"
    - "lint:fix": "next lint --fix"
    - "format": "prettier --write ."
    - "analyze": "ANALYZE=true next build"
  - Acceptance: Devs can run these locally and in CI.

- [ ] Unify image wrappers
  - Affected: `src/components/ui/OptimizedImage.tsx`, `src/components/seo/AdvancedImageOptimizer.tsx`, `src/components/seo/PerformanceOptimizer.tsx`
  - Changes: Deduplicate `OptimizedImage` variants into a single utility; ensure consistent props and alt handling.
  - Acceptance: Single canonical image helper; no duplicate components.

- [ ] Performance/code-splitting
  - Affected: Heavy routes/components (`/dashboard`, charts, large UI bundles)
  - Changes: Use `next/dynamic` for non-critical/above-the-fold heavy components (e.g., Recharts).
  - Acceptance: Reduced First Load JS; improved CWV on marketing pages.

- [ ] Tighten security headers
  - Affected: `next.config.mjs`
  - Changes: After GA script migration, remove `'unsafe-inline'`/`'unsafe-eval'` from `script-src`; consider nonce/hash.
  - Acceptance: CSP passes scanners; site functionality intact.

- [ ] Re-enable lint on build (when green)
  - Affected: `next.config.mjs`
  - Changes: Set `eslint.ignoreDuringBuilds` to `false` once lint issues are resolved.
  - Acceptance: CI fails on new lint regressions.

- [ ] Optional: remove unused next-sitemap config
  - Affected: `next-sitemap.config.js`
  - Changes: If not using `next-sitemap`, remove file to avoid confusion; or install/configure `next-sitemap` and wire to scripts.
  - Acceptance: No dangling/unreferenced SEO config.

---

## Execution order
1) P0 items (package manager + workspace) to stabilize CI.
2) P1 items (sitemap, metadata, images, GA, lint hygiene, deps).
3) P2 items (scripts, perf, security hardening, DX polish).

## Verification checklist
- [ ] `pnpm install` (CI) with single lockfile; no workspace warnings
- [ ] `pnpm run build` has zero metadata warnings
- [ ] `pnpm run lint` passes (or only allowed warnings remain)
- [ ] Critical pages load with optimized images and correct GA tracking
- [ ] Lighthouse/CWV show improvement on marketing pages