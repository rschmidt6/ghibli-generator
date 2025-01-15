// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // This creates classes we can use for different text elements
        ghibli: ["Playfair Display", "serif"],
        // We might want a complementary sans-serif for body text
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
