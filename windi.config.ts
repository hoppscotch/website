import { defineConfig } from "windicss/helpers"
import typography from "windicss/plugin/typography"

export default defineConfig({
  darkMode: "class",
  attributify: true,
  plugins: [typography()],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primaryLight: "var(--color-primaryLight)",
        primaryDark: "var(--color-primaryDark)",
        secondary: "var(--color-secondary)",
        secondaryLight: "var(--color-secondaryLight)",
        secondaryDark: "var(--color-secondaryDark)",
        accent: "var(--color-accent)",
        accentLight: "var(--color-accentLight)",
        accentDark: "var(--color-accentDark)",
        accentContrast: "var(--color-accentContrast)",
        divider: "var(--color-divider)",
        dividerLight: "var(--color-dividerLight)",
        dividerDark: "var(--color-dividerDark)",
        tooltip: "var(--color-tooltip)",
        tooltipSecondary: "var(--color-tooltipSecondary)",
        primaryTransparent: "var(--color-primaryTransparent)",
        primaryTransparentContrast: "var(--color-primaryTransparentContrast)",
      },
    },
  },
})
