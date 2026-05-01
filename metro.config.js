const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/dist/metro');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = mergeConfig(getDefaultConfig(__dirname), {
	/* Your existing config if you had any */
});

// withNativeWind takes your config and the path to your CSS entry point
module.exports = withNativeWind(config, { input: './globals.css' });
