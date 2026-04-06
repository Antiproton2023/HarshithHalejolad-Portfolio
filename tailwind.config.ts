import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "#f0f0f0",
        mutedForeground: "#666666",
        border: "#e5e5e5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--foreground)',
            a: {
              color: 'var(--foreground)',
              '&:hover': {
                color: '#888',
              },
            },
            h1: { color: 'var(--foreground)' },
            h2: { color: 'var(--foreground)' },
            h3: { color: 'var(--foreground)' },
            h4: { color: 'var(--foreground)' },
            code: {
              color: 'var(--foreground)',
              backgroundColor: 'var(--muted)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: '#0a0a0a',
              color: '#fff',
              code: {
                backgroundColor: 'transparent',
                color: 'inherit',
              }
            }
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
