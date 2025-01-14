/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'design-color': '#fceade',
        'primary-color': '#ff6725',
      },
    },
  },
  plugins: [
    daisyui,

  ],
}