/**
 * VERIFIED PROFILE DATA ONLY.
 *
 * Ported from the AshokMalhi-Academic-Website project's verified seed
 * data (server/src/seed/data.ts) — every value here was explicitly
 * supplied by the user across the original brief and the "Complete
 * Academic Knowledge & Content Data Package v1.0" / "Academic Profile
 * Data Package v2.0". This is a static content file (this project has
 * no database) rather than a DB seed, but the same non-fabrication
 * rule applies: do NOT add journals, DOIs, publishers, author lists,
 * abstracts, degree specializations/thesis titles, consulting clients,
 * or presentation collateral that were not explicitly verified. When
 * new verified information arrives, extend these arrays — never guess
 * intermediate values to "complete" a record.
 */

export const PERSON = {
  // Superseded on the About page by the affiliation-level "Lovely
  // Professional University" per request — kept here only because
  // it's still the verified Google Scholar profile field.
  department: 'Mittal School of Business',
  // Supplied verbatim for About-page/Google-entity/LinkedIn-bio use.
  shortBio:
    'Dr. Ashok Malhi is an academic researcher, consultant, and Assistant Professor at Lovely Professional University, India, specializing in Artificial Intelligence, IoT, Machine Learning, Blockchain, FinTech, Digital Marketing, Data Analytics, Technology Adoption, and Sustainability. His professional background combines academic research with experience in banking, management, consulting, and business development. He is also the owner of Aakhetak.com, Printf.co.in, ViralBuzz.co.in, and Nobledon.in, reflecting his interests in technology, FinTech, digital transformation, sustainability, entrepreneurship, and digital platforms.',
  professionalPositioning:
    'Dr. Ashok Malhi is an academic researcher and educator working at the intersection of emerging technologies, business, digital transformation, and technology adoption.',
  // Provisional pending the user's explicit confirmation/replacement.
  emailIsProvisional: true,
  scholarMetrics: {
    citations: 23,
    hIndex: 2,
    i10Index: 1,
    asOf: '2026-09-06',
    source: 'google-scholar' as const,
  },
  technicalSkills: [
    'MS Access',
    'Oracle 8i',
    'SPSS v21',
    'SmartPLS v4.0',
    'Tableau',
    'Python',
    'SQL',
    'HTML/CSS',
    'C/C++',
    'Visual Basic',
  ],
  researchSkills: [
    'Data Analysis',
    'Statistical Modeling',
    'Qualitative Research',
    'Academic Publishing',
    'Literature Review',
    'SEM Analysis',
  ],
  softSkills: [
    'Leadership',
    'Public Speaking',
    'Problem Solving',
    'Team Management',
    'Academic Writing',
    'Mentoring',
    'Project Management',
  ],
  specializations: [
    'AI in Business',
    'IoT Applications',
    'Blockchain Technology',
    'Digital Banking',
    'Innovation Management',
    'Sustainable Development',
  ],
  languages: [
    { name: 'English', proficiency: null as string | null },
    { name: 'Hindi', proficiency: null as string | null },
    { name: 'Punjabi', proficiency: null as string | null },
    { name: 'German', proficiency: 'Basic' },
  ],
};

export interface EducationItem {
  degree: string;
  fieldOfStudy: string | null;
  institution: string;
  institutionCountry: string;
  endYear: number;
  grade: string | null;
  gradeLabel: string | null;
  provenanceNote: string | null;
  order: number;
}

export const EDUCATION: EducationItem[] = [
  {
    degree: 'PhD',
    fieldOfStudy: null,
    institution: 'Sharda University',
    institutionCountry: 'India',
    endYear: 2024,
    grade: null,
    gradeLabel: null,
    provenanceNote:
      'Completion year shown here (2024) follows the official personal website. LinkedIn lists this degree as 2019–2023. This discrepancy has not been resolved and is flagged for confirmation.',
    order: 0,
  },
  {
    degree: 'PGDM',
    fieldOfStudy: 'Marketing & IT',
    institution: 'IMS Ghaziabad',
    institutionCountry: 'India',
    endYear: 2011,
    grade: '6.77',
    gradeLabel: 'CGPA',
    provenanceNote: null,
    order: 1,
  },
  {
    degree: 'BCA',
    fieldOfStudy: null,
    institution: 'IPEM Ghaziabad',
    institutionCountry: 'India',
    endYear: 2007,
    grade: '64.46%',
    gradeLabel: 'Percentage',
    provenanceNote: null,
    order: 2,
  },
];

