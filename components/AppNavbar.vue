<template>
  <header class="fixed left-0 right-0 top-0 z-50 border-b border-gold/10 bg-canvas/60 backdrop-blur-lg">
    <nav class="section-shell flex items-center justify-between py-4">
      <a href="#home" class="font-heading text-2xl text-gold">CV</a>
      <ul class="hidden md:flex items-center gap-6 text-sm text-mist">
        <li v-for="item in links" :key="item.href"><a :href="item.href" class="transition hover:text-gold">{{ item.label }}</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
]
</script>
