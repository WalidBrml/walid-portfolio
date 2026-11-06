// Source: CV. Edit freely; the timeline renders in this order.
export interface Experience {
  title: string
  company: string
  industry: string
  dates: string
  description: string
  responsibilities: string[]
  tools: string[]
  highlights?: string[]
}

export const experienceHeading = {
  eyebrow: '03 — Experience',
  title: 'Professional Experience.',
  accent: 'Experience.',
  subtitle:
    'Practical experience applying data analytics and business intelligence to real-world organizational challenges.',
}

export const experiences: Experience[] = [
  {
    title: 'Data Science Intern',
    company: 'Directorate of Fisheries and Aquaculture of Algiers',
    industry: 'Public sector · Fisheries & Aquaculture',
    dates: 'Feb 2026 – Apr 2026',
    description:
      'Worked on five years of sardine production data across 35 fishing ports. Performed exploratory data analysis, data preprocessing and statistical analysis to identify production patterns and trends.',
    responsibilities: [
      'Collected, cleaned and prepared fisheries production datasets.',
      'Applied PCA and K-Means for statistical analysis and clustering.',
      'Developed SARIMA and LSTM forecasting models.',
      'Created a Power BI dashboard to visualize production trends and analytical findings.',
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'PCA', 'K-Means', 'SARIMA', 'LSTM', 'Power BI'],
    highlights: ['five years of sardine production data', '35 fishing ports', 'exploratory data analysis'],
  },
  {
    title: 'Database Administration Intern',
    company: 'Banque Extérieure d’Algérie (BEA)',
    industry: 'Banking · Information Systems Department',
    dates: 'Feb 2024 – May 2024',
    description:
      'Participated in database administration activities, working with Oracle and MySQL database systems.',
    responsibilities: [
      'Assisted with database administration and monitoring.',
      'Worked with Oracle and MySQL database environments.',
      'Contributed to database security and maintenance activities.',
      'Explored database capacity planning and performance management.',
    ],
    tools: ['Oracle Database', 'MySQL', 'SQL', 'Database Administration'],
    highlights: ['database administration', 'Oracle', 'MySQL'],
  },
]
