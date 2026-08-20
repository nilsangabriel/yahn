import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: "absolute",
      }
    }} >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="newsletter"
        options={{
          title: "Newsletter",
        }}
      />

      <Tabs.Screen
        name="webinars"
        options={{
          title: "Webinars",
        }}
      />
    </Tabs>
  );
}
