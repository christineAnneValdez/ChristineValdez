<template>
  <section id="projects" class="py-24">
    <div class="section-shell">
      <SectionTitle eyebrow="Projects" title="Selected Work" />
      <div class="mb-8 flex flex-wrap gap-3 reveal">
        <button v-for="tab in tabs" :key="tab" @click="active = tab" class="rounded-full border px-4 py-2 text-sm transition"
          :class="active === tab ? 'border-gold bg-gold text-canvas' : 'border-gold/30 text-gold hover:bg-gold/10'">
          {{ tab }}
        </button>
      </div>
      <div class="grid gap-6 lg:grid-cols-3">
        <AnimatedCard v-for="project in filteredProjects" :key="project.title">
          <button class="w-full text-left" @click="selected = project">
            <div class="overflow-hidden rounded-xl border border-gold/25">
              <NuxtImg :src="project.image" :alt="project.title" class="h-44 w-full object-cover transition duration-500 hover:scale-105" />
            </div>
            <h3 class="mt-4 text-xl font-semibold">{{ project.title }}</h3>
            <p class="text-sm text-mist mt-2">{{ project.description }}</p>
          </button>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tech in project.stack" :key="tech" class="rounded-full border border-gold/30 px-3 py-1 text-xs text-gold">{{ tech }}</span>
          </div>
          <div class="mt-5 flex gap-3">
            <a :href="project.github" class="rounded-full border border-gold/60 px-4 py-2 text-sm text-gold hover:bg-gold/10 transition">GitHub</a>
            <a :href="project.demo" class="rounded-full border border-gold bg-gold px-4 py-2 text-sm text-canvas hover:opacity-90 transition">Live Demo</a>
          </div>
        </AnimatedCard>
      </div>
    </div>

    <transition name="fade">
      <div v-if="selected" class="fixed inset-0 z-[80] grid place-items-center bg-black/75 px-6" @click.self="selected = null">
        <article class="glass-card w-full max-w-2xl p-6">
          <h3 class="font-heading text-4xl text-gold">{{ selected.title }}</h3>
          <p class="mt-4 text-mist">{{ selected.description }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tech in selected.stack" :key="tech" class="rounded-full border border-gold/30 px-3 py-1 text-xs text-gold">{{ tech }}</span>
          </div>
          <button class="mt-6 rounded-full border border-gold px-4 py-2 text-gold" @click="selected = null">Close</button>
        </article>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import type { ProjectCategory, ProjectItem } from '~/composables/usePortfolioData'

const { projects } = usePortfolioData()
const tabs: ProjectCategory[] = ['All', 'Full Stack', 'Frontend', 'Backend']
const active = ref<ProjectCategory>('All')
const selected = ref<ProjectItem | null>(null)

const filteredProjects = computed(() => {
  if (active.value === 'All') return projects
  return projects.filter(project => project.category === active.value)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 240ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
