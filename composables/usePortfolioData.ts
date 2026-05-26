export type ProjectCategory = 'All' | 'Full Stack' | 'Frontend' | 'Backend'

export interface SkillItem {
  name: string
  category: 'Technical Skills' | 'Tools' | 'Other Skills'
  level: string
  icon: string
}

export interface ProjectItem {
  slug: string
  title: string
  category: Exclude<ProjectCategory, 'All'>
  description: string
  highlights?: string[]
  stack: string[]
  image: string
  github?: string
  demo?: string
  gallery?: string[]
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
    { name: 'HTML', category: 'Technical Skills', level: 'Proficient', icon: 'https://api.iconify.design/logos:html-5.svg' },
    { name: 'CSS', category: 'Technical Skills', level: 'Proficient', icon: 'https://api.iconify.design/logos:css-3.svg' },
    { name: 'JavaScript', category: 'Technical Skills', level: 'Proficient', icon: 'https://api.iconify.design/logos:javascript.svg' },
    { name: 'TypeScript', category: 'Technical Skills', level: 'Proficient', icon: 'https://api.iconify.design/logos:typescript-icon.svg' },
    { name: 'Tailwind', category: 'Technical Skills', level: 'Proficient', icon: 'https://api.iconify.design/logos:tailwindcss-icon.svg' },
    { name: 'PHP', category: 'Technical Skills', level: 'Proficient', icon: 'https://api.iconify.design/logos:php.svg' },
    { name: 'Laravel', category: 'Technical Skills', level: 'Proficient', icon: 'https://api.iconify.design/logos:laravel.svg' },
    { name: 'Nuxt', category: 'Technical Skills', level: 'Proficient', icon: 'https://api.iconify.design/logos:nuxt-icon.svg' },
    { name: 'Vue.js', category: 'Technical Skills', level: 'Proficient', icon: 'https://api.iconify.design/logos:vue.svg' },
    { name: 'Vite', category: 'Technical Skills', level: 'Proficient', icon: 'https://api.iconify.design/logos:vitejs.svg' },
    { name: 'React', category: 'Technical Skills', level: 'Proficient', icon: 'https://api.iconify.design/logos:react.svg' },
    { name: 'MySQL', category: 'Technical Skills', level: 'Proficient', icon: 'https://api.iconify.design/logos:mysql.svg' },
    { name: 'Git', category: 'Technical Skills', level: 'Proficient', icon: 'https://api.iconify.design/logos:git-icon.svg' },
    { name: 'GitHub', category: 'Technical Skills', level: 'Proficient', icon: 'https://api.iconify.design/logos:github-icon.svg' },
    { name: 'GitLab', category: 'Technical Skills', level: 'Proficient', icon: 'https://api.iconify.design/logos:gitlab.svg' },
    { name: 'Strapi (headless CMS)', category: 'Tools', level: 'Proficient', icon: 'https://api.iconify.design/logos:strapi-icon.svg' },
    { name: 'Statamic (CMS)', category: 'Tools', level: 'Proficient', icon: 'https://api.iconify.design/simple-icons:statamic.svg' },
    { name: 'Dokploy (deployment platform/tool)', category: 'Tools', level: 'Proficient', icon: 'https://api.iconify.design/logos:docker-icon.svg' },
    { name: 'JIRA (project tracking tool)', category: 'Tools', level: 'Proficient', icon: 'https://api.iconify.design/logos:jira.svg' },
    { name: 'Virtual Assistant', category: 'Other Skills', level: 'Proficient', icon: 'https://api.iconify.design/mdi:account-tie.svg' },
    { name: 'Microsoft Office', category: 'Other Skills', level: 'Proficient', icon: 'https://api.iconify.design/simple-icons:microsoftoffice.svg' },
    { name: 'Social Media Manager', category: 'Other Skills', level: 'Proficient', icon: 'https://api.iconify.design/mdi:bullhorn.svg' },
    { name: 'Project Management', category: 'Other Skills', level: 'Proficient', icon: 'https://api.iconify.design/mdi:clipboard-check-outline.svg' }
  ]

  const projects: ProjectItem[] = [
    {
      slug: 'pet-care-center',
      title: 'Pet Care Center',
      category: 'Full Stack',
      description: 'A comprehensive Veterinary Management Information System that handles records, appointments, inventory, and sales for a veterinary clinic in Abar 1st, San Jose, Nueva Ecija. This system replaces the traditional use of paper files and index cards for pet medical records, reducing the risk of potential data loss. It also helps optimize clinic operations by monitoring and improving financial performance.',
      highlights: [
        'Record Management System - Securely stores and manages pets medical records, providing organized and easily accessible patient information.',
        'Appointment Management System - Allows doctors to set their availability by date and time, which is automatically reflected on the client calendar. Pet owners can view available schedules and book appointments online.',
        'Inventory Management System - Enables the clinic to manage medical supplies, medicines, and other inventory items while monitoring stock levels, deliveries, and sold products in real time.',
        'Sales and Analytics Dashboard - Provides clinic owners with insights into clinic performance, including frequently diagnosed diseases, top visitors, revenue tracking, and the total number of records managed within the system.'
      ],
      stack: ['Laravel', 'MySQL'],
      image: '/images/projects/petcarecenter/petcarecenter_cover.jpg',
      gallery: [
        '/images/projects/petcarecenter/landing_page.jpg',
        '/images/projects/petcarecenter/booking.jpg',
        '/images/projects/petcarecenter/dashboard.jpg'
      ]
    },
    {
      slug: 'lumen-analytics',
      title: 'RADIIS (Research and Development Integrated Information System)',
      category: 'Frontend',
      description: "RADIIS is a system that organizes and supports research activities of Central Luzon State University's different R&D centers. It serves as a database where R&D programs, projects, and studies are stored in a structured way. It also provides analytics to generate insights for better decision making. This is a system that the university is using to store and manage research, studies, projects, and programs.",
      highlights: [
        'The RADIIS Dashboard Analytics provides an overview summary of projects, programs, studies, and budgets for the last 5 years.',
        'It supports generating reports from stored programs, projects, studies, presentations, and more.'
      ],
      stack: ['Laravel', 'Vite', 'MySQL'],
      image: '/images/projects/radiis/radiis_cover.jpg',
      gallery: [
        '/images/projects/radiis/radiis_dashboard.jpg',
        '/images/projects/radiis/radiis_view.jpg',
        '/images/projects/radiis/radiis_report.jpg',
        '/images/projects/radiis/radiis_activity log.jpg',
        '/images/projects/radiis/radiis_activity log 2.jpg'
      ]
    },
    {
      slug: 'forge-api-platform',
      title: 'Forge API Platform',
      category: 'Backend',
      description: 'Scalable service layer with structured auth, observability, and developer-friendly documentation.',
      stack: ['Laravel', 'Docker', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1200&q=80'
      ]
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

  const getProjectBySlug = (slug: string) => projects.find(project => project.slug === slug)

  return { hero, stats, skills, projects, experiences, getProjectBySlug }
}
