import { Tabs } from "expo-router";
import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";
import Entypo from "react-native-vector-icons/Entypo";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopWidth: 0,
          paddingBottom: 70,
          paddingTop: 8,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={30} color="white" />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={30} color="white" />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="message"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="paper-plane" size={30} color="white" />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default Layout;
