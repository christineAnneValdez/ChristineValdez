<template>
  <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <span
      v-for="particle in particles"
      :key="particle.id"
      class="absolute rounded-full border-2 border-ink/55"
      :style="{
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        backgroundColor: particle.color,
        animationDuration: `${particle.duration}s`
      }"
    />
  </div>
</template>

<script setup lang="ts">
const palette = ['rgba(255, 133, 102, 0.25)', 'rgba(112, 199, 252, 0.25)', 'rgba(136, 220, 155, 0.24)', 'rgba(255, 209, 102, 0.25)']

const particles = Array.from({ length: 14 }, (_, id) => ({
  id,
  size: 14 + Math.random() * 34,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: 8 + Math.random() * 10,
  color: palette[Math.floor(Math.random() * palette.length)]
}))
</script>

<style scoped>
span {
  animation: doodle-float ease-in-out infinite alternate;
}

@keyframes doodle-float {
  from {
    transform: translateY(-10px) rotate(0deg);
    opacity: 0.45;
  }

  to {
    transform: translateY(15px) rotate(8deg);
    opacity: 0.85;
  }
}
</style>
