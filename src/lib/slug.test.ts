import { describe, it, expect } from 'vitest';
import { slugify } from './slug';
import { PUBLICATIONS } from '@/data/profile';

describe('slugify', () => {
  it('produces a unique id for every publication title (used as anchor ids on the Publications page)', () => {
    const slugs = PUBLICATIONS.map((p) => slugify(p.title));
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('produces a non-empty, lowercase, hyphen-safe id', () => {
    const slug = slugify('A Study on Responsible AI: Trust & Literacy');
    expect(slug).toBe('a-study-on-responsible-ai-trust-literacy');
  });
});
