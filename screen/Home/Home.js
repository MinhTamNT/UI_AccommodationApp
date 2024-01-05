import {
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fontisto } from "@expo/vector-icons";
import Carousel from "../../components/Home/Carousel";
import House from "../../components/Home/House";
const Home = () => {
  const username = "Nguyễn Sinh Hùng";
  return (
    <SafeAreaView className="bg-white w-full h-full">
      <View className="flex-row justify-between items-center p-2">
        <View className="flex-col">
          <Text className="text-[15px] text-text-weak-color">Welcome Back</Text>
          <Text className="text-2xl font-bold">{username}</Text>
        </View>
        <View className="flex-row gap-5 items-center">
          <Fontisto name="bell" size={27} />
          <Image
            className="w-10 h-10 rounded-full"
            source={{
              uri: "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/326403390_1522209771635250_7604274983211479574_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ou8HPzqdErcAX9fblu0&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfC6_iRBSWeenKlLD4bDASoQrkAVyeVC2paYtxgeQRfbBQ&oe=659BF10A",
            }}
          />
        </View>
      </View>

      <ScrollView>
        <Carousel />
        <House />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
