import { Tabs } from "expo-router";
import { Image } from "react-native";

import homeIcon from "@/assets/images/tabIcons/home.png";
import newsletterIcon from "@/assets/images/tabIcons/envelope.png";
import webinarsIcon from "@/assets/images/tabIcons/play-alt.png";

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
    </Tabs>
  );
}
