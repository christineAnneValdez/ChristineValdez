<template>
  <div>
    <FloatingParticles />
    <AppNavbar />
    <main class="py-20 md:py-24">
      <section class="section-shell">
        <div class="mb-8">
          <NuxtLink
            to="/#projects"
            class="inline-flex items-center rounded-full border-2 border-ink/60 px-4 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-ink hover:text-paper"
          >
            Back to projects
          </NuxtLink>
        </div>

        <article>
          <h1 class="mb-2 text-3xl md:text-5xl font-black tracking-tight text-ink">{{ project.title }}</h1>
          <p class="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-ink/70">{{ project.category }}</p>

          <NuxtImg
            :src="project.image"
            :alt="project.title"
            class="mb-8 w-full h-auto rounded-2xl border-2 border-ink/65 object-contain"
          />

          <div v-if="projectLinks.length" class="mb-8 flex flex-wrap gap-3">
            <a
              v-for="link in projectLinks"
              :key="link.label"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center rounded-full border-2 border-ink px-5 py-2.5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-ink hover:text-paper"
            >
              {{ link.label }}
            </a>
          </div>

          <p class="mb-8 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-ink/85 text-justify">
            {{ project.description }}
          </p>

          <ul
            v-if="project.highlights?.length"
            class="mb-8 max-w-4xl mx-auto list-disc pl-6 space-y-2 text-lg md:text-xl leading-relaxed text-ink/85 text-justify"
          >
            <li v-for="(item, index) in project.highlights" :key="`${project.slug}-highlight-${index}`">
              {{ item }}
            </li>
          </ul>

          <div class="mb-10 flex flex-wrap gap-3">
            <span
              v-for="item in project.stack"
              :key="item"
              class="rounded-full border-2 border-ink/65 bg-paper px-4 py-1.5 text-base md:text-lg font-semibold text-ink"
            >
              {{ item }}
            </span>
          </div>

          <section v-if="project.gallery?.length">
            <h2 class="mb-4 text-xl md:text-2xl font-black text-ink">Gallery</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <NuxtImg
                v-for="(photo, index) in project.gallery"
                :key="`${project.slug}-gallery-${index}`"
                :src="photo"
                :alt="`${project.title} gallery image ${index + 1}`"
                class="h-52 w-full rounded-2xl border-2 border-ink/65 object-cover"
              />
            </div>
          </section>
        </article>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { getProjectBySlug } = usePortfolioData()

const project = computed(() => getProjectBySlug(String(route.params.slug)))
const projectLinks = computed(() => {
  if (!project.value) {
    return []
  }

  return [
    { label: 'View code', url: project.value.github },
    { label: 'Live demo', url: project.value.demo }
  ].filter(link => Boolean(link.url && link.url !== '#'))
})

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found'
  })
}
</script>
