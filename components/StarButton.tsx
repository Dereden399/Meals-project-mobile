import { Ionicons } from "@expo/vector-icons";
import { GestureResponderEvent, Pressable } from "react-native";

const StarButton = ({
  color,
  onPress,
}: {
  color: string;
  onPress: (arg0: GestureResponderEvent) => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && { opacity: 0.8 }}
    >
      <Ionicons size={24} color={color} name="star" />
    </Pressable>
  );
};

export default StarButton;