export interface ExperienceItem {
  role: string;
  organization: string;
  organizationCountry: string;
  type: 'academic' | 'professional' | 'other';
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  description: string | null;
  responsibilities: string[];
  provenanceNote: string | null;
  order: number;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Assistant Professor',
    organization: 'Lovely Professional University',
    organizationCountry: 'India',
    type: 'academic',
    startDate: '2023-08-01',
    endDate: null,
    isCurrent: true,
    description: null,
    responsibilities: [
      'Teaching and research in AI, IoT, and Blockchain',
      "Guiding PhD and Master's-level students",
      'Contributing to faculty development programs',
    ],
    provenanceNote:
      'This role’s start date (August 2023) overlaps with the Teaching Assistant role at Sharda University (September 2019 – December 2024) below, exactly as both are publicly published. This overlap has not been independently explained and is not treated as an error in either record.',
    order: 0,
  },
  {
    role: 'Teaching Assistant',
    organization: 'Sharda University',
    organizationCountry: 'India',
    type: 'academic',
    startDate: '2019-09-01',
    endDate: '2024-12-01',
    isCurrent: false,
    description: null,
    responsibilities: [
      'Managing seminars',
      'Managing conferences',
      'Managing PhD research club',
      'Teaching MBA/BBA/LLB students',
      'Teaching in online, offline, and hybrid formats',
      'Conducting examinations',
      'Academic evaluations',
      'Managing university events',
      'Managing publications',
    ],
    provenanceNote:
      'This role’s end date (December 2024) overlaps with the Assistant Professor role at Lovely Professional University (August 2023 – present) above, exactly as both are publicly published. This overlap has not been independently explained and is not treated as an error in either record.',
    order: 1,
  },
  {
    role: 'Deputy Manager',
    organization: 'HDFC Bank Ltd',
    organizationCountry: 'India',
    type: 'professional',
    startDate: '2015-08-01',
    endDate: '2018-07-01',
    isCurrent: false,
    description: 'Publicly stated achievement: best outperformer in 2015 recruitment batch.',
    responsibilities: [
      'Managed team of associates and network partners',
      'Generated business volume from existing clients',
      'Created brand awareness',
      'Cross-sold banking products',
    ],
    provenanceNote: null,
    order: 2,
  },
  {
    role: 'Assistant Manager',
    organization: 'Earth Infra Pvt. Ltd.',
    organizationCountry: 'India',
    type: 'professional',
    startDate: '2013-07-01',
    endDate: '2015-07-01',
    isCurrent: false,
    description: null,
    responsibilities: [
      'Team management',
      'Client relationship building',
      'Business development',
      'Brand awareness',
      'Business-volume generation from existing clients',
    ],
    provenanceNote: null,
    order: 3,
  },
  {
    role: 'Professional Consultant (Freelance)',
    organization: 'Self-employed',
    organizationCountry: 'India',
    type: 'other',
    startDate: '2013-07-01',
    endDate: '2019-08-01',
    isCurrent: false,
    description:
      'Freelance professional consulting. Specific clients, projects, and outcomes are not currently supplied as verified data.',
    responsibilities: [],
    provenanceNote: null,
    order: 4,
  },
];

// Confirmed research taxonomy — kept distinct from
// PERSON.specializations (a broader set of focus terms), per the
// source package's explicit instruction not to treat every
// specialization term as a confirmed research classification.
// "Artificial Intelligence of Things (AIoT)" removed per request;
// "Sustainability" and "ML" added per request.
export const RESEARCH_INTERESTS: string[] = [
  'Artificial Intelligence',
  'ML',
  'Internet of Things',
  'Blockchain',
  'Data Analytics',
  'Digital Transformation',
  'Digital Marketing',
  'Technology Adoption',
  'Sustainability',
];

