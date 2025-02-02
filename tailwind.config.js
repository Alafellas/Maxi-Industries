module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#ebffff",
        test:"#2596be",
        white:"#ffffff",
        black:"#000000",
        maxiColor:"#007bff"
      },
      fontFamily: {
        helvetica: ['Helvetica Neue LT Pro', 'Helvetica', 'Arial', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
      },
      letterSpacing: {
        extra: "0.2em",
        superwide: "0.3em",
      },
    },
  },
  plugins: [],
};

