/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f19509",
        primaryDark: "#e86f00",
        darkGrey: "#1a1f25",
        lightOrange: "#f1dabf",
        lightGray: "#272c35",
      },
    },
    container: {
      center: true, // Ensures the container is always centered
      padding: {
        sm: "2rem",
      },
      // screens: {
      //   sm: '600px',
      //   md: '750px',
      //   lg: '1000px',
      //   xl: '1200px',
      //   '2xl': '1400px',
     
      //  }
    }
  },
  plugins: [],
};
