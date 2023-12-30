import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Animated,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Easing } from "react-native";
const { width } = Dimensions.get("window");

const CarouselComponent = () => {
  const slides = [
    "https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/385557421_751830786793201_5136291561118356078_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=Z5YlJlIN2hMAX9sCzBJ&_nc_oc=AQmyWel3PF-V07x0RwpHaVeZ_IemU5xxAC1Db-UB1H9rPbYb9dLYnC1_cOSdXRzLdmE&_nc_ht=scontent.fsgn8-3.fna&oh=03_AdRmm9qQivZcGC8V8AQWWkSoLBpLoheB6M4S677b9kL8Yg&oe=65B35784",
    "https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/407376590_1386768988619994_7310088481103513280_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=PdGq-JvrmzMAX_gDDRJ&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdQjy029K2_Jyzp34f_no3__bMG_Ho4qJKPu93JSGd02XA&oe=65B35B68",
    "https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/407280306_1471659807069158_8988250540152404041_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=UX3IikfgVjgAX91cn15&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdQUL13XMg9Cwa5s9kVAmgSxBqAsapIQQztfcnV--XOiQA&oe=65B37F3D",
    "https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/385521989_1564319167661484_2286954657380820878_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=bOuV5nchY6MAX-tb4N5&_nc_ht=scontent.fsgn8-4.fna&oh=03_AdQikVrThhVD1d-0TjijeEQ_zZvCeYU9VgoCLUFHgd9kAw&oe=65B37237",
  ];

  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [valueInput, setValueInput] = useState("");
  const navigation = useNavigation();
  const [translateY] = useState(new Animated.Value(0));
  const handlePressInInput = () => {
    Animated.timing(translateY, {
      toValue: -200,
      duration: 300,
      easing: Easing.out(Easing.exp),
      useNativeDriver: false,
    }).start(() => {
      navigation.navigate("Search");
    });
  };

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.snapToNext();
      }
    }, 5000);
    return () => clearInterval(autoplayInterval);
  }, []);

  const renderItems = ({ item }) => (
    <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
  );

  return (
    <View>
      <View style={styles.container}>
        <Carousel
          ref={carouselRef}
          data={slides}
          renderItem={renderItems}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={(index) => setActiveSlide(index)}
          autoplay={true}
          autoplayInterval={5000}
          loop={true}
        />
        <Pagination
          dotsLength={slides.length}
          activeDotIndex={activeSlide}
          dotStyle={styles.paginationDot}
          inactiveDotStyle={styles.paginationInactiveDot}
          inactiveDotOpacity={0.6}
          inactiveDotScale={0.8}
        />
      </View>

      <Text className="mx-2 text-16 text-text-color-weak font-semibold">
        Tìm phòng nhanh chóng
      </Text>
      <Animated.View className="flex-row justify-center content-center h-[50px] items-center relative my-2 mx-3 rounded-lg border-[1px]">
        <TouchableOpacity className="mx-2">
          <Feather name="search" size={24} />
        </TouchableOpacity>
        <View className="flex-1 mr-1 rounded-lg">
          <TextInput
            placeholder="Enter for looking"
            className=" h-full w-[90%] px-2"
          />
        </View>
        <TouchableOpacity className="w-[50px] ml-[7px] h-full rounded-md justify-center items-center bg-bg-color-blue-300">
          <MaterialIcons name="qr-code-scanner" size={24} color="white" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 5 },
  image: { width, height: 200, borderRadius: 15 },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "#333",
  },
  paginationInactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "gray",
  },
});

export default CarouselComponent;
