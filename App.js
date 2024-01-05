import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import BottomNavigaton from "./navigation/BottomNavigaton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Search } from "./screen";
import UserDetail from "./screen/Profile/UserDetail/UserDetail";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomNavigaton}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserDeatil"
          component={UserDetail}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
