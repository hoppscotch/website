export default {
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
        "endless-wave": "endless-wave 20s linear infinite",
        "background-shine": "background-shine 3s linear infinite",
        "text-gradient": "text-gradient 1.5s linear infinite",
      },
      keyframes: {
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
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
