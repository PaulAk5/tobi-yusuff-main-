/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:    "#0d0d0b",
        cream:  "#f5f2eb",
        gold:   "#b8923a",
        "gold-light": "#d4a853",
        muted:  "#6b6b60",
        border: "#e0dbd0",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans:  ["'DM Sans'", "system-ui", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
        candara: ["Candara", "Calibri", "Segoe UI", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.68rem",
        "xxs": "0.70rem",
        "xs":  "0.75rem",
      },
      letterSpacing: {
        widest2: "0.18em",
        widest3: "0.15em",
        widest4: "0.10em",
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "4/3": "4 / 3",
      },
      keyframes: {
        modalIn: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        modalIn: "modalIn 0.4s ease-out",
      },
    },
  },
  plugins: [],
};