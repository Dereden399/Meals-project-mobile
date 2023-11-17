import { FlatList } from "react-native";

import MealTile from "./MealTile";
import Meal from "../../models/meal";

const MealsList = ({ data }: { data: Meal[] }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <MealTile meal={itemData.item} />}
    />
  );
};

export default MealsList;
