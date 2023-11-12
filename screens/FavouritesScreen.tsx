import { StyleSheet, Text, View } from "react-native";

const FavouritesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>You can find your favourite dishes here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
  },
});

export default FavouritesScreen;
