/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        "primary":"#5f6fff"
      },
      gridTemplateColumns:{
        'auto':"repeat(auto-fill, minmax(200px, 1fr))"
      }
    },
  },
  plugins: [],
}

