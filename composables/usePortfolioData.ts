export type ProjectCategory = 'All' | 'Full Stack' | 'Frontend' | 'Backend'

export interface SkillItem {
  name: string
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Tools'
  level: string
  icon: string
}

export interface ProjectItem {
  title: string
  category: Exclude<ProjectCategory, 'All'>
  description: string
  stack: string[]
  image: string
  github: string
  demo: string
}

export interface ExperienceItem {
  year: string
  company: string
  role: string
  description: string
  tech: string[]
}

export const usePortfolioData = () => {
  const hero = {
    name: 'Christine Valdez',
    role: 'Full Stack Developer',
    intro: 'I craft robust digital products with cinematic interfaces and deeply reliable engineering foundations.'
  }

  const stats = [
    { label: 'Years Experience', value: '7+' },
    { label: 'Projects Completed', value: '45+' },
    { label: 'Technologies Mastered', value: '20+' }
  ]

  const skills: SkillItem[] = [
    { name: 'Nuxt 3', category: 'Frontend', level: 'Expert', icon: 'N' },
    { name: 'Vue', category: 'Frontend', level: 'Expert', icon: 'V' },
    { name: 'TailwindCSS', category: 'Frontend', level: 'Advanced', icon: 'T' },
    { name: 'Laravel', category: 'Backend', level: 'Expert', icon: 'L' },
    { name: 'PHP', category: 'Backend', level: 'Expert', icon: 'P' },
    { name: 'Python', category: 'Backend', level: 'Advanced', icon: 'Py' },
    { name: 'Docker', category: 'DevOps', level: 'Advanced', icon: 'D' },
    { name: 'PostgreSQL', category: 'Backend', level: 'Advanced', icon: 'Pg' },
    { name: 'Git', category: 'Tools', level: 'Expert', icon: 'G' }
  ]

  const projects: ProjectItem[] = [
    {
      title: 'Atlas Commerce Suite',
      category: 'Full Stack',
      description: 'Enterprise storefront with real-time inventory and performance-focused checkout.',
      stack: ['Nuxt', 'Laravel', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80',
      github: '#',
      demo: '#'
    },
    {
      title: 'Lumen Analytics',
      category: 'Frontend',
      description: 'Data-rich dashboard with smooth chart rendering and executive-grade visual storytelling.',
      stack: ['Vue', 'TypeScript', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
      github: '#',
      demo: '#'
    },
    {
      title: 'Forge API Platform',
      category: 'Backend',
      description: 'Scalable API service with clean architecture, robust auth, and observability built in.',
      stack: ['Laravel', 'Docker', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      github: '#',
      demo: '#'
    }
  ]

  const experiences: ExperienceItem[] = [
    {
      year: '2025',
      company: 'Northwind Labs',
      role: 'Senior Full Stack Developer',
      description: 'Led architecture for customer-facing SaaS platform and mentored cross-functional engineers.',
      tech: ['Nuxt', 'Laravel', 'AWS']
    },
    {
      year: '2022',
      company: 'Pixel Foundry',
      role: 'Full Stack Engineer',
      description: 'Built high-traffic web products focused on UI precision and backend resilience.',
      tech: ['Vue', 'PHP', 'PostgreSQL']
    },
    {
      year: '2019',
      company: 'Codefront Studio',
      role: 'Frontend Developer',
      description: 'Delivered premium interactive interfaces for product launches and brand platforms.',
      tech: ['Vue', 'Tailwind', 'Figma']
    }
  ]

  return { hero, stats, skills, projects, experiences }
}
