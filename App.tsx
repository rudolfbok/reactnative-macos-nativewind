import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import './globals.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View className="flex-1 items-center justify-center">
      <View>
        <Text style={{ fontSize: 24 }} className="text-red-400">
          React Native macOS with Nativewind
        </Text>
      </View>
      <Text style={{ fontSize: 30 }} className="text-blue-400">
        Count: {count}
      </Text>
      <Button title="Set count" onPress={() => setCount(count + 1)} />
    </View>
  );
}
