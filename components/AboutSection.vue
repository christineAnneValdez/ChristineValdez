<template>
  <section id="about" class="py-24">
    <div class="section-shell">
      <SectionTitle eyebrow="About" title="Elegant Solutions, Engineered for Impact" />
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="reveal">
          <p class="text-mist leading-8">I am a product-minded developer who blends system architecture with refined user experience. My focus is building reliable platforms that feel intentional, fast, and visually memorable.</p>
          <p class="text-mist leading-8 mt-6">My long-term goal is to architect scalable products while mentoring teams that care deeply about quality, craft, and meaningful outcomes.</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-3">
          <AnimatedCard v-for="stat in stats" :key="stat.label">
            <p class="font-heading text-4xl text-gold">{{ stat.value }}</p>
            <p class="text-sm text-mist mt-2">{{ stat.label }}</p>
          </AnimatedCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { stats } = usePortfolioData()
</script>
