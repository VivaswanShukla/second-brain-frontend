/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#eeeeef",
          200: "#e6e9ed",
          600: "#95989c"
        },
        purple: {
          300: "#d9ddee",
          500: "#9492db",
          550: "#7f14cbff",
          600: "#6e11b0ff"
        }
      }
    },
  },
  plugins: [],
}

