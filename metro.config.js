const { getDefaultConfig } = require('@react-native/metro-config');
const { withUniwindConfig } = require('uniwind/metro');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = getDefaultConfig(__dirname);

module.exports = withUniwindConfig(config, {
	cssEntryFile: './src/globals.css',
	dtsFile: './src/uniwind-types.d.ts',
	polyfills: { rem: 14 },
});
