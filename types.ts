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

export interface FavouriteContextType {
  ids: Array<string>;
  addFavId: (arg0: string) => void;
  removeFavId: (arg0: string) => void;
}
