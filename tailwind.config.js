module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/laptop.jpg')",
      },

      colors: {
        secondary: "#dc143c",
        crimson: "#ed143d",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif", "sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
