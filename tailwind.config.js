module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./ui/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			screens: {
				xl: "1024px",
			},
		},
		extend: {
			gridTemplateColumns: {
				13: "repeat(13, minmax(0, 1fr))",
			},
			colors: {
				blue: {
					400: "#2589FE",
					500: "#0070F3",
					600: "#2F6FEB",
				},
				primary: "#015FC7",
				"primary-o": {
					1: "#015FC7",
					0.9: "rgb(1,95,199, 0.9)",
					0.8: "rgb(1,95,199, 0.8)",
					0.7: "rgb(1,95,199, 0.7)",
					0.6: "rgb(1,95,199, 0.6)",
					0.5: "rgb(1,95,199, 0.5)",
					0.4: "rgb(1,95,199, 0.4)",
					0.3: "rgb(1,95,199, 0.3)",
					0.2: "rgb(1,95,199, 0.2)",
					0.1: "rgb(1,95,199, 0.1)",
				},
				secondary: "#001124",
				"secondary-o": {
					1: "#001124",
					0.9: "rgb(0,17,36, 0.9)",
					0.8: "rgb(0,17,36, 0.8)",
					0.7: "rgb(0,17,36, 0.7)",
					0.6: "rgb(0,17,36, 0.6)",
					0.5: "rgb(0,17,36, 0.5)",
					0.4: "rgb(0,17,36, 0.4)",
					0.3: "rgb(0,17,36, 0.3)",
					0.2: "rgb(0,17,36, 0.2)",
					0.1: "rgb(0,17,36, 0.1)",
				},
			},
		},
		keyframes: {
			shimmer: {
				"100%": {
					transform: "translateX(100%)",
				},
			},
		},
	},
	plugins: [],
};
