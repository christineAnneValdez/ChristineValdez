<template>
  <div class="mb-10 reveal">
    <p class="text-sm uppercase tracking-[0.35em] text-gold/80">{{ eyebrow }}</p>
    <h2 class="font-heading text-4xl md:text-5xl text-white mt-3">{{ title }}</h2>
    <div class="mt-4 h-px w-24 bg-gold/60" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; eyebrow: string }>()
</script>
