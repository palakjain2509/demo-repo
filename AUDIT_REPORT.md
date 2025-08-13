## Next.js Project Audit

Date: 2025-08-13

### Executive summary
- Build status: next build succeeds (Next.js 15.4.3, React 19).
- TypeScript: no type errors found with tsc.
- ESLint: many errors/warnings across app and components (see details).
- Images: several raw <img> usages instead of Next.js <Image>; otherwise image config is generally sound.
- SEO/metadata: duplicate sitemap routes; unsupported metadata keys (viewport/themeColor) causing build warnings; inline GA script; NEXT_PUBLIC_SITE_URL referenced but not enforced.
- Dependencies: multiple likely-unused deps; duplicate lockfiles; workspace points to non-existent package.
- Vercel: build should deploy, but flagged risks may affect SEO and DX.

---

### Scripts audit
Current scripts (package.json):
- dev: next dev
- build: next build
- start: next start
- lint: next lint
- build:worker: opennextjs-cloudflare
- preview: opennextjs-cloudflare && wrangler dev
- cf-typegen: wrangler types --env-interface CloudflareEnv env.d.ts

Findings
- Missing convenience/CI scripts: type-check, lint:fix, format, analyze, test.
- Cloudflare scripts are fine locally, but irrelevant to Vercel. Keep, but ensure Vercel uses only Next build.

Recommendations
- Add helpful scripts:
  - "type-check": "tsc -p tsconfig.json --noEmit"
  - "lint:fix": "next lint --fix"
  - "format": "prettier --write ."
  - "analyze": "ANALYZE=true next build"
- Consider removing or scoping Cloudflare scripts in CI to avoid confusion in Vercel pipelines.

---

### Dependency audit
Tooling used: depcheck

Likely unused dependencies
- @hookform/resolvers
- @mdx-js/loader, @mdx-js/react, @next/mdx (no MDX usage detected; pageExtensions allow md/mdx but no files)
- @next/third-parties
- caniuse-lite (pinned explicitly; Next/swc manages browserslist data)
- framer-motion (no imports found)
- remark-toc

Notes
- DevDeps flagged by depcheck as unused (eslint, typescript, postcss, turbo) are used via scripts/CLIs; keep.
- Confirm usage before removal if you have pending branches. If unused, remove and run full build + e2e sanity.

Lockfiles/workspace
- Both pnpm-lock.yaml and package-lock.json exist. Keep only one lockfile (prefer pnpm) to avoid CI ambiguity.
- packageManager is pinned to pnpm@10.0.0-rc.2 (pre-release). Prefer a stable pnpm (e.g., 9.x or current stable 10.x) for CI reliability.
- pnpm-workspace.yaml lists "worker", but no /worker directory exists. Remove or create the package to avoid workspace confusion.

---

### TypeScript status
- tsc: OK (noEmit). No compile-time TS errors detected.

---

### ESLint status (key findings)
Tooling used: next lint (eslint 9, config next/core-web-vitals & next/typescript)

Errors/warnings patterns
- React/no-unescaped-entities: many content strings need proper escaping or JSX string braces.
- @typescript-eslint/no-unused-vars: multiple unused imports/vars across marketing/platform pages and components.
- @typescript-eslint/no-explicit-any: many any usages in SEO/perf components and libs.
- @next/next/no-img-element: raw <img> in UI components.
- @next/next/no-html-link-for-pages: internal anchor used instead of Link in src/app/web-vitals/page.tsx.
- next/google-font-preconnect and next/next-script-for-ga warnings in layout.tsx (use <Script> and confirm preconnect usage).
- Assorted react-hooks/exhaustive-deps warnings.

Recommendation
- Prioritize fixing high-signal rules first: no-img-element, no-html-link-for-pages, no-unused-vars.
- For content pages, either escape entities (&apos;, &quot;) or wrap strings in braces.
- Replace inline GA script with next/script.
- Add or refactor types to reduce any usage in SEO/performance utilities.

---

### Images audit
Configuration
- next.config.mjs images:
  - domains: ["mygets.net"], formats: ["image/avif", "image/webp"], custom deviceSizes/imageSizes. OK for local assets under /public.

Findings
- next/image usage: present in many places (e.g., Header, Footer, SolutionsContent). Good.
- Raw <img> usage detected (should convert to next/image for optimization):
  - src/components/MGUIComponent/Card.tsx
  - src/components/MGUIComponent/FeatureCard.tsx
  - src/components/ui/MyGetsComponents.tsx
  - public/google-verification.html (static; acceptable, but not part of React tree)
- Alt attributes: present on the raw <img> instances, but next/image still recommended for LCP/bandwidth.

Recommendations
- Replace raw <img> with next/image in React components; ensure width/height or sizes are provided for CLS control.
- Keep using custom wrappers (OptimizedImage/AdvancedImage) but ensure they render next/image and always pass alt.
- If remote images beyond mygets.net are needed, add to images.domains.

---

### SEO and metadata
Findings
- Duplicate sitemap routes:
  - app route: src/app/sitemap.xml/route.ts
  - API route: src/app/api/sitemap.xml/route.ts
  Keep only the root /sitemap.xml route; remove the API variant to avoid confusion.
