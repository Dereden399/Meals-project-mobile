import Meal from "./models/meal";

export type RootStackParamsList = {
  Categories: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { meal: Meal };
};
