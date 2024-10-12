/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      wordBreak: {
        "custom-break": "break-all", // Replace with your custom value
      },
    },
  },
  plugins: [],
};
