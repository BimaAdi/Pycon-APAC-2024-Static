/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
			minLaptop: "1000px",
			tabletOnly: { min: "700px", max: "1000px" },
			ticketG1BreakPoint: { max: "900px"},
			ticketG2BreakPoint: { min: "901px", max: "1100px"},
			ticketG3BreakPoint: { min: "1101px"},
			...defaultTheme.screens,
		},
  },
  plugins: [],
}

