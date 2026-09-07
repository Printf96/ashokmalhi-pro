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

  it("contains every title the Home page's Selected Publications section expects", () => {
    // Kept in sync with HomePage.tsx's SELECTED_PUBLICATION_TITLES —
    // if a title here drifts (typo, rewording), that lookup would
    // silently drop the entry instead of showing an error, so this
    // test makes the mismatch loud instead.
    const selectedTitles = [
      'A Study on Responsible AI Awareness and Learning Engagement in Higher Education: The Mediating Roles of Trust in AI, AI Literacy, AI Usage Self-Efficacy, and Human–AI Collaboration',
      'Green by Design AI in Fashion Retail and the Rise of the Conscious Consumer',
      'Exploring Narrative Constructions of Market Sentiment: A Systematic Literature Review of Media Influence on Financial Behaviors and Economic Outcomes',
      "A Study on Digital Intelligence and Influencer Marketing for Sustainable Diversification of India's Retail Economy: A Qualitative Study",
    ];
    const titles = PUBLICATIONS.map((p) => p.title);
    for (const t of selectedTitles) {
      expect(titles).toContain(t);
    }
  });
});
