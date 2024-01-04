import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";

const Search = () => {
  const windowHeight = Dimensions.get("window").height;
  const [value, setValue] = useState(null);
  const navigate = useNavigation();
  const handlerNavigation = () => {
    navigate.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View className="h-[40px]"></View>
      </SafeAreaView>
      <SafeAreaView className="absolute w-full">
        <View className="h-[40px] flex-row items-center px-[20px] mt-[5px]">
          <TouchableOpacity className="mr-4" onPress={handlerNavigation}>
            <AntDesign name="arrowleft" size={20} />
          </TouchableOpacity>
          <View className="h-[40px] flex-1 justify-center border-[1px] border-neutral-300 rounded-lg">
            <View className="ml-2">
              <AntDesign name="search1" size={20} />
            </View>
            <TextInput
              placeholder="Nhập vào từ khóa tím kiếm"
              placeholderTextColor="#282828"
              className="absolute w-full py-[4px] pl-[32px]"
            />
          </View>
        </View>
        <View className="h-[96px] px-[16px] py-[10px]">
          <View className="w-full flex-row items-center jus px-[10px] border-neutral-300 h-10 border-[1px] rounded-md">
            <View className="flex-row items-center w-[35%] gap-1 ">
              <Feather name="map-pin" size={24} color="#039be5" />
              <Text className="font-bold text-bg-color-blue-300">
                Chọn Tỉnh/TP
              </Text>
            </View>
            <View className="border-[1px] h-5  border-zinc-400"></View>
            <View className="ml-2 flex-row items-center justify-between w-[65%]">
              <Text className="font-bold text-text-weak-color">
                Chọn Quận/Huyện
              </Text>
              <TouchableOpacity>
                <Feather name="arrow-down" size={24} />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row  items-center justify-around mt-2">
            <View style={styles.necessUser}>
              <Text className="text-text-weak-color">Loại Thuê</Text>
              <TouchableOpacity>
                <Feather name="arrow-down" size={20} color="#576F76" />
              </TouchableOpacity>
            </View>
            <View style={styles.necessUser}>
              <Text className="text-text-weak-color">Giá Thuê</Text>
              <TouchableOpacity>
                <Feather name="arrow-down" size={20} color="#576F76" />
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center w-[25%] px-2">
              <Text className="text-text-weak-color">Khuyến Mãi</Text>
              <TouchableOpacity>
                <Feather name="arrow-down" size={20} color="#576F76" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View className="h-[96px]"></View>
        <View
          style={{ height: windowHeight * 2, backgroundColor: "white" }}
        ></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  necessUser: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
    paddingHorizontal: 2,
    borderRightWidth: 1,
    borderRightColor: "#576F76",
  },
});

export default Search;
