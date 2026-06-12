<template>
  <section id="experience" class="py-24">
    <div class="section-shell">
      <SectionTitle eyebrow="Experience" />
      <div class="relative pl-8 space-y-8">
        <div class="absolute left-1 top-0 h-full w-1 rounded-full bg-ink/60" />
        <AnimatedCard v-for="item in experiences" :key="`${item.role}-${item.period}`">
          <p class="text-ink text-sm tracking-[0.18em] uppercase">{{ item.period }}</p>
          <h3 class="mt-2 text-3xl font-heading text-ink">{{ item.role }}</h3>
          <p class="mt-1 text-lg italic text-ink/80">{{ item.company }}</p>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-xl leading-8 text-ink/80">
            <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
        </AnimatedCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { experiences } = usePortfolioData()
</script>
