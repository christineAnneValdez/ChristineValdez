<template>
  <section id="about" class="py-24">
    <div class="section-shell">
      <SectionTitle eyebrow="About" />
      <div class="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div class="reveal text-2xl leading-9 text-ink/90">
          <p>A dedicated Full Stack Developer with experience in web development, maintenance, technical documentation,
deployment, debugging, troubleshooting, virtual assistance, and AI-assisted tools and workflows. Skilled in
transforming designs and ideas into structured, functional systems and applications.</p>
          <p class="mt-6">Enthusiastic and eager to
learn new technologies and adapt to unfamiliar projects focused on innovation. Strongly focused on creativity,
organization, communication, security, problem-solving, and delivering high-quality results for clients and teams.</p>
        </div>
        <div class="self-start">
          <div class="grid gap-4 sm:grid-cols-3">
            <AnimatedCard v-for="stat in stats" :key="stat.label">
              <p class="font-heading text-4xl text-ink">{{ stat.value }}</p>
              <p class="text-lg text-ink/80 mt-2">{{ stat.label }}</p>
            </AnimatedCard>
          </div>
          <div class="mt-6 overflow-hidden rounded-[1.6rem] border-2 border-ink/70 bg-paper shadow-doodle reveal">
            <NuxtImg src="/images/covver 2.jpg" alt="About cover image" class="h-52 w-full object-cover md:h-64" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { stats } = usePortfolioData()
</script>
