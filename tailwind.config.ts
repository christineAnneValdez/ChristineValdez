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
        paper: '#f7f0df',
        ink: '#221f1a',
        graphite: '#5f615b',
        brick: '#b9654f',
        skywash: '#9bb7c7',
        sage: '#899779',
        ochre: '#d8a449'
      },
      boxShadow: {
        sketch: '8px 10px 0 rgba(34, 31, 26, 0.14), 0 22px 46px rgba(34, 31, 26, 0.12)'
      },
      fontFamily: {
        heading: ['"Architects Daughter"', 'cursive'],
        body: ['"Patrick Hand"', 'cursive']
      }
    }
  }
}
