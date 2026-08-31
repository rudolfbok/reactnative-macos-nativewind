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
	cssEntryFile: './globals.css',
	polyfills: { rem: 14 },
});
