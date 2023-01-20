/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    colors: {
      "azul-oscuro": '#0B111E',
      "span": '#1692AA',
      "bgAzul": '#047E96',
      "white": '#ffffff',
      "black": "#080C15",
    },
    fontFamily: {
      "sans": ['Lato', 'sans-serif'],
      "heading": ['Poppins', 'sans-serif']
    },
    fontSize: {
      "4xl": '48px',
      "2xl": '32px',
      "xl": '24px',
      "label-xl": '18px',
      "label-lg": '17px',
      "label": '16px',
      "lg": '20px',
      "md": '18px',
      "sm": '16px',
    },
    backdropBlur:{
      "borroso": "-webkit-backdrop-filter: blur(6px);"
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
