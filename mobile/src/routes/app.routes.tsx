import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DashBoard from "../pages/DashBoard";
import Order from "../pages/Order";

export type StackPramsList = {
  DashBoard: undefined;
  Order: {
    number: number | string;
    order_id: string;
    name_cliente?: string;
  };
};

// Pages for authenticated users 'Attention'
const Stack = createNativeStackNavigator<StackPramsList>();

function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashBoard"
        component={DashBoard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
