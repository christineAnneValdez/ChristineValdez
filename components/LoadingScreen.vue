<template>
  <transition name="fade">
    <div v-if="show" class="fixed inset-0 z-[100] grid place-content-center overflow-hidden bg-[#fff8e7] px-6">
      <div class="loader-sketch text-center">
        <svg
          class="mx-auto h-52 w-72 max-w-[82vw]"
          viewBox="0 0 288 208"
          role="img"
          aria-labelledby="loader-title"
        >
          <title id="loader-title">Sketching the portfolio</title>
          <path class="sketch-line delay-1" d="M63 28c42-5 111-6 164 1 9 1 16 8 17 17 5 35 4 77-1 115-1 9-8 16-17 17-49 6-110 5-164 0-10-1-17-9-18-19-4-37-3-75 1-113 1-9 8-16 18-18Z" />
          <path class="sketch-line delay-2" d="M62 61c44 4 119 2 181-1" />
          <path class="sketch-line delay-3" d="M81 47c1-4 5-7 9-6 5 0 8 4 8 8s-4 8-8 8c-5 0-8-4-9-10Z" />
          <path class="sketch-line delay-4" d="M109 46c2-4 5-6 9-5 4 1 7 4 7 8-1 4-4 8-9 8-4 0-8-4-7-11Z" />
          <path class="sketch-line delay-5" d="M85 84c22-5 46-6 69-1 5 1 9 6 9 11v37c0 6-4 11-10 12-23 5-46 4-68-2-5-1-9-6-9-12V96c0-6 4-11 9-12Z" />
          <path class="sketch-line delay-6" d="M96 124c9-12 17-18 25-18 9 0 15 8 24 21" />
          <path class="sketch-line delay-7" d="M170 87c22-3 43-3 62 1" />
          <path class="sketch-line delay-8" d="M171 106c18-2 36-1 53 1" />
          <path class="sketch-line delay-9" d="M171 126c14-1 29-1 44 2" />
          <path class="sketch-line delay-10" d="M82 158c38 5 92 7 147 1" />
          <path class="pencil" d="M213 153l31-31 15 15-31 31-21 6 6-21Z" />
          <path class="pencil-tip" d="M207 174l8-19 12 12-20 7Z" />
        </svg>
        <p class="mt-5 font-heading text-4xl text-ink -rotate-1 md:text-5xl">CV</p>
        <p class="mt-2 text-xl text-ink/75">Sketching the portfolio...</p>
        <div class="mt-5 h-3 w-64 max-w-[76vw] overflow-hidden rounded-full border-2 border-ink/70 bg-paper">
          <div class="loading-stroke h-full w-1/2 rounded-full bg-coral"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const show = ref(true)

onMounted(() => {
  window.setTimeout(() => {
    show.value = false
  }, 2800)
})
</script>

<style scoped>
.loader-sketch {
  animation: loader-breathe 1400ms ease-in-out infinite;
}

.sketch-line,
.pencil,
.pencil-tip {
  fill: none;
  stroke: #29211a;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 5;
}

.sketch-line {
  stroke-dasharray: 420;
  stroke-dashoffset: 420;
  animation: draw-line 1500ms ease forwards;
}

.pencil {
  fill: #ffd166;
  animation: pencil-move 1300ms ease-in-out infinite;
}

.pencil-tip {
  fill: #ff8566;
  animation: pencil-move 1300ms ease-in-out infinite;
}

.delay-1 {
  animation-delay: 80ms;
}

.delay-2 {
  animation-delay: 180ms;
}

.delay-3 {
  animation-delay: 300ms;
}

.delay-4 {
  animation-delay: 380ms;
}

.delay-5 {
  animation-delay: 480ms;
}

.delay-6 {
  animation-delay: 620ms;
}

.delay-7 {
  animation-delay: 740ms;
}

.delay-8 {
  animation-delay: 860ms;
}

.delay-9 {
  animation-delay: 980ms;
}

.delay-10 {
  animation-delay: 1100ms;
}

.loading-stroke {
  animation: loading-slide 1050ms ease-in-out infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 550ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes draw-line {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes loading-slide {
  0% {
    transform: translateX(-105%);
  }

  50% {
    transform: translateX(45%);
  }

  100% {
    transform: translateX(205%);
  }
}

@keyframes pencil-move {
  0%,
  100% {
    transform: translate(-4px, 4px) rotate(-2deg);
  }

  50% {
    transform: translate(3px, -3px) rotate(2deg);
  }
}

@keyframes loader-breathe {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-6px);
  }
}
</style>
