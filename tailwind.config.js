/** Build statica che sostituisce il Tailwind Play CDN.
 *  Stesso tema (colori, font, max-width) già definito inline nell'HTML — nessuna modifica visiva.
 *
 *  Come rigenerare assets/css/tailwind.css dopo aver modificato le classi nell'HTML
 *  (nessun package.json nel repo di proposito: Cloudflare avvierebbe "npm install"
 *  ad ogni deploy e includerebbe node_modules tra i file pubblicati):
 *
 *    npm install --no-save tailwindcss@^3
 *    npx tailwindcss -i ./assets/css/tailwind-input.css -o ./assets/css/tailwind.css --minify
 */
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
