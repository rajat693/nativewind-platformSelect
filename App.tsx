import './global.css';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-2xs">hello world</Text>

      <View className="shadow-3xl mt-8 rounded-xl bg-white p-8">
        <Text>hello 1</Text>
      </View>

      <View className="shadow-4xl mt-8 rounded-xl bg-white p-8">
        <Text>hello 2</Text>
      </View>
    </SafeAreaView>
  );
}