- Unsupported metadata keys (build warnings across many routes):
  - viewport and themeColor are configured inside Metadata via generateMetadata (src/lib/seo/utils.ts). Next 15 expects these to be exported via export const viewport.
- Inline GA in src/app/layout.tsx; linter recommends next/script.
- NEXT_PUBLIC_SITE_URL is used in a few places but not validated at runtime; recommended to enforce in production.
- next-sitemap.config.js exists but appears to be a default SEO config, not used by next-sitemap package; actual sitemap handled via app route.

Recommendations
- Move viewport/themeColor out of Metadata:
  - Remove viewport/themeColor from generateMetadata in src/lib/seo/utils.ts.
  - Define export const viewport at app-level (and only per-page if you need page-specific viewport/theme).
- Remove /src/app/api/sitemap.xml/route.ts and keep /src/app/sitemap.xml/route.ts as the canonical sitemap endpoint.
- Replace inline GA scripts with next/script and provide GA ID via NEXT_PUBLIC_GA_ID.
- Ensure NEXT_PUBLIC_SITE_URL is set in all environments (Vercel Project Settings → Environment Variables) and consider failing fast if missing in prod.

---

### Accessibility
Findings
- Many no-unescaped-entities warnings on content pages; escaping improves HTML validity/readability for assistive tech.
- <a href="/"> used once instead of <Link>; affects client-side routing and focus management.
- Some custom image wrappers render <picture> + <Image>; ensure alt always present and decorative images use empty alt.

Recommendations
- Fix entities and internal navigation Link usage.
- Audit interactive elements for keyboard focus order and ARIA where not covered by design system.

---

### Performance
Observations
- First Load JS shared by all: ~329 kB; vendor chunk ~327 kB. This is heavy for marketing pages.
- Fluent UI and Radix UI add weight; consider selective imports and dynamic loading for non-critical UI.

Recommendations
- Code-split heavy sections/components (e.g., charts, dashboards) with dynamic() and suspense.
- Keep optimizePackageImports but ensure it points only to actually used packages (remove @radix-ui/react-icons if unused).
- Consider next/script strategy="afterInteractive"/lazyOnload for non-critical scripts.
- Monitor Web Vitals (already implemented) and set budgets.

---

### Vercel deployment risks/breakers
- Multiple lockfiles (npm and pnpm). Action: remove package-lock.json and commit pnpm-lock.yaml.
- pnpm pre-release in packageManager. Pin a stable pnpm version for reproducible CI.
- Workspace references missing "worker" package. Either create /worker or remove from pnpm-workspace.yaml to avoid workspace resolution edge cases.
- Metadata warnings will not break deploy, but fix by moving viewport/themeColor to export const viewport to keep builds clean.
- Service Worker registration (/public/sw.js) is fine on Vercel static hosting; verify correct scope and caching to avoid stale HTML.

---

### Concrete next steps
1) Clean up package management
- Remove package-lock.json; keep pnpm-lock.yaml.
- Pin packageManager to a stable pnpm.
- Fix pnpm-workspace.yaml (remove "worker" or add the package).

2) Fix metadata warnings
- Remove viewport/themeColor from src/lib/seo/utils.ts generateMetadata.
- Add export const viewport in src/app/layout.tsx (and only where required per page).

3) Consolidate sitemap endpoint
- Remove src/app/api/sitemap.xml/route.ts; keep src/app/sitemap.xml/route.ts.

4) Lint fixes (high priority)
- Replace raw <img> with next/image in: MGUIComponent/Card.tsx, MGUIComponent/FeatureCard.tsx, ui/MyGetsComponents.tsx.
- Replace internal <a href="/"> with <Link> in src/app/web-vitals/page.tsx.
- Address no-unescaped-entities in content pages (escape or use string braces).
- Remove unused vars/imports flagged across pages/components.

5) GA and fonts
- Use next/script for GA and pass NEXT_PUBLIC_GA_ID.
- Verify font preconnect warnings are addressed (they are present; re-run lint after changes).

6) Dependency pruning
- Remove unused deps listed above if confirmed unused; re-run build and basic app flows.

7) Performance
- Defer heavy components with dynamic imports on marketing pages.
- Continue monitoring with Web Vitals endpoint; add budgets to CI if desired.

---

### Artifact references
- Next config: next.config.mjs (images/domains, CSP, experiments, eslint.ignoreDuringBuilds=true)
- TS config: tsconfig.json (strict, bundler resolution, paths @/* → src/*)
- ESLint: eslint.config.mjs (next/core-web-vitals, next/typescript)
- Sitemaps: src/app/sitemap.xml/route.ts and src/app/api/sitemap.xml/route.ts (remove API one)
- Image assets: public/images/**
- Raw <img> files: src/components/MGUIComponent/Card.tsx, FeatureCard.tsx, ui/MyGetsComponents.tsx
- SEO utils injecting viewport/themeColor: src/lib/seo/utils.ts
- GA inline scripts: src/app/layout.tsx

---

### Final note
This report captures current state from automated checks (install, type check, lint, depcheck, production build) and targeted file scans. Apply the recommended edits and re-run lint/build to validate a clean baseline before deployment to Vercel.