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
    <footer class="border-t-2 border-ink/55 bg-paper/80 py-8 text-center text-lg text-ink/80">
      Copyright {{ year }} Christine Anne Valdez
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
