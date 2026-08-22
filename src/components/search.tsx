import { Image, TouchableOpacity, View } from "react-native";
import searchIcon from "@/assets/images/appIcons/search.png"
import { useRouter } from "expo-router";

export default function Search() {
  const router = useRouter();

  const onPress = () => {
    return router.push("/(search)/search-area");
  }

  return (
    <View className="p-4">
      <TouchableOpacity
        onPress={onPress}
      >
        <Image source={searchIcon} className="w-6 h-6"/>
      </TouchableOpacity>
    </View>
  )
}
