<template>
  <section id="projects" class="py-24">
    <div class="section-shell">
      <SectionTitle eyebrow="Projects" />
      <div class="grid gap-6 lg:grid-cols-3">
        <AnimatedCard v-for="project in projects" :key="project.title">
          <button class="w-full text-left" @click="selected = project">
            <div class="overflow-hidden rounded-2xl border-2 border-ink/65">
              <NuxtImg :src="project.image" :alt="project.title" class="h-44 w-full object-cover transition duration-500 hover:scale-105" />
            </div>
            <h3 class="mt-4 text-3xl font-heading text-ink">{{ project.title }}</h3>
            <p class="text-lg text-ink/80 mt-2">{{ project.description }}</p>
          </button>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tech in project.stack" :key="tech" class="rounded-full border-2 border-ink/65 bg-mustard/50 px-3 py-1 text-sm text-ink">{{ tech }}</span>
          </div>
          <div class="mt-5 flex gap-3">
            <a :href="project.github" class="rounded-full border-2 border-ink bg-paper px-4 py-2 text-sm text-ink hover:-rotate-1 transition">GitHub</a>
            <a :href="project.demo" class="rounded-full border-2 border-ink bg-sky px-4 py-2 text-sm text-ink hover:rotate-1 transition">Live Demo</a>
          </div>
        </AnimatedCard>
      </div>
    </div>

    <transition name="fade">
      <div v-if="selected" class="fixed inset-0 z-[80] grid place-items-center bg-ink/65 px-6" @click.self="selected = null">
        <article class="glass-card w-full max-w-2xl p-6 bg-paper">
          <h3 class="font-heading text-5xl text-ink">{{ selected.title }}</h3>
          <p class="mt-4 text-xl text-ink/85">{{ selected.description }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tech in selected.stack" :key="tech" class="rounded-full border-2 border-ink/65 bg-mint/45 px-3 py-1 text-sm text-ink">{{ tech }}</span>
          </div>
          <button class="mt-6 rounded-full border-2 border-ink bg-coral px-4 py-2 text-ink" @click="selected = null">Close</button>
        </article>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import type { ProjectItem } from '~/composables/usePortfolioData'

const { projects } = usePortfolioData()
const selected = ref<ProjectItem | null>(null)
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
