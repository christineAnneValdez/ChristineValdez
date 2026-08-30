<template>
  <section id="contact" class="py-24">
    <div class="section-shell">
      <SectionTitle eyebrow="Contact" />
      <div class="grid gap-8 lg:grid-cols-2">
        <AnimatedCard>
          <form class="space-y-4">
            <input type="text" placeholder="Name" class="w-full rounded-2xl border-2 border-ink/70 bg-paper p-3 text-lg text-ink outline-none focus:bg-mustard/25" />
            <input type="email" placeholder="Email" class="w-full rounded-2xl border-2 border-ink/70 bg-paper p-3 text-lg text-ink outline-none focus:bg-mustard/25" />
            <textarea rows="5" placeholder="Message" class="w-full rounded-2xl border-2 border-ink/70 bg-paper p-3 text-lg text-ink outline-none focus:bg-mustard/25" />
            <button type="button" class="rounded-full border-2 border-ink bg-coral px-6 py-3 text-lg font-semibold text-ink hover:-rotate-1 transition">Send Message</button>
          </form>
        </AnimatedCard>
        <AnimatedCard>
          <p class="text-2xl text-ink/80">Available for freelance, contract, and full-time engineering partnerships.</p>
          <div class="mt-5 flex flex-wrap gap-4 text-xl text-ink">
            <a
              v-for="contact in contacts"
              :key="contact.label"
              :href="contact.href"
              :aria-label="contact.label"
              class="group inline-flex transition hover:-translate-y-1 hover:-rotate-3"
            >
              <span class="grid h-11 w-11 place-content-center rounded-full border-2 border-ink bg-paper transition group-hover:bg-coral group-hover:shadow-doodle">
                <img :src="contact.icon" :alt="contact.label" class="h-6 w-6 transition group-hover:scale-110" loading="lazy">
              </span>
            </a>
          </div>
        </AnimatedCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const contacts = [
  {
    label: 'Email',
    value: 'hello@portfolio.dev',
    href: 'mailto:hello@portfolio.dev',
    icon: 'https://api.iconify.design/mdi:email-outline.svg'
  },
  {
    label: 'GitHub',
    value: 'github.com/username',
    href: 'https://github.com/username',
    icon: 'https://api.iconify.design/mdi:github.svg'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/username',
    href: 'https://linkedin.com/in/username',
    icon: 'https://api.iconify.design/mdi:linkedin.svg'
  }
]
</script>
