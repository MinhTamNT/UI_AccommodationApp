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
import Carousel from "../components/Home/Carousel";
import ModalProfile from "../components/Modal/ModalProfile";
import { useFonts } from "expo-font";
import House from "../components/Home/House";
const Home = () => {
  const username = "Nguyễn Sinh Hùng";
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView>
      <View className="flex-row justify-between items-center p-2">
        <View className="flex-col">
          <Text className="text-[15px] text-text-weak-color">Welcome Back</Text>
          <Text className="text-2xl font-bold">{username}</Text>
        </View>
        <View className="flex-row gap-5 items-center">
          <Fontisto name="bell" size={27} />
          <TouchableOpacity onPress={toggleModal}>
            <Image
              className="w-10 h-10 rounded-full"
              source={require("../assets/image/default_avatart.jpg")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ModalProfile isModalVisible={isModalVisible} onClose={toggleModal} />
      <ScrollView>
        <Carousel />
        <House />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
