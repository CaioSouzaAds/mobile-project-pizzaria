import React, { useContext, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

import { useRoute, RouteProp } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

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
      <View style={styles.header}>
        <Text style={styles.title}>Mesa: {route.params.number}</Text>
        <TouchableOpacity>
          <Feather name="trash-2" size={30} color="#FF3F4B" />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.input}>Pizzas</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.input}>Pizza de calabreza</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.qtdContainer}>
        <Text style={styles.qtdText}>Quantidade</Text>
        <TextInput
          style={[styles.input, { width: "60%", textAlign: "center" }]}
          // placeholder="1"
          placeholderTextColor="#F0F0F0"
          keyboardType="numeric"
          value={"1"}
          // onChangeText={}
        />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "10%",
    paddingHorizontal: "4%",
    backgroundColor: "#1d1d2e",
  },
  header: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
    marginRight: 14,
  },
  input: {
    color: "#FFF",
    backgroundColor: "#101026",
    borderRadius: 4,
    width: "100%",
    height: 40,
    marginBottom: 12,
    justifyContent: "center",
    paddingHorizontal: 8,
    fontSize: 20,
    textAlignVertical: "center",
  },
  qtdContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  qtdText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    alignItems: "center",
    textAlignVertical: "center",
    includeFontPadding: false,
  },
  actions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  buttonAdd: {
    width: "20%",
    backgroundColor: "#3FD1FF",
    borderRadius: 4,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#101026",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    includeFontPadding: false,
  },
  button: {
    backgroundColor: "#3FFFA3",
    borderRadius: 4,
    height: 45,
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
  },
});
