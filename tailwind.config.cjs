/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    themes: ["dark", "dark", "cmyk"],
  },
  plugins: [require("daisyui")],
}
