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
  return (
    <TouchableOpacity
      hitSlop={{ top: 10, bottom: 10 }}
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        paddingVertical: 10,
      }}
    >
      {isIconFontisto && (
        <Fontisto
          name={isSelected ? activeIconName : inactiveIconName}
          size={24}
          color="black"
        />
      )}
      {isIconIonicons && (
        <Ionicons
          name={isSelected ? activeIconName : inactiveIconName}
          size={24}
          color="black"
        />
      )}
    </TouchableOpacity>
  );
};
