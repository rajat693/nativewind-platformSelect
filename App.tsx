import './global.css';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-2xs">hello world</Text>

      {/* <View className="mt-8 rounded-xl bg-white p-8 shadow-3xl">
        <Text>hello 1</Text>
      </View> */}

      <View className="mt-8 rounded-xl bg-white p-8 shadow-4xl">
        <Text>hello 2</Text>
      </View>
    </SafeAreaView>
  );
}
