import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { RootStackParamsList } from "../types";

const CategoriesScreen = (
  props: NativeStackScreenProps<RootStackParamsList, "Categories">
) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryGridTile
          item={item}
          onPress={() => props.navigation.navigate("MealsOverview")}
        />
      )}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
