import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fontisto } from "@expo/vector-icons";
import Carousel from "../components/Home/Carousel";
const Home = () => {
  const username = "Nguyễn Sinh Hùng";
  return (
    <SafeAreaView>
      <View className="flex-row justify-between items-center p-2">
        <View className="flex-col">
          <Text className="text-[14px] text-slate-700">Xin chào</Text>
          <Text className="text-2xl font-bold">{username}</Text>
        </View>
        <View className="flex-row gap-5 items-center">
          <Fontisto name="bell" size={22} />
          <Image
            className="w-10 h-10 rounded-full"
            source={require("../assets/image/default_avatart.jpg")}
          />
        </View>
      </View>
      <ScrollView>
        <Carousel />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
