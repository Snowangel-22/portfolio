/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["class", "[data-theme='dark']"],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-muted": "var(--accent-muted)",
        bg: "var(--bg)",
        "bg-subtle": "var(--bg-subtle)",
        surface: "var(--surface)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
      },
      fontFamily: {
        display: ["Lato", "sans-serif"],
        subtitle: ["Satisfy", "cursive"],
        body: ["Nunito", "sans-serif"],
      },
      borderRadius: {
        card: "var(--radius-card)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
      },
    },
  },
  plugins: [],
}
