// Every project below comes from the CV and public GitHub repositories.
// Links are optional: a button is rendered only when its URL is present.
export type FilterName = 'All Projects' | 'Power BI' | 'Excel' | 'SQL' | 'Python' | 'Tableau'

export const projectFilters: FilterName[] = ['All Projects', 'Power BI', 'Excel', 'SQL', 'Python', 'Tableau']

export interface Project {
  id: string
  title: string
  category: string
  description: string
  highlights: string[]
  tools: string[]
  filters: Exclude<FilterName, 'All Projects'>[]
  icon: 'store' | 'trending' | 'cart' | 'fish'
  badge?: string
  emphasis?: string[]
  github?: string
  dashboard?: string
  linkedin?: string
}

export const projectsHeading = {
  eyebrow: '04 — Projects',
  title: 'Selected Projects.',
  accent: 'Projects.',
  subtitle:
    'Real-world data analytics, business intelligence and machine learning projects focused on transforming data into actionable insights.',
}

export const projects: Project[] = [
  {
    id: 'dz-market-intelligence',
    title: 'DZ Market Intelligence',
    category: 'Business Intelligence & Demand Forecasting',
    description:
      'End-to-end BI and demand forecasting platform for an Algerian supermarket scenario, from data generation and SQL warehouse to forecasting and a Power BI dashboard.',
    highlights: [
      '468K+ sales lines and 4.5M+ inventory records across 15 simulated stores and 500 products over three years.',
      'SQL star-schema pipelines with 50 data-quality checks and 21 SQL integrity checks.',
      'Daily demand forecasting with rolling backtesting, plus a six-page Power BI dashboard.',
    ],
    tools: ['Python', 'SQL', 'PostgreSQL', 'Machine Learning', 'Power BI'],
    filters: ['Power BI', 'SQL', 'Python'],
    icon: 'store',
    emphasis: ['demand forecasting', 'SQL warehouse', 'Power BI dashboard'],
    badge: 'Synthetic data',
    github: 'https://github.com/WalidBrml/dz-market-intelligence',
    dashboard: 'https://dz-market-intelligence-h8bsm7poscnfronaynnezg.streamlit.app',
  },
  {
    id: 'waxoria',
    title: 'Waxoria — Intelligent Inventory & Demand Forecasting',
    category: 'Machine Learning & Inventory Optimization',
    description:
      'Retail demand forecasting and inventory intelligence dashboard that compares forecasting models and turns forecasts into reorder recommendations.',
    highlights: [
      '913K daily sales records across 10 stores and 50 products; 500 store–product demand series evaluated.',
      'Random Forest cut MAE by 1.72 units per series versus a 7-day average baseline across 97.6% of series.',
      'Streamlit dashboard with sales intelligence, model performance and inventory pages (reorder point, safety stock).',
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit', 'Power BI'],
    filters: ['Python', 'Power BI'],
    icon: 'trending',
    emphasis: ['demand forecasting', 'inventory intelligence', 'reorder recommendations'],
    github: 'https://github.com/WalidBrml/waxoria-forecasting',
    dashboard: 'https://waxoria-forecasting.streamlit.app',
  },
  {
    id: 'sardine-production',
    title: 'Sardine Production Analysis & Forecasting',
    category: 'Time-Series Forecasting & Fisheries Analytics',
    description:
      'Master’s final-year project analyzing and forecasting sardine production in Algeria, with a Power BI dashboard for decision support.',
    highlights: [
      'Production data from 35 Algerian fishing ports covering 2018–2022.',
      'PCA and K-Means clustering to identify production profiles among ports.',
      'SARIMA and LSTM models for time-series forecasting.',
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'SARIMA', 'LSTM', 'Power BI'],
    filters: ['Power BI', 'Python'],
    icon: 'fish',
    emphasis: ['sardine production', 'Power BI dashboard'],
    badge: 'Master’s final-year project',
  },
  {
    id: 'ecommerce-sales-analytics',
    title: 'E-Commerce Sales Analytics',
    category: 'Business Intelligence & Sales Analytics',
    description:
      'Analysis of Brazilian Olist e-commerce data covering customers, products, payments, sellers, delivery and regional sales, with a Power BI KPI dashboard.',
    highlights: [
      'Approximately 100K orders analyzed (2016–2018).',
      '19 PostgreSQL analytical queries.',
      'Power BI dashboard tracking revenue, order volume, items sold, customer behavior and geography.',
    ],
    tools: ['Python', 'Pandas', 'PostgreSQL', 'Power BI'],
    filters: ['Power BI', 'SQL', 'Python'],
    icon: 'cart',
    emphasis: ['Olist e-commerce data', 'Power BI KPI dashboard'],
    github: 'https://github.com/WalidBrml/ecommerce-sales-analytics',
  },
]
