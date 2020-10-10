const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
	parser: '@babel/eslint-parser',
	extends: ['eslint:recommended', 'airbnb'],
	env: {
		mocha: true,
	},
	plugins: ['babel', 'prettier'],
	rules: {
		'comma-dangle': [ERROR, 'only-multiline'],
		'arrow-parens': OFF,
		'max-len': [ERROR, { code: 120, tabWidth: 2 }],
		'no-plusplus': OFF,
		'no-tabs': [ERROR, { allowIndentationTabs: true }],
		'react/jsx-filename-extension': OFF,
		'react/react-in-jsx-scope': OFF,
		indent: [ERROR, 'tab'],
	},
};
