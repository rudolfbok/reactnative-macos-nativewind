const transpiledModules = [
	'(jest-)?react-native',
	'@react-native',
	'@react-native-community',
	'nativewind',
	'react-native-css-interop',
	'react-native-reanimated',
	'react-native-safe-area-context',
	'react-native-screens',
].join('|');

module.exports = {
	preset: 'react-native',
	moduleNameMapper: {
		'\\.(css)$': '<rootDir>/__mocks__/styleMock.js',
	},
	transformIgnorePatterns: [
		`node_modules/\\.pnpm/(?!(${transpiledModules})(@|\\+))`,
		`node_modules/(?!\\.pnpm|(${transpiledModules})/)`,
	],
};
