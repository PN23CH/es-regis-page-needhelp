/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-light-yellow": "#FCFFDB",
      },
    },
    colors: {
      white: "#FFFFFF",
      black: "#333333",
      red: "#FF0000",
      "dark-green": "#142A13",
      "hunter-green": "#31572C",
      "moss-green": "#90A955",
      "mindaro-green": "#ECF39E",
      "light-yellow": "#FCFFDB",
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          white: "#FFFFFF",
          black: "#333333",
          "dark-green": "#142A13",
          "hunter-green": "#31572C",
          "moss-green": "#90A955",
          "mindaro-green": "#ECF39E",
          "light-yellow": "#FCFFDB",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
