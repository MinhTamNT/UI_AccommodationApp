import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Profile, Search, Map } from "../screen";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyBoard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 16,
    right: 16,
    left: 16,
    elevation: 0,
    borderRadius: 10,
  },
};
const BottomNavigaton = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                options={{
                  tabBarIcon: ({ focused }) => {
                    return (
                      <Ionicons
                        name={focused ? "home" : "home-outline"}
                        size={24}
                      />
                    );
                  },
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ focused }) => {
            return <FontAwesome name={focused ? "map" : "map-o"} size={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Map}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "chatbubble-sharp" : "chatbubble-outline"}
                size={24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigaton;
