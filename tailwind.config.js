module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.tsx'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				poppins: "Poppins, 'sans-serif', ui-sans-serif, system-ui"
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
