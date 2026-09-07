# SEO / AEO / GEO / AIO — Provision Notes

This file exists as the agreed placeholder: the terminology and a home
for each pillar are in place; **no optimization tactics beyond basic
technical SEO have been implemented yet** — that work starts once
specific requirements are given for each pillar.

## Definitions

- **SEO** (Search Engine Optimization) — ranking pages in traditional
  search results (Google, Bing).
- **AEO** (Answer Engine Optimization) — earning direct answers:
  featured snippets, voice assistant responses.
- **GEO** (Generative Engine Optimization) — earning citations inside
  generative AI responses (ChatGPT, Perplexity, Google AI Overviews,
  etc.).
- **AIO** (AI Optimization) — the broad layer covering discoverability
  and correct representation across all AI platforms, encompassing
  GEO and more (e.g., AI-crawled entity data, `llms.txt`-style
  provisions).

## What already exists (technical + on-page basics)

- `src/components/seo/SeoHead.tsx` — per-route `<title>`, meta
  description, canonical URL, Open Graph, Twitter Card, and JSON-LD
  injection. Every route uses it.
- JSON-LD: `Person`, `WebSite`, `ProfilePage`, `BreadcrumbList`
  (`src/lib/seo.ts`) — sourced only from verified data
  (`src/lib/socialConfig.ts`, `src/data/profile.ts`).
- `public/robots.txt` and `public/sitemap.xml` — basic technical SEO
  crawlability provisions covering all 9 routes.
- Consistent entity naming across the site (`Dr. Ashok Malhi`,
  `Ashok Malhi`, `Ashok Singh Malhi`) so search/AI systems can resolve
  one entity.

## Not yet implemented — pending specific requirements

- **On-page SEO**: keyword-targeted copy, heading structure audits,
  internal linking strategy, image alt-text audit beyond the profile
  photo.
- **Technical SEO**: performance/Core Web Vitals budget, structured
  `hreflang` (not needed unless multi-locale), server-side rendering
  or prerendering for crawlers that don't execute JS, sitemap
  automation (currently hand-maintained).
- **AEO**: FAQ-style structured content, `FAQPage`/`QAPage` JSON-LD,
  content restructured to directly answer likely queries.
- **GEO / AIO**: citation-friendly content patterns, a possible
  `llms.txt`, explicit entity/fact consistency pass for AI-answer
  accuracy, monitoring presence in AI Overviews / answer engines.

Bring the specific pillar and requirement when ready, and this file's
"not yet implemented" list becomes the work order.
