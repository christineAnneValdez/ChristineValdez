import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#1e1f26',
        panel: '#25262e',
        gold: '#d4a64f',
        mist: '#b0b0b0'
      },
      boxShadow: {
        glow: '0 0 32px rgba(212,166,79,0.18)',
        soft: '0 10px 30px rgba(0,0,0,0.35)'
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['"Manrope"', 'sans-serif']
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(120deg, rgba(212,166,79,0.2), rgba(212,166,79,0.03))'
      }
    }
  }
}
