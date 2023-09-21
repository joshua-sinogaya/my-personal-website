/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				"4fiddy": "450px",
			},
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#239578",

					secondary: "#a02353",

					accent: "#2c3743",

					neutral: "#1a232c",

					"base-100": "#090909",

					info: "#99f6e4",

					success: "#d9f99d",

					warning: "#fde047",

					error: "#e11d48",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
