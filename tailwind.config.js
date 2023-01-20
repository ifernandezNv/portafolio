/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js}"],
  theme: {
    colors: {
      "bgNegro": '#0B111E',
      "span": '#1692AA',
      "bgAzul": '#047E96'
    },
    fontFamily: {
      "lato": ['Lato', 'sans-serif'],
      "poppins": ['Poppins', 'sans-serif']
    },
    extend: {
      borderRadius: {
        DEFAULT: "10px 10px 10px 10px",
        "top": "10px 10px 0 0"
      },
      boxShadow: {
        DEFAULT: "0px 1px 60px rgba(180, 169, 227, 0.2)"
      }
    },
  },
  plugins: [],
}
