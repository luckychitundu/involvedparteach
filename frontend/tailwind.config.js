/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        fade: "fade 5s ease-in-out infinite",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },


  plugins: [],
}

