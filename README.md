# ashokmalhi.pro

Fresh React + TypeScript + Vite site for Dr. Ashok Malhi's official profile
(`ashokmalhi.pro`). Independent project — separate from the academic
website repo.

## Stack

- React 18 + TypeScript, Vite, React Router
- react-helmet-async for per-route SEO + JSON-LD
- Vitest for tests, ESLint for linting
- No backend yet — the contact form composes a `mailto:` to the verified
  address; social/contact links are data-driven from
  `src/lib/socialConfig.ts` (the one place to update any link)

## Develop

```
npm install
npm run dev       # http://localhost:5173
npm run typecheck
npm run lint
npm run test
npm run build
```

## Deployment plan

localhost → GitHub → Render → `ashokmalhi.pro` (not yet pushed/deployed).
