import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DashBoard from "../pages/DashBoard";
import Order from "../pages/Order";
import FinishOrder from "../pages/FinishOrder";

export type StackParamsList = {
  DashBoard: undefined;
  Order: {
    number: number | string;
    order_id: string;
    name_client?: string;
  };
  FinishOrder: undefined;
};

// Pages for authenticated users 'Attention'
const Stack = createNativeStackNavigator<StackParamsList>();

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

      <Stack.Screen
        name="FinishOrder"
        component={FinishOrder}
        options={{
          title: "Finalizando",
          headerStyle: {
            backgroundColor: "#1d1d2e",
          },
          headerTintColor: "#FFF",
        }}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
