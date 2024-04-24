/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily : {
        sans : ['Inter var']
      }
    },
  },
  plugins: [require("daisyui")],
}

