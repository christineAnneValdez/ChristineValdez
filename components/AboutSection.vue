<template>
  <section id="about" class="py-24">
    <div class="section-shell">
      <SectionTitle eyebrow="About" />
      <div class="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div class="reveal text-2xl leading-9 text-ink/90">
          <p
            v-for="(paragraph, index) in about.paragraphs"
            :key="paragraph"
            :class="index === 0 ? '' : 'mt-6'"
          >
            {{ paragraph }}
          </p>
        </div>
        <div class="self-start">
          <div class="grid gap-4">
            <AnimatedCard v-for="stat in stats" :key="stat.label">
              <p class="font-heading text-4xl text-ink">{{ stat.value }}</p>
              <p class="text-lg text-ink/80 mt-2">{{ stat.label }}</p>
            </AnimatedCard>
          </div>
          <div class="mt-6 overflow-hidden rounded-[1.6rem] border-2 border-ink/70 bg-paper shadow-doodle reveal">
            <NuxtImg :src="about.imageSrc" :alt="about.imageAlt" class="h-52 w-full object-cover md:h-64" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { about, stats } = usePortfolioData()
</script>
