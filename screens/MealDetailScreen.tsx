import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import List from "../components/List";
import MealDetails from "../components/MealDetails";
import StarButton from "../components/StarButton";
import { FavouritesContext } from "../store/context/favourites-context";
import { RootStackParamsList } from "../types";

const MealDetailScreen = (
  props: NativeStackScreenProps<RootStackParamsList, "MealDetail">,
) => {
  const meal = props.route.params.meal;
  const favContext = useContext(FavouritesContext);

  const mealIsFavourite = favContext.ids.includes(meal.id);

  const handleFavouriteButton = () => {
    if (mealIsFavourite) favContext.removeFavId(meal.id);
    else favContext.addFavId(meal.id);
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <StarButton
          color="white"
          onPress={handleFavouriteButton}
          filled={mealIsFavourite}
        />
      ),
    });
  }, [mealIsFavourite]);

  return (
    <ScrollView style={styles.screen} bounces={false}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{meal.title}</Text>
        <MealDetails meal={meal} />
        <View style={styles.characteristics}>
          <Text
            style={[
              styles.charTextOff,
              !meal.isGlutenFree && styles.charTextOn,
            ]}
          >
            G
          </Text>
          <Text
            style={[
              styles.charTextOff,
              !meal.isLactoseFree && styles.charTextOn,
            ]}
          >
            L
          </Text>
          <Text style={[styles.charTextOff, meal.isVegan && styles.charTextOn]}>
            Vegan
          </Text>
          <Text
            style={[styles.charTextOff, meal.isVegetarian && styles.charTextOn]}
          >
            V
          </Text>
        </View>
      </View>
      <View style={styles.pad}>
        <List title="Ingredients" list={meal.ingredients} />
        <List title="Steps" list={meal.steps} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: { width: "100%", height: 250 },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },

  characteristics: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 4,
  },
  charTextOff: {
    fontWeight: "bold",
    fontSize: 36,
    color: "#676767",
  },
  charTextOn: {
    color: "white",
  },
  pad: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 8,
    backgroundColor: "#865b3a",
    marginHorizontal: 8,
  },
});

export default MealDetailScreen;
