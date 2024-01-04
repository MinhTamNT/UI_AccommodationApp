import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header/Header.js";
import ActionUser from "../../components/ActionUser/ActionUser.js";
const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title={"Tài khoản"} />
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View className="profile_infor mt-[16px] px-7 flex-row items-center ">
          <Image
            source={require("../assets/image/default_avatart.jpg")}
            className="w-[120px] h-[120px] rounded-full"
          />
          <View className="name_user ml-4">
            <Text className="username_user text-20 font-bold">
              Nguyễn Sinh Hùng
            </Text>
            <Text className="phone_user text-[17px] text-base">0902748617</Text>
          </View>
        </View>
        <ActionUser />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
