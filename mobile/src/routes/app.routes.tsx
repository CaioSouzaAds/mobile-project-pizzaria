import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DashBoard from "../pages/DashBoard";

// Pages for authenticated users 'Attention'
const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DashBoard" component={DashBoard} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
