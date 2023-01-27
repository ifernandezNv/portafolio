/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    colors: {
      "azul-oscuro": '#0B111E',
      "span": '#1692AA',
      "bgAzul": '#047E96',
      "white": '#ffffff',
      "black": "#080C15",
      "gris-claro": '#D2D6D9',
      "azul-rey": '#06090F'
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
      "movil-4xl": '24px',
      "movil-2xl": '20px',
      "movil-xl": '16px',
      "movil-lg": '14px',
      "movil-md": '12px'
    },
    backdropBlur:{
      "filter": "backdrop-filter: blur(6px);"
    },
    extend: {
      borderRadius: {
        DEFAULT: "10px 10px 10px 10px",
        "top": "10px 10px 0 0",
        "left": "10px 0 0 10px",
      },
      boxShadow: {
        DEFAULT: "0px 1px 60px rgba(180, 169, 227, 0.2)"
      }
    },
  },
  plugins: [
    addDynamicIconSelectors()
  ],
}
