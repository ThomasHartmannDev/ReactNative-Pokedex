import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Welcome } from "../pages/Welcome/index";
import { Home } from "../pages/Home/index";
import { About } from "../pages/About/index";

const Stack = createNativeStackNavigator();
export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}
