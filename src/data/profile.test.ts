import { describe, it, expect } from 'vitest';
import { EDUCATION, EXPERIENCE, RESEARCH_INTERESTS, PUBLICATIONS, PRESENTATIONS, CERTIFICATIONS } from './profile';

describe('profile data counts (matches verified source data)', () => {
  it('has exactly 3 education records', () => {
    expect(EDUCATION).toHaveLength(3);
  });
  it('has exactly 5 experience records', () => {
    expect(EXPERIENCE).toHaveLength(5);
  });
  it('has exactly 8 confirmed research interests', () => {
    expect(RESEARCH_INTERESTS).toHaveLength(8);
  });
  it('has exactly 10 publications', () => {
    expect(PUBLICATIONS).toHaveLength(10);
  });
  it('has exactly 6 presentations', () => {
    expect(PRESENTATIONS).toHaveLength(6);
  });
  it('has exactly 8 certifications', () => {
    expect(CERTIFICATIONS).toHaveLength(8);
  });

  it('never fabricates a research area not in the confirmed taxonomy', () => {
    for (const pub of PUBLICATIONS) {
      for (const area of pub.researchAreas) {
        expect(RESEARCH_INTERESTS).toContain(area);
      }
    }
  });

  it('marks every non-empty publication research-area list as inferred-from-title', () => {
    for (const pub of PUBLICATIONS) {
      if (pub.researchAreas.length > 0) {
        expect(pub.researchAreasSource).toBe('inferred-from-title');
      }
    }
  });
});
