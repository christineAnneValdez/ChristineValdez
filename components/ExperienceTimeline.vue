<template>
  <section id="experience" class="py-24">
    <div class="section-shell">
      <SectionTitle eyebrow="Experience" title="Timeline in marker strokes" />
      <div class="relative pl-8 space-y-8">
        <div class="absolute left-1 top-0 h-full w-1 rounded-full bg-ink/60" />
        <AnimatedCard v-for="item in experiences" :key="item.year">
          <p class="text-ink text-sm tracking-[0.18em] uppercase">{{ item.year }}</p>
          <h3 class="mt-2 text-3xl font-heading text-ink">{{ item.role }} • {{ item.company }}</h3>
          <p class="mt-3 text-xl leading-8 text-ink/80">{{ item.description }}</p>
          <p class="mt-4 text-sm text-ink/80">{{ item.tech.join(' • ') }}</p>
        </AnimatedCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { experiences } = usePortfolioData()
</script>
