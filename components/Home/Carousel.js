import { Feather } from "@expo/vector-icons";
import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

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
      <View className="flex-cols px-2 relative">
        <View>
          <Text className="text-xl mb-2 font-bold text-slate-700">
            Tìm Phòng nhanh chóng
          </Text>
        </View>
        <View className="flex-row items-center gap-2">
          <View className="flex-1 border-[1px] rounded-lg mt-2">
            <TouchableOpacity className="absolute top-2 z-10 right-3">
              <Feather name="search" size={24} />
            </TouchableOpacity>
            <TextInput
              value={valueInput}
              onChangeText={(values) => setValueInput(values)}
              placeholder="what is looking for"
              className="h-10 px-4  "
            />
          </View>
          <View>
            <TouchableOpacity className="bg-primary-btn p-2 rounded-lg">
              <Text className="text-color-white text-[20px]">Tìm Kiếm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    backgroundColor: "#007BFF",
  },
  paginationInactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "#C0C0C0",
  },
});

export default CarouselComponent;
