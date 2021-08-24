module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          swadesh: "#032C28",
        },
        yellow: {
          swadesh: "#F5F3F0",
        },
        orange: {
          swadesh: "#CB912C",
        },
        gray: {
          ring: "#06433C",
        },
      },
      spacing: {
        100: "30rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
