import {
  GestureResponderEvent,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import MealDetails from "./MealDetails";
import Meal from "../models/meal";

const MealTile = ({
  meal,
  onPress,
}: {
  meal: Meal;
  onPress: (arg0: GestureResponderEvent) => void;
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={styles.androidRipple}
        style={({ pressed }) => pressed && styles.iosButtonPressed}
        onPress={onPress}
      >
        <View style={styles.inner}>
          <View>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{meal.title}</Text>
          </View>
          <MealDetails meal={meal} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    shadowOpacity: 0.3,
    elevation: 4,
  },
  inner: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  androidRipple: {
    color: "#cccccc",
  },
  iosButtonPressed: {
    opacity: Platform.OS === "ios" ? 0.8 : 1,
  },
});

export default MealTile;
