<template>
  <div class="mb-10 reveal">
    <p class="inline-block border-2 border-ink/60 bg-ochre/45 px-4 py-1.5 text-lg md:text-xl uppercase tracking-[0.25em] text-ink">{{ eyebrow }}</p>
    <h2 v-if="title" class="font-heading text-4xl md:text-5xl text-ink mt-4 squiggle inline-block">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{ eyebrow: string; title?: string }>()
</script>
