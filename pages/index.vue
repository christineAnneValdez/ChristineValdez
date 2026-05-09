<template>
  <div>
    <LoadingScreen />
    <FloatingParticles />
    <AppNavbar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsGrid />
      <ProjectsGallery />
      <ExperienceTimeline />
      <ContactForm />
    </main>
    <footer class="border-t border-gold/20 py-8 text-center text-sm text-mist">
      © {{ year }} Christine Valdez. Crafted with Nuxt 3.
    </footer>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
const { observeReveals } = useReveal()

onMounted(() => {
  observeReveals()
})
</script>
