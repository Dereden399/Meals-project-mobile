import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./CategoriesScreen";
import FavouritesScreen from "./FavouritesScreen";
import { RootDrawerParamsList } from "../types";

const Drawer = createDrawerNavigator<RootDrawerParamsList>();

const CategoriesWithDrawerScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#371700",
          shadowColor: "transparent",
          elevation: 0,
        },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#402b1b" },
        drawerContentStyle: { backgroundColor: "#371700" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "white",
        drawerActiveBackgroundColor: "#402b1b",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default CategoriesWithDrawerScreen;
