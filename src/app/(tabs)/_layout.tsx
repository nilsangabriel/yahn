import { Tabs } from "expo-router";
import {Image, View} from "react-native";
import {clsx} from "clsx";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {tabs} from "@/constants/data";
import {components, colors} from "@/constants/theme";


function TabIcon({icon}: TabIconProps) {
    return (
        <View className="tabs-icon">
            <View>
                <Image source={icon} resizeMode="contain" className="tabs-glyph" />
            </View>
        </View>
    )
}

export default function TabsLayout() {
    const insets = useSafeAreaInsets();
    const tabBar = components.tabBar;

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                    position: "absolute",
                    bottom: Math.max(insets.bottom, tabBar.horizontalInset),
                    height: tabBar.height,
                    marginHorizontal: tabBar.horizontalInset,
                    borderRadius: tabBar.radius,
                    backgroundColor: colors.background,
                    borderTopWidth: 0,
                    elevation: 0,

                },
                tabBarItemStyle: {
                    paddingVertical: tabBar.height / 2 - tabBar.iconFrame
                },
                tabBarIconStyle: {
                    width: tabBar.iconFrame,
                    height: tabBar.iconFrame,
                    alignItems: 'center'
                }
            }}
        >
            {tabs.map((tab, index) => (
                <Tabs.Screen
                    key={index}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({focused}) => (
                            <TabIcon focused={focused} icon={tab.icon} />
                        )
                    }}
                />
            ))}
        </Tabs>
  );
}
