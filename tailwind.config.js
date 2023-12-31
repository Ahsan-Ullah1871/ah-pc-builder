/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			maxWidth: {
				project: "1170px",
			},
			colors: {
				grey: "#55504C",
				dark: "#121110",
				primary_dark: "#111114",
				primary: "#FB8F2C",
			},
			fontFamily: {
				libre: ["var(--font-libre-bodoni)"],
				jakarta: ["var(--font-plus-jakarta-sans)"],
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};

