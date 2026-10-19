/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--color-paper)",
        ink: "var(--color-ink)",
        charcoal: "var(--color-charcoal)",
        olive: "var(--color-olive)",
        terracotta: "var(--color-terracotta)",
        stone: "var(--color-stone)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        surface: "var(--color-surface)",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      maxWidth: {
        container: "var(--container-width)",
      },
      transitionTimingFunction: {
        editorial: "var(--ease-editorial)",
      },
    },
  },
  plugins: [],
};
