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
  imageFit?: 'contain' | 'cover'
  github?: string
  demo?: string
  gallery?: string[]
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  highlights: string[]
}

export interface AboutContent {
  paragraphs: string[]
  imageSrc: string
  imageAlt: string
}

export const usePortfolioData = () => {
  const hero = {
    name: 'Christine Anne Valdez',
    role: 'Christine Anne Valdez',
    intro: 'I am a multi-skilled developer who transforms designs and ideas into structured, functional systems and applications.'
  }

  const about: AboutContent = {
    paragraphs: [
      'A dedicated Full Stack Developer with experience in web development, maintenance, technical documentation, deployment, debugging, troubleshooting, virtual assistance, and AI-assisted tools and workflows. Skilled in transforming designs and ideas into structured, functional systems and applications.',
      'Enthusiastic and eager to learn new technologies and adapt to unfamiliar projects focused on innovation. Strongly focused on creativity, organization, communication, security, problem-solving, and delivering high-quality results for clients and teams.'
    ],
    imageSrc: '/images/covver 2.jpg',
    imageAlt: 'About cover image'
  }

  const stats = [
    { label: 'Projects Completed', value: '45+' }
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
      image: '/images/projects/radiis/radiis_cover.png',
      imageFit: 'cover',
      gallery: [
        '/images/projects/radiis/radiis_dashboard.jpg',
        '/images/projects/radiis/radiis_view.jpg',
        '/images/projects/radiis/radiis_report.jpg',
        '/images/projects/radiis/radiis_activity log.jpg',
        '/images/projects/radiis/radiis_activity log 2.jpg'
      ]
    },
    {
      slug: 'kanban-task-management-system',
      title: 'Kanban Task Management System',
      category: 'Full Stack',
      description: 'A web-based Kanban task management system designed to organize projects and monitor workflow.',
      highlights: [
        'Developed a web-based Kanban task management system to organize projects and monitor workflow.',
        'Built features for task creation, assignment, status tracking, and board management.',
        'Improved team collaboration through an intuitive drag-and-drop interface and organized project tracking.'
      ],
      stack: ['Laravel', 'MySQL', 'Nuxt'],
      image: '/images/projects/kanban/kanban-dashboard.png',
      gallery: [
        '/images/projects/kanban/kanban-dashboard.png',
        '/images/projects/kanban/kanban-board.png',
        '/images/projects/kanban/kanban-task.png'
      ]
    },
    {
      slug: 'chargecircle-landing-page',
      title: 'ChargeCircle Landing Page (Charging Fleet Operation Company)',
      category: 'Frontend',
      description: 'A responsive and modern landing page for a charging fleet operations company that showcases services and brand identity.',
      highlights: [
        'Developed a responsive and modern landing page for a charging fleet operations company to showcase services and brand identity.',
        'Designed and implemented the user interface to ensure a clean layout, smooth navigation, and mobile-friendly experience.',
        'Structured content sections for company overview, services, and call-to-action to improve user engagement and conversion.'
      ],
      stack: ['Nuxt', 'Vue'],
      image: '/images/projects/CC-website/cc-cover.png',
      gallery: [
        '/images/projects/CC-website/cc-cover.png',
        '/images/projects/CC-website/cc-services.png',
        '/images/projects/CC-website/cc-services2.png',
        '/images/projects/CC-website/cc-contacts.png'
      ]
    },
    {
      slug: 'we-connect',
      title: 'WeConnect Event and Ticketing Platform',
      category: 'Full Stack',
      description: 'WeConnect is a full-stack event and ticketing management platform designed to simplify event organization, ticket management, attendee registration, and payment processing. The platform supports multiple user roles and provides an integrated workflow for managing events and ticket transactions.',
      highlights: [
        'Developed and enhanced features for the event and ticketing management system.',
        'Implemented and maintained Stripe payment integration for secure ticket transactions.',
        'Developed and improved functionality for multiple user roles and permissions.',
        'Integrated Brevo transactional email for automated system notifications and email communication.',
        'Investigated and fixed bugs affecting ticket payment and transaction status.',
        'Resolved issues and implemented fixes in the production environment.',
        'Worked on backend functionality using Laravel and frontend features using Vue.js and Inertia.js.',
        'Assisted with database-related tasks, system improvements, and overall application maintenance.'
      ],
      stack: ['Laravel', 'PHP', 'Vue.js', 'MySQL', 'Stripe', 'Brevo', 'JavaScript', 'HTML', 'CSS'],
      image: '/images/projects/we-connect-spirit/cover.png',
      imageFit: 'cover',
      gallery: [
        '/images/projects/we-connect-spirit/cover.png',
        '/images/projects/we-connect-spirit/event-list.png',
        '/images/projects/we-connect-spirit/bookings.png',
        '/images/projects/we-connect-spirit/bookings2.png'
      ]
    }
  ]

  const experiences: ExperienceItem[] = [
    {
      role: 'Full Stack Developer',
      company: 'MCT Netwerke | Mannheim, Baden-Wurttemberg, Germany',
      period: 'Oct 2025 - May 2026',
      highlights: [
        'Developed and maintained a Kanban Board System and an open-source video conferencing platform with individual voice recording functionality.',
        'Created landing pages and contributed to the ongoing development of a Task Management System with one-click task features.',
        'Developed the landing page for a charging fleet company and contributed to the ongoing development of its application system.',
        'Contributed to the development and enhancement of an event and ticketing system with payment integration using Stripe and PayPal.',
        'Managed deployment processes and performed system maintenance to ensure stability, performance, and continuous availability of applications.'
      ]
    },
    {
      role: 'Technical Support Staff',
      company: 'University Extension Program Office | Central Luzon State University',
      period: 'Jul 2025 - Aug 2025',
      highlights: [
        'Created and organized Excel reports, encoded training survey data, and maintained accurate records.',
        'Assisted with administrative tasks, document preparation, and daily office operations in the Community Development Division.'
      ]
    },
    {
      role: 'Social Media Manager',
      company: 'Link: heightmax.ai',
      period: 'May 2025 - Jul 2025',
      highlights: [
        'Managed Instagram and TikTok accounts, using AI to generate images and content related to height videos and to market their website, HeightMax AI.',
        'Posted regularly to increase viewers and user engagement.'
      ]
    },
    {
      role: 'Full-Stack Developer Intern',
      company: 'Management Information System office | Central Luzon State University',
      period: 'Feb 2025 - May 2025',
      highlights: [
        'Contributed to the ongoing development and maintenance of RADIIS (Research and Development, Innovation, and Information Systems) and BASIS (Business Affairs Information System).',
        'Assisted in developing, testing, debugging, and improving system features and functionalities for internal university operations.'
      ]
    },
    {
      role: 'Instagram Content Research Assistant',
      company: 'Mindset | Wealth | Growth | Success (@opusera)',
      period: 'Feb 2025 - May 2025',
      highlights: [
        'Researched trending topics, viral clips, and popular influencers related to wealth, motivation, personal growth, and success.',
        'Curated and sourced engaging content for daily Instagram posts and reels while monitoring current social media trends.'
      ]
    }
  ]

  const getProjectBySlug = (slug: string) => projects.find(project => project.slug === slug)

  return { hero, about, stats, skills, projects, experiences, getProjectBySlug }
}
