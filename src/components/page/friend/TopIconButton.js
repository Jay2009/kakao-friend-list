import { Ionicons } from "@expo/vector-icons";

export default ({ name, bgColor }) => {
  return (
    <TouchableOpacity
      hitSlop={{ top: 15, bottom: 15 }}
      style={{ paddingHorizontal: 6, backgroundColor: bgColor }}
    >
      <Ionicons name={name} size={24} color="black" />
    </TouchableOpacity>
  );
};
