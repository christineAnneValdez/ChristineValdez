<template>
  <section id="home" class="relative min-h-screen flex items-center pt-24 pb-16">
    <div class="section-shell grid gap-12 lg:grid-cols-2 items-center">
      <div class="reveal">
        <p class="text-gold tracking-[0.25em] uppercase text-sm">Hi, I&apos;m {{ hero.name }}</p>
        <h1 class="font-heading text-5xl md:text-7xl mt-4 leading-tight">{{ hero.role }}</h1>
        <p class="text-mist max-w-xl mt-6 text-lg">{{ hero.intro }}</p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#contact" class="rounded-full border border-gold bg-gold px-6 py-3 text-canvas font-semibold shadow-glow transition hover:opacity-90">Contact Me</a>
          <a href="#projects" class="rounded-full border border-gold/70 px-6 py-3 text-gold transition hover:bg-gold/10">View Projects</a>
        </div>
      </div>
      <div class="relative reveal">
        <div class="absolute -inset-6 rounded-[2rem] bg-gold-gradient blur-2xl" />
        <NuxtImg src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=80" alt="Profile portrait placeholder" class="relative h-[520px] w-full rounded-[2rem] object-cover border border-gold/35 shadow-glow" />
        <div class="absolute right-[-44px] top-1/2 hidden -translate-y-1/2 md:flex flex-col gap-4">
          <a href="#" class="text-gold/70 hover:text-gold transition">GH</a>
          <a href="#" class="text-gold/70 hover:text-gold transition">LI</a>
          <a href="#" class="text-gold/70 hover:text-gold transition">X</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { hero } = usePortfolioData()
</script>
