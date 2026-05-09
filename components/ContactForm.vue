<template>
  <section id="contact" class="py-24">
    <div class="section-shell">
      <SectionTitle eyebrow="Contact" title="Let&apos;s Build Something Exceptional" />
      <div class="grid gap-8 lg:grid-cols-2">
        <AnimatedCard>
          <form class="space-y-4">
            <input type="text" placeholder="Name" class="w-full rounded-xl border border-gold/30 bg-panel/70 p-3 text-sm outline-none focus:border-gold" />
            <input type="email" placeholder="Email" class="w-full rounded-xl border border-gold/30 bg-panel/70 p-3 text-sm outline-none focus:border-gold" />
            <textarea rows="5" placeholder="Message" class="w-full rounded-xl border border-gold/30 bg-panel/70 p-3 text-sm outline-none focus:border-gold" />
            <button type="button" class="rounded-full border border-gold bg-gold px-6 py-3 text-sm font-semibold text-canvas shadow-glow hover:opacity-90 transition">Send Message</button>
          </form>
        </AnimatedCard>
        <AnimatedCard>
          <p class="text-mist">Available for freelance, contract, and full-time engineering engagements.</p>
          <div class="mt-5 space-y-3 text-sm">
            <p><span class="text-gold">Email:</span> hello@portfolio.dev</p>
            <p><span class="text-gold">GitHub:</span> github.com/username</p>
            <p><span class="text-gold">LinkedIn:</span> linkedin.com/in/username</p>
          </div>
        </AnimatedCard>
      </div>
    </div>
  </section>
</template>
