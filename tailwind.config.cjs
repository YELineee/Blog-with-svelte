/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    textend: {
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["light",],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
}
