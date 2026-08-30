<template>
  <transition name="fade">
    <div v-if="show" class="fixed inset-0 z-[100] grid place-content-center bg-paper watercolor-wash">
      <div class="text-center">
        <p class="font-heading text-6xl text-ink -rotate-2">CV</p>
        <p class="mt-3 text-xl text-ink/75">Inking the city lines...</p>
      </div>
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
