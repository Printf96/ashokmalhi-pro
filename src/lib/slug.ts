/** Deterministic kebab-case id derived from a publication title, used
 * only for in-page anchor navigation (Home's "Selected Publications" →
 * the matching entry on the full Publications page) — not a database
 * slug, and not a new route. */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}
