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
      fontFamily: {
        Poppins : ['Poppins', 'serif'],
        Raleway : ['Raleway', 'serif'],
      }
    },
    container: {
      center: true, // Ensures the container is always centered
      padding: {
        sm: "2rem",
      },
      
    }
  },
  plugins: [],
};
