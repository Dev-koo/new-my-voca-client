module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'prettier',
	],
	ignorePatterns: ['dist', '*.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'unused-imports'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'unused-imports/no-unused-imports': 'error',
    'react/react-in-jsx-scope': 'off',
		'prettier/prettier': [
			'error',
			{
				semi: false,
				singleQuote: true,
        jsxSingleQuote: true,
				trailingComma: 'all',
				tabWidth: 2,
				useTabs: true,
			},
		],
	},
}
