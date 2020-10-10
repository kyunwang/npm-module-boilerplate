module.exports = {
	env: {
		development: {
			presets: ['@babel/preset-env'],
			plugins: ['@babel/plugin-proposal-class-properties'],
		},
		production: {
			presets: ['@babel/preset-env', 'minify'],
			plugins: ['@babel/plugin-proposal-class-properties'],
		},
	},
};
