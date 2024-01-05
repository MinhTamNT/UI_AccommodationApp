import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header/Header.js";
import ActionUser from "../../components/ActionUser/ActionUser.js";
import {
  AntDesign,
  Feather,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
const Profile = ({ navigation }) => {
  const [userName, setUserName] = useState("Nguyễn Sinh Hùng");
  const menuItems = [
    {
      icon: "skin",
      text: "Thông tin cá nhân",
      iconLibrary: AntDesign,
      route: "UserDeatil",
    },
    { icon: "lock", text: "Bảo mật", iconLibrary: Feather, route: null },
    {
      icon: "doc",
      text: "Chính sách quyền riêng tư",
      iconLibrary: SimpleLineIcons,
      route: null,
    },
    {
      icon: "contactless",
      text: "Liên hệ",
      iconLibrary: MaterialIcons,
      route: null,
    },
    {
      icon: "logout",
      text: "Đăng xuất",
      iconLibrary: MaterialIcons,
      route: null,
    },
  ];

  const renderIcon = (
    iconName,
    size = 27,
    IconComponent,
    isLast = false,
    color = "#1A1A1B"
  ) => {
    const iconColor = isLast ? "red" : color;
    return (
      <IconComponent name={iconName} size={size} style={{ color: iconColor }} />
    );
  };
  const handlerMenuPress = (route) => {
    if (route !== null) {
      navigation.navigate(route);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title={"Tài khoản"} />
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View className="profile_infor mt-[16px] px-7 flex-row items-center ">
          <Image
            source={require("../../assets/image/default_avatart.jpg")}
            className="w-[120px] h-[120px] rounded-full"
          />
          <View className="name_user ml-4">
            <Text className="username_user text-20 font-bold">{userName}</Text>
            <Text className="phone_user text-[17px] text-base">0902748617</Text>
          </View>
        </View>
        <View>
          {menuItems.map((menuItem, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlerMenuPress(menuItem.route)}
            >
              <View
                className={`ation flex-row items-center justify-between mt-[20px] px-5 ${
                  index !== menuItems.length - 1
                    ? "border-b-[1px] border-gray-200"
                    : ""
                }`}
              >
                <View className="icon_handler flex-row ">
                  <View className="w-10 h-10 flex-shrink-0">
                    {renderIcon(
                      menuItem.icon,
                      27,
                      menuItem.iconLibrary,
                      index === menuItems.length - 1
                    )}
                  </View>
                  <Text
                    className={`text-20 ${
                      index === menuItems.length - 1
                        ? "text-red-500"
                        : "text-strong-color"
                    }`}
                  >
                    {menuItem.text}
                  </Text>
                </View>
                {index !== menuItems.length - 1 && (
                  <View>
                    <AntDesign name="right" size={15} />
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View className="items-center">
          <Text className="text-15 font-bold ">Phiên bản 0.0.1</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
