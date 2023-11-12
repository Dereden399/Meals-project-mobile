import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import CategoriesWithDrawerScreen from "./screens/CategoriesWithDrawerScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { RootStackParamsList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="CategoriesScreen"
          screenOptions={{
            headerStyle: { backgroundColor: "#371700" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#402b1b" },
          }}
        >
          <Stack.Screen
            name="CategoriesScreen"
            component={CategoriesWithDrawerScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{ title: "Meal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
