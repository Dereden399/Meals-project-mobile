import Meal from "./models/meal";

export type RootStackParamsList = {
  CategoriesScreen: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { meal: Meal };
};

export type RootDrawerParamsList = {
  Categories: undefined;
  Favourites: undefined;
};
