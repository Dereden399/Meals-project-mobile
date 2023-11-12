import { StyleSheet, Text, View } from "react-native";

import Meal from "../models/meal";

const MealDetails = ({ meal }: { meal: Meal }) => {
  return (
    <View style={styles.details}>
      <View style={styles.detailItem}>
        <Text style={styles.detaiText}>{meal.duration}m</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detaiText}>{meal.complexity.toUpperCase()}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detaiText}>{meal.affordability.toUpperCase()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    flex: 1,
  },
  detaiText: {
    fontSize: 16,
    textAlign: "center",
    color: "#a1a0a0",
  },
});

export default MealDetails;
