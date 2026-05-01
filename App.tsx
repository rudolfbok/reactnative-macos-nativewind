import { FileTsIcon, IconProps, LaptopIcon, LightbulbIcon, PackageIcon, WindIcon } from 'phosphor-react-native';
import { ComponentType } from 'react';
import { Text, View, useColorScheme } from 'react-native';
import './globals.css';

const FeaturePill = ({ Icon, name, color }: { Icon: ComponentType<IconProps>; name: string; color: string }) => {
	return (
		<View className="flex-row items-center gap-2 rounded-3xl border border-[#909090] px-4 py-2 dark:border-[#2A2C32]">
			<Icon color={color} />
			<Text style={{ color }}>{name}</Text>
		</View>
	);
};

export default function App() {
	const currentTheme = useColorScheme();

	const switchColor = (lightColor: string, darkColor: string): string => {
		const color = currentTheme === 'light' ? lightColor : darkColor;
		return color;
	};

	return (
		<View className="flex-1 items-center justify-center bg-[#F2F2F7] dark:bg-[#0D1119]">
			<View className="items-center gap-4 rounded-3xl bg-white p-10 dark:bg-[#161A21]">
				<Text className="text-5xl font-bold">React Native macOS</Text>
				<Text>A clean starter template for building macOS apps with React Native, TypeScript and Nativewind.</Text>
				<View className="flex-row gap-2">
					<FeaturePill Icon={LaptopIcon} name="React Native macOS" color={switchColor('black', 'white')} />
					<FeaturePill Icon={WindIcon} name="Nativewind" color="#05900A" />
					<FeaturePill Icon={FileTsIcon} name="TypeScript" color="#0079FF" />
					<FeaturePill Icon={PackageIcon} name="PNPM" color="#EB9331" />
				</View>
				<View className="flex-row items-center gap-2">
					<LightbulbIcon color={switchColor('black', 'white')} />
					<Text>Edit App.tsx to start building your app</Text>
				</View>
			</View>
		</View>
	);
}
