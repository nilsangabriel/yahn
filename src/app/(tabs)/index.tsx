import "../global.css";
import Search from "@/components/search";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewsStory from "@/components/news-story";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <SafeAreaView className="bg-[#312c93] border-b border-gray-300 border-s-slate-500">
        <View className="h-9 flex-row items-center justify-between px-4 mt-3">
          <Text className="text-2xl font-semibold text-white">YAHN</Text>
          <Search/>
        </View>
      </SafeAreaView>
      {/* Body */}
      <View className="flex-1">
        {/* Story Content */}
        <NewsStory />
      </View>
    </View>
  );
}
