/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    textend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["dark","cupcake","light",],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
