/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        dimgray: {
          "100": "#6f6565",
          "200": "rgba(111, 101, 101, 0.92)",
        },
        lavenderblush: {
          "100": "#fff3f3",
          "200": "#ffefef",
        },
        blueviolet: "#423fda",
        steelblue: "#5689c6",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
