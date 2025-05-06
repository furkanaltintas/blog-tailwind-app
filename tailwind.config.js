/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto+Slab"],
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.02, 0.01, 0.47, 1)',
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [],
};
