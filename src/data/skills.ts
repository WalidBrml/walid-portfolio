// Edit skill names, categories and percentages here.
export interface Skill { name: string; level: number }
export interface SkillCategory { title: string; skills: Skill[] }

export const skillsHeading = {
  eyebrow: '02 — Skills',
  title: 'Skill matrix & tool proficiency.',
  accent: 'tool proficiency.',
  subtitle:
    'The analytical tools and technologies I use to clean, process, analyze and visualize data.',
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Business Intelligence & Visualization',
    skills: [
      { name: 'Power BI', level: 95 },
      { name: 'DAX', level: 88 },
      { name: 'Power Query', level: 87 },
      { name: 'Data Visualization', level: 92 },
      { name: 'Data Modelling', level: 86 },
    ],
  },
  {
    title: 'Programming & Query Languages',
    skills: [
      { name: 'SQL / MySQL', level: 85 },
      { name: 'Python (Pandas, NumPy)', level: 88 },
      { name: 'Advanced Excel', level: 90 },
      { name: 'Tableau', level: 75 },
    ],
  },
  {
    title: 'Analysis & Collaboration',
    skills: [
      { name: 'Business Statistics', level: 82 },
      { name: 'Stakeholder Management', level: 88 },
      { name: 'Problem Solving', level: 93 },
    ],
  },
]

// Radar chart. DAX / Power Query is the average of the two matching skill bars above (88, 87).
export const radarData = [
  { tool: 'Power BI', value: 95 },
  { tool: 'Excel', value: 90 },
  { tool: 'SQL', value: 85 },
  { tool: 'Python', value: 88 },
  { tool: 'Tableau', value: 75 },
  { tool: 'DAX / Power Query', value: 88 },
]
