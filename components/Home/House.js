import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationCard from "./LocationCard";
const House = () => {
  const data = [
    {
      imageSource: require("../../assets/image/binhthanh.jpg"),
      locationText: "Quận Bình Thạnh",
    },
    {
      imageSource: require("../../assets/image/govap.jpg"),
      locationText: "Gò vấp",
    },
    {
      imageSource: require("../../assets/image/quan1.png"),
      locationText: "Quận 1",
    },
    {
      imageSource: require("../../assets/image/UBND-quan-12.jpg"),
      locationText: "Quận 12",
    },
    {
      imageSource: require("../../assets/image/tanbinh.jpg"),
      locationText: "Tân Bình",
    },
    {
      imageSource: require("../../assets/image/binhchanh.jpg"),
      locationText: "Bình chánh",
    },
  ];
  return (
    <View className="px-3 w-full justify-center items-center">
      <View className="flex-col  w-full">
        <View className="flex-row justify-between">
          <Text className="text-16 font-bold">Tìm theo khu vực</Text>
          <TouchableOpacity>
            <Text className="text-16 text-text-weak-color underline ">
              Xem tất cả
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            flex: 1,
            width: "100%",
            justifyContent: "center",
          }}
        >
          {data.map((item, index) => (
            <LocationCard
              key={index}
              imageSource={item.imageSource}
              locationText={item.locationText}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default House;
