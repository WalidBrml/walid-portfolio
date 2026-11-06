export interface Certification {
  title: string
  issuer: string
  date?: string
  url?: string // omit when there is no public verification page
}

export const certificationsHeading = {
  eyebrow: '05 — Certificates',
  title: 'Awards & Certificates.',
  accent: 'Certificates.',
  subtitle: 'Credentials in data analytics, data science, cloud and machine learning.',
}

export const certifications: Certification[] = [
  {
    title: 'SAP Certified – Data Analyst – SAP Analytics Cloud',
    issuer: 'SAP',
    date: 'Nov 2026 – Nov 2027',
    url: 'https://www.credly.com/badges/253a6b31-8330-490d-9cae-ca836e91cb51',
  },
  {
    title: 'Astronomer Certified for AI Orchestration Fundamentals',
    issuer: 'Astronomer',
    date: 'Sep 2026',
    url: 'https://www.credly.com/badges/4076d2eb-eeee-4b6a-b8dd-505ee1e4165e/print',
  },
  {
    title: 'AWS: Becoming a Machine Learning Engineer',
    issuer: 'Manara / AWS',
    date: 'Sep 2025',
    url: 'https://www.linkedin.com/in/walid-bouremel/overlay/Certifications/289059385/treasury/',
  },
  {
    title: 'AWS: AI Practitioner Certificate',
    issuer: 'Manara / AWS',
    date: 'Sep 2025',
    url: 'https://www.linkedin.com/in/walid-bouremel/overlay/Certifications/288866745/treasury/',
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    date: 'Sep 2025',
    url: 'https://www.credly.com/badges/647c1b5e-b20e-4e1b-b785-393dc9d865ba',
  },
  {
    title: 'Data Science & Analytics',
    issuer: 'HP LIFE',
    date: 'May 2024',
  },
]
