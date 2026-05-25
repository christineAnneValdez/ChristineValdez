<template>
  <section id="skills" class="py-24">
    <div class="section-shell">
      <SectionTitle eyebrow="Skills" />
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatedCard v-for="skill in skills" :key="skill.name">
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 rounded-2xl border-2 border-ink bg-mint/45 grid place-content-center text-ink text-lg font-semibold">{{ skill.icon }}</div>
            <div>
              <h3 class="text-2xl font-semibold text-ink">{{ skill.name }}</h3>
              <p class="text-lg text-ink/75">{{ skill.category }} � {{ skill.level }}</p>
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
