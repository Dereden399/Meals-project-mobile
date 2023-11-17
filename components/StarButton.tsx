import { Ionicons } from "@expo/vector-icons";
import { GestureResponderEvent, Pressable } from "react-native";

const StarButton = ({
  color,
  onPress,
  filled,
}: {
  color: string;
  onPress: (arg0: GestureResponderEvent) => void;
  filled: boolean;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && { opacity: 0.8 }}
    >
      <Ionicons
        size={24}
        color={color}
        name={filled ? "star" : "star-outline"}
      />
    </Pressable>
  );
};

export default StarButton;
