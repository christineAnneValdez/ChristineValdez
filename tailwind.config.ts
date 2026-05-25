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
        paper: '#fffaf0',
        ink: '#29211a',
        coral: '#ff8566',
        sky: '#70c7fc',
        mint: '#88dc9b',
        mustard: '#ffd166'
      },
      boxShadow: {
        doodle: '0 10px 0 rgba(41, 33, 26, 0.18), 0 20px 34px rgba(41, 33, 26, 0.14)'
      },
      fontFamily: {
        heading: ['"Fredoka"', 'cursive'],
        body: ['"Patrick Hand"', 'cursive']
      }
    }
  }
}
