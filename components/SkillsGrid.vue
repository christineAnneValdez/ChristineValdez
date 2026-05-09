<template>
  <section id="skills" class="py-24">
    <div class="section-shell">
      <SectionTitle eyebrow="Skills" title="Technology Stack" />
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatedCard v-for="skill in skills" :key="skill.name">
          <div class="flex items-center gap-4">
            <div class="h-11 w-11 rounded-xl border border-gold/40 bg-gold/10 grid place-content-center text-gold font-semibold">{{ skill.icon }}</div>
            <div>
              <h3 class="text-lg font-semibold">{{ skill.name }}</h3>
              <p class="text-sm text-mist">{{ skill.category }} • {{ skill.level }}</p>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { skills } = usePortfolioData()
</script>
