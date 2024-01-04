// YourComponent.js
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { menuItems, renderIcon } from "../../constants/utils";
import { AntDesign } from "@expo/vector-icons";
const ActionUser = () => {
  return (
    <>
      <View>
        {menuItems.map((menuItem, index) => (
          <TouchableOpacity key={index}>
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
                    index === menuItems.length - 1,
                    "#2ba8fb"
                  )}
                </View>
                <Text
                  className={`text-20 ${
                    index === menuItems.length - 1
                      ? "text-red-500"
                      : "text-text-weak-color"
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
    </>
  );
};

export default ActionUser;
