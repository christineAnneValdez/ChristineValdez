<template>
  <section id="home" class="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden watercolor-wash">
    <div class="section-shell grid gap-12 lg:grid-cols-2 items-center">
      <div class="reveal">
        <p class="text-graphite text-lg md:text-xl uppercase tracking-[0.18em]">
          Urban sketch portfolio
        </p>
        <h1 class="font-heading text-5xl md:text-7xl mt-5 leading-tight text-ink">{{ hero.role }}</h1>
        <p class="max-w-xl mt-6 text-2xl text-ink/90">{{ hero.intro }}</p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#contact" class="urban-button bg-brick/75">Contact Me</a>
          <a href="#projects" class="urban-button bg-skywash/65">View Projects</a>
        </div>
      </div>
      <div class="relative reveal">
        <div class="absolute -inset-4 border-2 border-ink/55 border-dashed -rotate-2 sketch-photo" />
        <NuxtImg src="/images/cover 1.jpg" alt="Profile portrait" class="relative h-[520px] w-full object-cover rotate-[1.4deg] sketch-photo" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { hero } = usePortfolioData()
</script>
