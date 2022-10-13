/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "qr-lg": "hsl(212, 45%, 89%)",
        "qr-gb": "hsl(220, 15%, 55%)",
        "qr-db": "hsl(218, 44%, 22%)",
        white: " hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
