import React, { useContext, useState } from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

import { useRoute, RouteProp } from "@react-navigation/native";

type RouteDetailParams = {
  Order: {
    number: string | number;
    order_id: string;
    name_client: string;
  };
};

type OrderRouteProps = RouteProp<RouteDetailParams, "Order">;

import { AuthContext } from "../../contexts/AuthContex";

export default function Order() {
  const route = useRoute<OrderRouteProps>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Order</Text>
      <Text style={styles.text}>{route.params.order_id}</Text>
      <Text style={styles.text}>{route.params.number}</Text>
      <Text style={styles.text}>{route.params.name_client}</Text>

      <TextInput
        placeholder="Número da number"
        placeholderTextColor="#F0F0F0"
        keyboardType="numeric"
        //value={}
        // onChangeText={}
      />

      <TouchableOpacity>
        <Text>Criar order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    backgroundColor: "#1d1d2e",
  },
  text: {
    fontSize: 30,
    color: "#FFF",
  },
});
