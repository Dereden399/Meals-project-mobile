import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { RootDrawerParamsList, RootStackParamsList } from "../types";

type PropsType = CompositeScreenProps<
  DrawerScreenProps<RootDrawerParamsList, "Categories">,
  NativeStackScreenProps<RootStackParamsList>
>;

const CategoriesScreen = (props: PropsType) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryGridTile
          item={item}
          onPress={() =>
            props.navigation.navigate("MealsOverview", { categoryId: item.id })
          }
        />
      )}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
