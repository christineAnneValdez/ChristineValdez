<template>
  <section id="experience" class="py-24">
    <div class="section-shell">
      <SectionTitle eyebrow="Experience" title="Career Timeline" />
      <div class="relative border-l border-gold/40 pl-8 space-y-8">
        <AnimatedCard v-for="item in experiences" :key="item.year">
          <p class="text-gold text-sm tracking-[0.18em] uppercase">{{ item.year }}</p>
          <h3 class="mt-2 text-xl font-semibold">{{ item.role }} • {{ item.company }}</h3>
          <p class="mt-3 text-mist text-sm leading-7">{{ item.description }}</p>
          <p class="mt-4 text-xs text-gold/80">{{ item.tech.join(' • ') }}</p>
        </AnimatedCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { experiences } = usePortfolioData()
</script>