export interface PublicationItem {
  title: string;
  year: number;
  citationCount: number | null;
  researchAreas: string[];
  researchAreasSource: 'inferred-from-title' | null;
}

// The 10 confirmed Google Scholar publications. `researchAreas` are an
// editorial reading of each title against the confirmed research
// interests (not supplied bibliographic metadata) — always rendered
// with an explicit "inferred from title" qualifier, never presented as
// confirmed metadata.
export const PUBLICATIONS: PublicationItem[] = [
  {
    title:
      'A Study on Responsible AI Awareness and Learning Engagement in Higher Education: The Mediating Roles of Trust in AI, AI Literacy, AI Usage Self-Efficacy, and Human–AI Collaboration',
    year: 2026,
    citationCount: null,
    researchAreas: ['Artificial Intelligence'],
    researchAreasSource: 'inferred-from-title',
  },
  {
    title: 'Green by Design AI in Fashion Retail and the Rise of the Conscious Consumer',
    year: 2026,
    citationCount: null,
    researchAreas: ['Artificial Intelligence'],
    researchAreasSource: 'inferred-from-title',
  },
  {
    title:
      'Exploring Narrative Constructions of Market Sentiment: A Systematic Literature Review of Media Influence on Financial Behaviors and Economic Outcomes',
    year: 2026,
    citationCount: null,
    researchAreas: [],
    researchAreasSource: null,
  },
  {
    title:
      'Game On: Cutting Edge Gamification Techniques to Boost Service Quality and Maximize Ecosystem Engagement',
    year: 2026,
    citationCount: null,
    researchAreas: [],
    researchAreasSource: null,
  },
  {
    title:
      "A Study on Digital Intelligence and Influencer Marketing for Sustainable Diversification of India's Retail Economy: A Qualitative Study",
    year: 2025,
    citationCount: 12,
    researchAreas: ['Digital Marketing', 'Sustainability'],
    researchAreasSource: 'inferred-from-title',
  },
  {
    title:
      'Artificial Intelligence of Things (AIoT)-Enabled Personalized Banking: Investigating Intention to Adopt',
    year: 2024,
    citationCount: 2,
    // Title says "AIoT" (AI + IoT combined); tagged with both
    // component taxonomy terms now that AIoT itself was removed from
    // RESEARCH_INTERESTS.
    researchAreas: ['Artificial Intelligence', 'Internet of Things', 'Technology Adoption'],
    researchAreasSource: 'inferred-from-title',
  },
  {
    title: 'Assessing the Role of Digital Awareness in Promoting Polymer-Based Sustainability',
    year: 2024,
    citationCount: 5,
    researchAreas: ['Digital Transformation', 'Sustainability'],
    researchAreasSource: 'inferred-from-title',
  },
  {
    title:
      'Wearable Technologies for Health: Investigating Behavioral Intention to Adopt Cloud-Based Smartwatch',
    year: 2022,
    citationCount: 1,
    researchAreas: ['Technology Adoption', 'Internet of Things'],
    researchAreasSource: 'inferred-from-title',
  },
  {
    title:
      'What Drives Adoption of Cloud-Based Online Games in an Emerging Market? An Investigation Using Flow Theory',
    year: 2022,
    citationCount: 2,
    researchAreas: ['Technology Adoption'],
    researchAreasSource: 'inferred-from-title',
  },
  {
    title: 'Machine intelligence versus terrorism',
    year: 2021,
    citationCount: 1,
    researchAreas: ['Artificial Intelligence'],
    researchAreasSource: 'inferred-from-title',
  },
];

export interface PresentationItem {
  title: string;
  event: string;
  organization: string;
  dateDisplay: string;
  location: string | null;
  scope: string;
}

