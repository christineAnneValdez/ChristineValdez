<template>
  <section id="projects" class="py-24">
    <div class="section-shell">
      <SectionTitle eyebrow="Projects"/>
      <div class="flex flex-wrap items-start justify-center gap-6 md:gap-8">
        <AnimatedCard
          v-for="(project, index) in projects"
          :key="project.title"
          class="w-full md:w-[47%] lg:w-[47%]"
          :class="placementClasses[index % placementClasses.length]"
        >
          <NuxtLink :to="`/projects/${project.slug}`" class="block focus:outline-none">
            <div class="overflow-hidden rounded-2xl border-2 border-ink/65">
              <NuxtImg
                :src="project.image"
                :alt="project.title"
                class="h-44 md:h-52 lg:h-60 w-full bg-paper transition duration-500 hover:scale-105"
                :class="project.imageFit === 'cover' ? 'object-cover' : 'object-contain'"
              />
            </div>
          </NuxtLink>
        </AnimatedCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { projects } = usePortfolioData()

const placementClasses = [
  'md:-rotate-2 md:mt-2',
  'md:rotate-2 md:mt-10',
  'md:-rotate-1 md:-mt-2',
  'md:rotate-1 md:mt-6',
  'md:-rotate-2 md:mt-12',
  'md:rotate-2 md:mt-1'
]
</script>
