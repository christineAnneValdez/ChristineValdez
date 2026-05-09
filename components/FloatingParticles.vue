<template>
  <div class="fixed inset-0 -z-10 overflow-hidden">
    <div
      v-for="particle in particles"
      :key="particle.id"
      class="absolute rounded-full bg-gold/20 blur-md"
      :style="{
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        animationDuration: `${particle.duration}s`
      }"
    />
  </div>
</template>

<script setup lang="ts">
const particles = Array.from({ length: 12 }, (_, id) => ({
  id,
  size: 8 + Math.random() * 26,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: 9 + Math.random() * 12
}))
</script>

<style scoped>
div[class*='absolute'] {
  animation: floatY ease-in-out infinite alternate;
}

@keyframes floatY {
  from {
    transform: translateY(-8px);
    opacity: 0.35;
  }

  to {
    transform: translateY(18px);
    opacity: 0.75;
  }
}
</style>
