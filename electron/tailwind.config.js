export default {
    content: [
      "./public/index.html",
      "./src/**/*.{js,ts,jsx,tsx}",   
    ],
    theme: {
      extend: {
        colors: {
            "main"       : "#FFAB49",
        },
        fontFamily: {
            // sans: ["Mulish", "Montserrat", "Arial", "Helvetica", "sans-serif"],
            Montserrat: ["Montserrat", "Mulish", "Montserrat", "Arial", "Helvetica", "sans-serif"]
        }
      },
    },
    plugins: [],
  }