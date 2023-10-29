import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

import { api } from "../../services/api";

import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";

type RouteDetailParams = {
  FinishOrder: {
    number: string | number;
    order_id: string;
  };
};

type FinishOrderRouteProp = RouteProp<RouteDetailParams, "FinishOrder">;
export default function FinishOrder() {
  const route = useRoute<FinishOrderRouteProp>();
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  async function handleFinish() {
    try {
      await api.put("/order/send", {
        order_id: route.params?.order_id,
      });

      navigation.popToTop();
    } catch (err) {
      console.error("Ocorreu um erro ao enviar o pedido:", err);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.alert}>Deseja finalizar o pedido?</Text>
      <Text style={styles.title}>Mesa {route.params?.number}</Text>

      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.textButton}>Finalizar pedido</Text>
        <Feather name="shopping-cart" size={20} color="#1d1d2e" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1d2e",
    paddingVertical: "5%",
    paddingHorizontal: "4%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -200,
  },
  alert: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 12,
  },
  title: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 12,
  },

  button: {
    backgroundColor: "#3fffa3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    height: 40,
    borderRadius: 4,
  },
  textButton: {
    fontSize: 18,
    marginRight: 8,
    fontWeight: "bold",
    color: "#1d1d2e",
  },
});
