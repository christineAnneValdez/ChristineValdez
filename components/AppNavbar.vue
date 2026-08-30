<template>
  <header class="fixed left-0 right-0 top-0 z-50 border-b-2 border-ink/65 bg-paper/90 backdrop-blur-md">
    <nav class="section-shell flex items-center justify-between py-4">
      <NuxtLink to="/#home" class="font-heading text-3xl text-ink -rotate-2">CV</NuxtLink>
      <ul class="hidden md:flex items-center gap-5 text-lg text-ink/90">
        <li v-for="item in links" :key="item.to">
          <NuxtLink :to="item.to" class="rounded-full border-2 border-transparent px-3 py-1 transition hover:border-ink/50 hover:-rotate-2">{{ item.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const links = [
  { label: 'Home', to: '/#home' },
  { label: 'About', to: '/#about' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Experience', to: '/#experience' },
  { label: 'Contact', to: '/#contact' }
]
</script>
