import { TouchableOpacity } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";

export default ({
  isSelected,
  onPress,
  activeIconName,
  inactiveIconName,
  isIconFontisto,
  isIconIonicons,
}) => {
  return <TouchableOpacity onPress={onPress}>{isIconFontis}</TouchableOpacity>;
};
