import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

import MealsList from "../components/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { RootStackParamsList } from "../types";

const MealsOverviewScreen = (
  props: NativeStackScreenProps<RootStackParamsList, "MealsOverview">,
) => {
  const catId = props.route.params.categoryId;
  useLayoutEffect(() => {
    const category = CATEGORIES.find((cat) => cat.id === catId);
    props.navigation.setOptions({ title: category?.title ?? "Meals" });
  }, [catId, props.navigation]);

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId),
  );

  return (
    <View style={styles.screen}>
      <MealsList data={displayedMeals} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
