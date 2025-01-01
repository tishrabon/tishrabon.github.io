/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#353535",
        lightbg: "#ffffff",

        darkheader: "#6d6d6d80",
        lightheader: "#cbd5e180",

        darknavbg: "#6d6d6db3",
        lightnavbg: "#cbd5e199",

        main: "#ffbf00",
        mainfont: "#ffbf00",
        mainbb: "#feb204",
        vsmain: "#021526",
        vsmainMid: "#353535",

        lightmain: "#94a3b8",
        vslight: "#ffffff",
        lightfont: "#64748B",
        lightfont2: "#475569",
        lightbb: "#e5e5e5",
        lightbb2: "#cccccc",
      },
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"],
        serif: ["courierPrime", "Georgia", "serif", "monospace"],
      },
    },
  },
  plugins: [],
};
