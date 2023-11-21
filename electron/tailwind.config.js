export default {
    content: [
      "./public/index.html",
      "./src/**/*.{js,ts,jsx,tsx}",   
    ],
    theme: {
      extend: {
        colors: {
            "font-black": "#282828",
            "font-white": "#ffffff",

            "orange-700": "#CC893A",
            "orange-600": "#E69A42",
            "orange-500": "#FFAB49",
            "orange-400": "#FFC580",
            "orange-300": "#FFD6A5",

            "gray-500": "#F4F4F4",
            "gray-400": "#ECECEC",
            "gray-300": "#D9D9D9",
            "gray-200": "#C5C5C5",

            "danger": "#FF4A4A",
        },
        fontFamily: {
            sans: ["Inter", "Arial", "Helvetica", "sans-serif"],
            Montserrat: ["Montserrat", "Mulish", "Arial", "Helvetica", "sans-serif"]
        },
        fontSize: {
            "logo": "1.875rem",
            "card-title": "1.25rem",
            "regular": "0.9rem",
            "small": "0.813rem",
        },
        fontWeight: {
            logo: "800",
            normal: "300",
            semibold: "500",
            bold: "600",
        }
      },
    },
    plugins: [],
  }