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
    name: 'Christine Anne Valdez',
    role: 'Christine Anne Valdez',
    intro: 'I am a multi-skilled developer who transforms designs and ideas into structured, functional systems and applications.'
  }

  const stats = [
    { label: 'Years Experience', value: '7+' },
    { label: 'Projects Completed', value: '45+' },
    { label: 'Happy Clients', value: '30+' }
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
      description: 'Enterprise storefront with real-time inventory and fast checkout flows wrapped in an expressive UI.',
      stack: ['Nuxt', 'Laravel', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80',
      github: '#',
      demo: '#'
    },
    {
      title: 'Lumen Analytics',
      category: 'Frontend',
      description: 'Insight dashboard with smooth chart interactions and storytelling-style reporting cards.',
      stack: ['Vue', 'TypeScript', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
      github: '#',
      demo: '#'
    },
    {
      title: 'Forge API Platform',
      category: 'Backend',
      description: 'Scalable service layer with structured auth, observability, and developer-friendly documentation.',
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
      description: 'Led architecture for a customer SaaS platform and guided engineers through feature delivery from concept to production.',
      tech: ['Nuxt', 'Laravel', 'AWS']
    },
    {
      year: '2022',
      company: 'Pixel Foundry',
      role: 'Full Stack Engineer',
      description: 'Built high-traffic products with polished frontend flows and resilient backend infrastructure.',
      tech: ['Vue', 'PHP', 'PostgreSQL']
    },
    {
      year: '2019',
      company: 'Codefront Studio',
      role: 'Frontend Developer',
      description: 'Delivered launch websites and branded product pages with strong interaction design and accessibility.',
      tech: ['Vue', 'Tailwind', 'Figma']
    }
  ]

  return { hero, stats, skills, projects, experiences }
}
