// utils.js
import {
  AntDesign,
  Feather,
  MaterialIcons,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";

export const menuItems = [
  { icon: "skin", text: "Thông tin cá nhân", iconLibrary: AntDesign },
  { icon: "lock", text: "Bảo mật", iconLibrary: Feather },
  {
    icon: "doc",
    text: "Chính sách quyền riêng tư",
    iconLibrary: SimpleLineIcons,
  },
  { icon: "contactless", text: "Liên hệ", iconLibrary: MaterialIcons },
  { icon: "logout", text: "Đăng xuất", iconLibrary: MaterialIcons },
];

export const renderIcon = (
  iconName,
  size = 27,
  IconComponent,
  isLast = false,
  color = "",
  ...pasprops
) => {
  const iconColor = isLast ? "red" : color;
  return (
    <IconComponent
      name={iconName}
      size={size}
      style={{ color: iconColor }}
      {...pasprops}
    />
  );
};
