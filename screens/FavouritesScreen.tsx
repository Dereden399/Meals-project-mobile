import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavouritesContext } from "../store/context/favourites-context";

const FavouritesScreen = () => {
  const favContext = useContext(FavouritesContext);

  const displayedMeals = MEALS.filter((x) => favContext.ids.includes(x.id));

  return (
    <View style={styles.screen}>
      {displayedMeals.length === 0 ? (
        <Text style={styles.text}>You can find your favourite dishes here</Text>
      ) : (
        <MealsList data={displayedMeals} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
  text: {
    color: "white",
    fontSize: 24,
  },
});

export default FavouritesScreen;
