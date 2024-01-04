import React from "react";
import { View, Text, Image } from "react-native";

const LocationCard = ({ imageSource, locationText }) => {
  return (
    <View className=" mx-[4px] my-1">
      <Image source={imageSource} className="w-[120px] h-[120px] rounded-lg" />
      <Text className="absolute bottom-0 text-13 left-2 text-white text-base">
        {locationText}
      </Text>
    </View>
  );
};

export default LocationCard;
