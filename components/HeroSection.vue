<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
  >
    <div class="section-shell grid gap-12 lg:grid-cols-2 items-center">
      <div class="reveal">
        <p class="text-ink text-lg md:text-xl uppercase tracking-[0.18em]">
          Hey there, I am
        </p>
        <h1
          class="font-heading text-5xl md:text-7xl mt-5 leading-tight text-ink"
        >
          {{ hero.role }}
        </h1>
        <p class="max-w-xl mt-6 text-2xl text-ink/90">{{ hero.intro }}</p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            class="rounded-full border-2 border-ink bg-coral px-6 py-3 text-ink font-semibold transition hover:-rotate-1"
            >Contact Me</a
          >
          <a
            href="#projects"
            class="rounded-full border-2 border-ink bg-sky/55 px-6 py-3 text-ink transition hover:rotate-1"
            >View Projects</a
          >
        </div>
      </div>
      <div class="relative flex min-h-[560px] items-center justify-center reveal">
        <div class="polaroid-frame rotate-[1.4deg]">
          <div class="polaroid-photo">
            <NuxtImg
              src="/images/cover3.png"
              alt="Profile portrait"
              class="h-full w-full translate-y-4 object-contain object-center rotate-[1.4deg]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { hero } = usePortfolioData();
</script>

<style scoped>
.polaroid-frame {
  width: min(100%, 420px);
  margin-inline: auto;
  padding: 18px 18px 78px;
  border: 1px solid rgba(41, 33, 26, 0.2);
  background: #f8f7f2;
  box-shadow:
    0 18px 36px rgba(41, 33, 26, 0.18),
    8px 10px 0 rgba(41, 33, 26, 0.12);
}

.polaroid-photo {
  aspect-ratio: 1;
  overflow: hidden;
  background: #efe6d2;
}
</style>
