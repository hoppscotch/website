export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        inter: ["Inter Variable", "sans-serif"],
        jakarta: ["Plus Jakarta Sans Variable", "sans-serif"],
      },
      animation: {
        "flip-element": "flip-element 6s infinite steps(2, end)",
        "rotate-element": "rotate-element 3s linear infinite both",
        "endless-wave": "endless-wave 20s linear infinite",
        "background-shine": "background-shine 3s linear infinite",
        "text-gradient": "text-gradient 1.5s linear infinite",
        "infinite-scroll": "infinite-scroll 64s linear infinite",
      },
      keyframes: {
        "flip-element": {
          to: {
            transform: "rotate(360deg)",
          },
        },
        "rotate-element": {
          to: {
            transform: "rotate(90deg)",
          },
        },
        "endless-wave": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-245px)" },
        },
        "background-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        "text-gradient": {
          to: {
            backgroundPosition: "200% center",
          },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
}