// The six presentation/conference records from the official personal
// website. No slides/certificates/video/DOI/keynote-status/awards are
// added. `scope` carries "International" as publicly stated — not a
// claim of keynote or award status.
export const PRESENTATIONS: PresentationItem[] = [
  {
    title:
      "Why Indian Should Adopt Japan's Garbage Disposal System for A Longer Run to Achieve 12th Goal of the Sustainable Development Plan",
    event: '6th International Conference CSR & Sustainable Development',
    organization: 'Sharda University',
    dateDisplay: '10–11 October 2019',
    location: 'Delhi, India',
    scope: 'International',
  },
  {
    title:
      'Artificial Intelligence (AI) Enabled Organization Has Competitive Advantages In Cutthroat Environment (Red Ocean)',
    event:
      'International Conference on Volatility, Uncertainty, Complexity, and Ambiguity in Business (IC-VUCA 2019)',
    organization: 'MIET',
    dateDisplay: '23–24 November 2019',
    location: 'Meerut, India',
    scope: 'International',
  },
  {
    title: 'Recent Research Trends in AI and IoT',
    event: 'International Conference on Computing, Communication & Intelligent System (ICCCIS-2021)',
    organization: 'Sharda University',
    dateDisplay: '19–20 February 2021',
    location: 'Greater Noida, India',
    scope: 'International',
  },
  {
    title: 'A Study on Adoption of Cloud of things by Small and Medium Enterprises',
    event: '2nd Research Clinic and Doctoral Consortium',
    organization: "FIIB, New Delhi & Taylor's University, Malaysia",
    dateDisplay: '7 August 2021',
    location: null,
    scope: 'International',
  },
  {
    title: 'Using Multi-Theory Model to Investigate Behavioral Intention to Use Cloud-Enabled Games',
    event: 'International Conference on Digital Marketing Experiences (DIGMAR 2021)',
    organization: 'Jain (Deemed to be) University',
    dateDisplay: '27–29 October 2021',
    location: 'Bangalore, India',
    scope: 'International',
  },
  {
    title:
      'What Drives Adoption of Cloud-based Online Games in an Emerging Market? An Investigation Using Flow Theory',
    event: 'Machine Intelligence and Data Science Applications (MIDAS-2021)',
    organization: 'Comilla University',
    dateDisplay: '26–27 December 2021',
    location: 'Cumilla, Bangladesh',
    scope: 'International',
  },
];

export interface CertificationItem {
  title: string;
  date: string;
  order: number;
}

// The eight professional certifications from the official personal
// website. No credential IDs, certificate URLs, scores, or grades are
// added.
export const CERTIFICATIONS: CertificationItem[] = [
  { title: 'IITK Blockchain Certificate Program', date: '2025-06-01', order: 0 },
  { title: 'Core Java Foundations', date: '2025-04-01', order: 1 },
  { title: 'Linux Training', date: '2025-04-01', order: 2 },
  { title: 'Fundamentals of Blockchain', date: '2025-04-01', order: 3 },
  { title: 'UGC NET Qualified', date: '2018-12-01', order: 4 },
  { title: 'NISM VA Certification', date: '2017-06-01', order: 5 },
  { title: 'NISM VI Certification', date: '2016-01-01', order: 6 },
  { title: 'IRDA Certification', date: '2015-09-01', order: 7 },
];

export interface VentureItem {
  name: string;
  domain: string;
  url: string;
  role: string;
  order: number;
}

// Platforms/domains owned and founded, as supplied by the user.
export const VENTURES: VentureItem[] = [
  { name: 'Aakhetak', domain: 'Aakhetak.com', url: 'https://Aakhetak.com', role: 'Founder & Owner', order: 0 },
  { name: 'Printf', domain: 'Printf.co.in', url: 'https://Printf.co.in', role: 'Founder & Owner', order: 1 },
  {
    name: 'ViralBuzz',
    domain: 'ViralBuzz.co.in',
    url: 'https://ViralBuzz.co.in',
    role: 'Founder & Owner',
    order: 2,
  },
  { name: 'Nobledon', domain: 'Nobledon.in', url: 'https://Nobledon.in', role: 'Founder & Owner', order: 3 },
];
