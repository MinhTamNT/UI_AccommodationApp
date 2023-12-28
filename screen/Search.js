import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, MaterialIcons } from "@expo/vector-icons";
const Search = () => {
  return (
    <SafeAreaView>
      <View className="flex-row justify-center content-center h-[50px] items-center relative my-2 mx-2 rounded-xl border-[1px]">
        <TouchableOpacity className="mx-2">
          <Feather name="search" size={24} />
        </TouchableOpacity>
        <View className="flex-1 mr-1 rounded-lg">
          <TextInput
            placeholder="Enter for looking"
            className=" h-full w-[90%] px-2"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
