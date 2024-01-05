import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header/Header";
import { AntDesign } from "@expo/vector-icons";
import { COLOR } from "../../../constants/theme";

const UserDetail = ({ navigation, profile, username }) => {
  const ToastMessage = () => {
    ToastAndroid.show("Edited Successfully !", ToastAndroid.SHORT);
  };
  return (
    <SafeAreaView className="bg-white w-full h-full">
      <View>
        <Header title="Tài khoản cá nhân" />
        <View className="flex-row items-center justify-between p-[10px] ">
          <TouchableOpacity
            onPress={() => {
              ToastMessage();
              navigation.goBack();
            }}
          >
            <AntDesign name="left" size={23} />
          </TouchableOpacity>
          <Text className="text-16 font-bold">Cập Nhật Thông tin cá nhân</Text>
          <TouchableOpacity>
            <AntDesign name="check" size={23} color={COLOR.green} />
          </TouchableOpacity>
        </View>
        <View className="Profile_user">
          <Text>{username}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserDetail;
