import {
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import {
  AntDesign,
  MaterialIcons,
  Ionicons,
  EvilIcons,
  Feather,
  SimpleLineIcons,
} from "@expo/vector-icons";
const ModalProfile = (props) => {
  const { isModalVisible, onClose } = props;
  const menuItems = [
    { icon: "skin", text: "Thông tin cá nhân", iconLibrary: AntDesign },
    { icon: "lock", text: "Bảo mật", iconLibrary: Feather },
    {
      icon: "doc",
      text: "Chính sách quyền riêng tư",
      iconLibrary: SimpleLineIcons,
    },
    { icon: "logout", text: "Đăng xuất", iconLibrary: MaterialIcons },
  ];
  const renderIcon = (
    iconName,
    size = 27,
    IconComponent = Ionicons,
    isLast = false
  ) => {
    const iconColor = isLast ? "text-red-500" : "text-text-weak-color";
    return (
      <IconComponent
        name={iconName}
        size={size}
        className={`w-10 ${iconColor}`}
      />
    );
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 relative bg-bg-color-modal justify-end ">
          <View className="bg-[#f0f0f0] p-[20px] h-[27%] w-full flex-col rounded-xl">
            <TouchableOpacity
              onPress={onClose}
              className="absolute right-3 top-2"
            >
              <AntDesign name="close" size={20} />
            </TouchableOpacity>
            <View className="flex-row gap-2 items-center">
              <Image
                className="w-10 h-10 rounded-full"
                source={require("../../assets/image/default_avatart.jpg")}
              />
              <View>
                <Text className="username text-17 font-bold">
                  Nguyễn Sinh Hùng
                </Text>
                <Text className="user_phone text-text-weak-color">
                  0902748167
                </Text>
              </View>
            </View>
            <View className=" ml-1 flex-col">
              {menuItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  className={`flex-row mt-2 items-center hover:bg-text-weak-color ${
                    index === menuItems.length - 1 ? "text-red-500" : ""
                  }`}
                >
                  {renderIcon(
                    item.icon,
                    27,
                    item.iconLibrary,
                    index === menuItems.length - 1
                  )}
                  <Text
                    className={` text-[17px] ${
                      index === menuItems.length - 1 ? "text-red-500" : ""
                    }`}
                  >
                    {item.text}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalProfile;
