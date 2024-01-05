/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screen/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#fe2c55",
        secondry: "#0F1A1C",
        "color-white": "#ffff",
        "input-default": "#222222",
        "text-weak-color": "#576F76",
        "text-strong-color": "#1c1c1c",
        "bg-color-blue-200": "#2ba8fb",
        "bg-color-blue-300": "#039be5",
        "bg-color-modal": "rgba(0, 0, 0, 0.5)",
        "border-color-default": "#dddddd",
      },
      fontSize: {
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        16: "16px",
        20: "20px",
        26: "26px",
        24: "24px",
        32: "32px",
        36: "36px",
        48: "48px",
      },
    },
  },
  plugins: [],
};
