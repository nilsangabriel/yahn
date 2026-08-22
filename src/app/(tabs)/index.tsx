import Search from "@/components/search";
import "../global.css"
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <SafeAreaView className="bg-[#312c93] border-b border-gray-300 border-s-slate-500">
        <View className="h-9 flex-row items-center justify-between px-4 mt-3">
          <Text className="text-2xl font-semibold text-white">HACKQUIRER</Text>
          <Search/>
        </View>
      </SafeAreaView>
      {/* Body */}
      <ScrollView className="mt-6">
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
