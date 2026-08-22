import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import leftIcon from "@/assets/images/appIcons/angle-left.png";

export default function SearchArea() {
  const router = useRouter();

  const onPress = () => {
    return router.back();
  }

  return (
    <View>
      <SafeAreaView className="px-4">
        <View className="flex-row items-center gap-2">
          <TouchableOpacity
            onPress={onPress}
          >
            <Image source={leftIcon} className="w-6 h-6" />
          </TouchableOpacity>
          <TextInput
            placeholder="Search Hacker News"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3"
          />
        </View>
      </SafeAreaView>
    </View>
  )
}
