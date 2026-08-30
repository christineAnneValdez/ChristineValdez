<template>
  <section id="contact" class="py-24">
    <div class="section-shell">
      <SectionTitle eyebrow="Contact" />
      <div class="grid gap-8 lg:grid-cols-2">
        <AnimatedCard>
          <form class="space-y-4">
            <input type="text" placeholder="Name" class="w-full border-2 border-ink/70 bg-paper p-3 text-lg text-ink outline-none focus:bg-ochre/20" />
            <input type="email" placeholder="Email" class="w-full border-2 border-ink/70 bg-paper p-3 text-lg text-ink outline-none focus:bg-ochre/20" />
            <textarea rows="5" placeholder="Message" class="w-full border-2 border-ink/70 bg-paper p-3 text-lg text-ink outline-none focus:bg-ochre/20" />
            <button type="button" class="urban-button bg-brick/75 text-lg">Send Message</button>
          </form>
        </AnimatedCard>
        <AnimatedCard>
          <p class="text-2xl text-ink/80">Available for freelance, contract, and full-time engineering partnerships.</p>
          <div class="mt-5 space-y-3 text-xl text-ink">
            <p><span class="font-heading">Email:</span> hello@portfolio.dev</p>
            <p><span class="font-heading">GitHub:</span> github.com/username</p>
            <p><span class="font-heading">LinkedIn:</span> linkedin.com/in/username</p>
          </div>
        </AnimatedCard>
      </div>
    </div>
  </section>
</template>
