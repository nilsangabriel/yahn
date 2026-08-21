import "../global.css"
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <SafeAreaView className="bg-[#312c93] border-b border-gray-300 border-s-slate-500">
        <View className="h-14 flex-row items-center justify-between px-4">
          <Text className="text-lg font-semibold text-white">HACKQUIRER</Text>
          <Text className="text-white">Search</Text>
        </View>
      </SafeAreaView>
      {/* Body */}
      <ScrollView>
        <View className="items-center justify-center">
          <Text className="text-xl font-medium text-blue-500">
            Welcome to home!
          </Text>
          {/* More content */}
          <View className="h-[1000px]" />
          </View>
      </ScrollView>
    </View>
  );
}
