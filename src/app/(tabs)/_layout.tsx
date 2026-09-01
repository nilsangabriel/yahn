import { Tabs } from "expo-router";
import { Image } from "react-native";

import homeIcon from "@/assets/images/tabIcons/home.png";

export default function TabsLayout() {

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: true,
      tabBarStyle: {
        position: "absolute",
      }
    }} >
        <Tabs.Screen
            name="index"
            options={{
                title: "Home",
                tabBarIcon: ({ size }) => (
                    <Image
                        source={homeIcon}
                        style={{
                            width: size,
                            height: size,
                        }}
                    />
                ),
            }}
        />
        <Tabs.Screen
            name="bookmarks"
            options={{
                title: "Bookmarks",
                tabBarIcon: ({ size }) => (
                    <Image
                        source={homeIcon}
                        style={{
                            width: size,
                            height: size,
                        }}
                    />
                ),
            }}
        />
        <Tabs.Screen
            name="history"
            options={{
                title: "History",
                tabBarIcon: ({ size }) => (
                    <Image
                        source={homeIcon}
                        style={{
                            width: size,
                            height: size,
                        }}
                    />
                ),
            }}
        />
    </Tabs>
  );
}
