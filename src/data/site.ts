// Central site configuration. Edit values here; no component changes needed.
const base = import.meta.env.BASE_URL // "/" locally, repo path on GitHub Pages

export const site = {
  name: 'Walid Bouremel',
  role: 'Data Analyst',
  tagline: 'Data Analyst | Business Intelligence | Data Science',
  availability: 'Open to Data Analyst opportunities',
  intro:
    'I turn raw, complex business data into clear, actionable insights. I specialize in transforming data into meaningful business intelligence through Python, SQL, Power BI, Tableau and advanced analytics.',
  introHighlights: [
    'clear, actionable insights',
    'meaningful business intelligence',
    'Python',
    'SQL',
    'Power BI',
    'Tableau',
    'advanced analytics',
  ],
  // Hero skill pills: `color` is the small indicator dot.
  heroSkills: [
    { name: 'Power BI', color: '#F2C811' },
    { name: 'SQL', color: '#36DDF5' },
    { name: 'Python', color: '#5B8CFF' },
    { name: 'Tableau', color: '#A855F7' },
    { name: 'Excel', color: '#34D399' },
    { name: 'DAX & Power Query', color: '#F472B6' },
  ],
  email: 'walidbourmel44@gmail.com',
  phone: '+213 541 771 729',
  showPhone: false, // set to true to display the phone number in the Contact section
  location: 'Algeria',
  linkedin: 'https://www.linkedin.com/in/walid-bouremel/',
  linkedinLabel: 'linkedin.com/in/walid-bouremel',
  github: 'https://github.com/WalidBrml',
  githubLabel: 'github.com/WalidBrml',
  resumeUrl: `${base}Walid_Bouremel_CV.pdf`,
  resumeFileName: 'Walid_Bouremel_CV.pdf',
  photo: `${base}images/walid.webp`,
  photoFallback: `${base}images/walid.jpg`,
  footer: '© 2026 Walid Bouremel. Crafted with data & a little glow.',
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
] as const

// Hero statistics card. `value` + `suffix` animate as a counter; set `text` to skip counting.
export const heroStats = [
  { label: 'Projects Completed', value: 7, suffix: '+' },
  { label: 'Power BI Dashboards', value: 4, suffix: '+' },
  { label: 'Records Cleaned', value: 1.2, suffix: 'M+', decimals: 1 },
  { label: 'Internships', value: 2, suffix: '' },
]

export const about = {
  eyebrow: '01 — About',
  heading: 'From data to insights, from insights to decisions.',
  headingAccent: 'insights to decisions.',
  paragraphs: [
    'I hold a Master’s degree in Computer Science, specializing in Data Analysis and Data Science, from the University of Algiers 1 (2024–2026), built on a Bachelor’s degree in Mathematics and Computer Science from the same university.',
    'My work centers on the full analytics workflow: extracting data, data cleaning, exploring it with Python and SQL, modeling it, and data visualization in Power BI dashboards that decision-makers can use. I also work with Tableau and advanced Excel, and I have applied Machine Learning forecasting methods such as SARIMA, LSTM and Random Forest.',
    'My experience includes a Data Science internship at the Directorate of Fisheries and Aquaculture of Algiers and a Database Administration internship at Banque Extérieure d’Algérie. I enjoy turning business questions into measurable analysis that supports data-driven decisions, and I am looking for a Data Analyst, Business Intelligence or junior Data Science role.',
  ],
  badges: ['Algeria', 'Data Analysis & Data Science', 'Open to full-time roles', 'Open to professional opportunities'],
  highlights: [
    'Master’s degree',
    'Data Analysis and Data Science',
    'Python',
    'SQL',
    'Power BI',
    'Tableau',
    'Machine Learning',
    'Business Intelligence',
    'data cleaning',
    'data visualization',
    'data-driven decisions',
  ],
  floating: ['6 Certifications', '2 Internships'],
  // Counts of verified portfolio projects per tool. Edit if you add projects.
  projectCounts: [
    { label: 'Power BI Projects', value: 4 },
    { label: 'SQL Projects', value: 2 },
    { label: 'Python Projects', value: 4 },
    { label: 'Machine Learning Projects', value: 3 },
  ],
}
