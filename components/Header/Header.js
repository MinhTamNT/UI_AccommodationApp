import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SHADOWS } from "../../constants/theme";
const Header = ({ title }) => {
  return (
    <View className="flex-row items-center justify-center h-16">
      <Text className="text-lg font-bold text-bg-color-blue-200 text-20">
        {title}
      </Text>
    </View>
  );
};
export default Header;
