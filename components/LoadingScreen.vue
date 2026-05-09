<template>
  <transition name="fade">
    <div v-if="show" class="fixed inset-0 z-[100] grid place-content-center bg-canvas">
      <p class="font-heading text-5xl text-gold tracking-[0.3em]">CV</p>
    </div>
  </transition>
</template>

<script setup lang="ts">
const show = ref(true)

onMounted(() => {
  window.setTimeout(() => {
    show.value = false
  }, 1200)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 550ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
