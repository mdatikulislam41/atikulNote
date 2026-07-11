

import PageLayout from '@/components/pageLayout';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { View, useColorScheme } from "react-native";

export default function TabLayout() {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  const renderTabIcon = (name: string, focused: boolean, color: string, size: number) => (
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: focused ? "#ffffff33" : "transparent",
      }}
    >
      <Ionicons name={name as any} size={size} color={focused ? "#ffffff" : color} />
    </View>
  );

  return (
    <>
  
   <PageLayout>
     <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#f0f0f3",
        tabBarStyle: {
          backgroundColor: isDark ? "#f39509" : "#ef1111",
          borderTopColor: isDark ? "#d51a8d" : "#000000",
          position: "absolute",
          bottom: 60,
          height: 60,
          borderRadius: 10,
          marginHorizontal: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        tabBarIconStyle: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarItemStyle: {
          borderRadius: 20,
          marginHorizontal: 6,
          paddingVertical: 4,
        },
      }}
    >
         <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => renderTabIcon("home", focused, color, size),
        }}
      />
        <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          tabBarIcon: ({ color, size, focused }) => renderTabIcon("bookmark", focused, color, size),
        }}
      />
     
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, size, focused }) => renderTabIcon("time", focused, color, size),
        }}
      />
      
    </Tabs>
   </PageLayout>
    </>
  );
}
