<template>
  <section id="skills" class="py-24">
    <div class="section-shell">
      <SectionTitle eyebrow="Skills" />
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 reveal">
        <AnimatedCard v-for="skill in skillsWithGroup" :key="skill.name">
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 rounded-2xl border-2 border-ink bg-paper grid place-content-center p-2">
              <img :src="skill.icon" :alt="`${skill.name} icon`" class="h-7 w-7 object-contain" loading="lazy">
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-ink">{{ skill.name }}</h3>
              <p class="text-lg text-ink/75">{{ skill.group }}</p>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { skills } = usePortfolioData()

const frontendSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Tailwind',
  'Nuxt',
  'Vue.js',
  'Vite',
  'React'
]

const backendSkills = [
  'PHP',
  'Laravel',
  'MySQL',
  'Strapi (headless CMS)',
  'Statamic (CMS)'
]

const skillsWithGroup = computed(() =>
  skills.map(skill => {
    let group = 'Others'
    if (frontendSkills.includes(skill.name)) group = 'Frontend'
    else if (skill.name === 'MySQL') group = 'Database'
    else if (backendSkills.includes(skill.name)) group = 'Backend'

    return {
      ...skill,
      group
    }
  })
)
</script>
