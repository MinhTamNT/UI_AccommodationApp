import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Animated,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SliderBox } from "react-native-image-slider-box";
const CarouselComponent = () => {
  const navigation = useNavigation();
  const handleSearchPress = () => {
    navigation.navigate("Search");
  };

  const slides = [
    "https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/385557421_751830786793201_5136291561118356078_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=Z5YlJlIN2hMAX9sCzBJ&_nc_oc=AQmyWel3PF-V07x0RwpHaVeZ_IemU5xxAC1Db-UB1H9rPbYb9dLYnC1_cOSdXRzLdmE&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdRmm9qQivZcGC8V8AQWWkSoLBpLoheB6M4S677b9kL8Yg&oe=65B35784",
    "https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/407376590_1386768988619994_7310088481103513280_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=PdGq-JvrmzMAX_gDDRJ&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdQjy029K2_Jyzp34f_no3__bMG_Ho4qJKPu93JSGd02XA&oe=65B35B68",
    "https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/407280306_1471659807069158_8988250540152404041_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=UX3IikfgVjgAX91cn15&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdQUL13XMg9Cwa5s9kVAmgSxBqAsapIQQztfcnV--XOiQA&oe=65B37F3D",
    "https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/385521989_1564319167661484_2286954657380820878_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=bOuV5nchY6MAX-tb4N5&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdQikVrThhVD1d-0TjijeEQ_zZvCeYU9VgoCLUFHgd9kAw&oe=65B37237",
  ];

  return (
    <View>
      <View style={styles.container}>
        <SliderBox
          images={slides}
          ImageComponentStyle={{
            borderRadius: 15,
            width: "93%",
            marginTop: 15,
          }}
          autoplay
          circleLoop
        />
      </View>
      <View className="p-4">
        <View className="mb-2">
          <Text className="text-16 font-bold">Tìm phòng nhanh chóng</Text>
        </View>
        <View className="border-[1px] h-[50px] flex-row justify-center items-center rounded-md border-text-weak-color">
          <TouchableOpacity>
            <AntDesign
              name="search1"
              size={24}
              style={{ marginHorizontal: 10 }}
            />
          </TouchableOpacity>
          <View className="flex-1 w-full">
            <TextInput
              placeholder="Nhập vào từ khóa tìm kiếm"
              className="text-black"
              placeholderTextColor="black"
              onPressIn={handleSearchPress}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
});

export default CarouselComponent;
