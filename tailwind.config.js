export default {
    content: [
      "./app/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}"
    ],
    theme: {
      extend: {
        colors: {
          surface: "#060e20",
          primary: "#8eabff",
          "primary-dim": "#156aff",
          "surface-container": "#0f1930",
          "surface-container-highest": "#192540",
          outline: "#6d758c"
        },
        fontFamily: {
          sans: ["Space Grotesk", "sans-serif"]
        }
      }
    },
    plugins: []
  };