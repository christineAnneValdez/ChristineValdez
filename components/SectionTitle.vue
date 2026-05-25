<template>
  <div class="mb-10 reveal">
    <p class="inline-block rounded-full border-2 border-ink/60 bg-mustard/55 px-4 py-1 text-sm uppercase tracking-[0.25em] text-ink">{{ eyebrow }}</p>
    <h2 class="font-heading text-4xl md:text-5xl text-ink mt-4 squiggle inline-block">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; eyebrow: string }>()
</script>
