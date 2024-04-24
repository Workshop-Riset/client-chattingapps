/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      themes: ["light", "dark", "cupcake"],
    },
  },
  plugins: [require("daisyui")],
 
}

