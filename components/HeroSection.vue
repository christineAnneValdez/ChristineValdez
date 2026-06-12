<template>
  <section id="home" class="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
    <div class="section-shell grid gap-12 lg:grid-cols-2 items-center">
      <div class="reveal">
        <p class="text-ink text-lg md:text-xl uppercase tracking-[0.18em]">
          Hey there, I am
        </p>
        <h1 class="font-heading text-5xl md:text-7xl mt-5 leading-tight text-ink">{{ hero.role }}</h1>
        <p class="max-w-xl mt-6 text-2xl text-ink/90">{{ hero.intro }}</p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#contact" class="rounded-full border-2 border-ink bg-coral px-6 py-3 text-ink font-semibold transition hover:-rotate-1">Contact Me</a>
          <a href="#projects" class="rounded-full border-2 border-ink bg-sky/55 px-6 py-3 text-ink transition hover:rotate-1">View Projects</a>
        </div>
      </div>
      <div class="relative reveal">
        <div class="absolute -inset-4 rounded-[2rem] border-2 border-ink/65 border-dashed -rotate-2" />
        <NuxtImg src="/images/cover 1.jpg" alt="Profile portrait" class="relative h-[520px] w-full rounded-[2rem] object-cover border-2 border-ink shadow-doodle rotate-[1.4deg]" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { hero } = usePortfolioData()
</script>
