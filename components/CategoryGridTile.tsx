import {
  GestureResponderEvent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Category from "../models/category";

const CategoryGridTile = ({
  item,
  onPress,
}: {
  item: Category;
  onPress: (arg0: GestureResponderEvent) => void;
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressedIOS,
        ]}
        android_ripple={styles.buttonAndroidRipple}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: item.color }]}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
    height: 150,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    shadowOpacity: 0.3,
  },
  button: {
    flex: 1,
  },
  buttonPressedIOS: {
    opacity: 0.8,
  },
  buttonAndroidRipple: {
    color: "#cccccc",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CategoryGridTile;
