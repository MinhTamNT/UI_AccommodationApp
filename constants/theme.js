import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const COLOR = {
  primary: "#fe2c55",
  secondary: "#0F1A1C",
  color_white: "#ffff",
  input_default: "#576F76",
  text_weak_color: "#576F76",
  bg_color_blue_200: "#2ba8fb",
  bg_color_blue_300: "#039be5",
  bg_color_modal: "rgba(0, 0, 0, 0.5)",
  gray: "#83829A",
  red: "#e81e4d",
  green: "#46d160",
  offWhite: "#F3F4F8",
};
const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25, // Corrected the typo here
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25, // Corrected the typo here
    shadowRadius: 5.84,
    elevation: 5,
  },
};
export { COLOR, SHADOWS };
