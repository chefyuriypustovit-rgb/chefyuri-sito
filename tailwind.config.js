/** Build statica che sostituisce il Tailwind Play CDN.
 *  Stesso tema (colori, font, max-width) già definito inline nell'HTML — nessuna modifica visiva. */
module.exports = {
  content: ["./index.html", "./esperienze/*.html", "./assets/js/*.js"],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F3',
        ink: '#1C1C1A',
        forest: '#142118',
        gold: '#C6A664',
        'gold-deep': '#8C6B34',
        line: '#E7E2D5',
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
      },
    },
  },
  plugins: [],
}
