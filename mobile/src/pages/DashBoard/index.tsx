import React, { useContext, useState } from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { StackParamsList } from "../../routes/app.routes";

import { api } from "../../services/api";

import { AuthContext } from "../../contexts/AuthContex";

export default function DashBoard() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  //const { signOut } = useContext(AuthContext);
  const [number, setNumber] = useState("");

  async function handleTable() {
    if (number === "") {
      return;
    }

    try {
      const response = await api.post("/order", {
        table: Number(number),
        name_client: null,
      });

      const { id, table, name_client } = response.data;

      navigation.navigate("Order", {
        number: table,
        order_id: id,
        name_client: name_client,
      });

      setNumber("");
    } catch (err) {
      console.error("Ocorreu um erro ao processar a solicitação:", err);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo pedido</Text>

      <TextInput
        style={styles.input}
        placeholder="Número da mesa"
        placeholderTextColor="#F0F0F0"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      <TouchableOpacity style={styles.button} onPress={handleTable}>
        <Text style={styles.buttonText}>Abrir mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "5%",
    backgroundColor: "#1d1d2e",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#F0F0F0",
    marginBottom: 24,
    marginTop: -100,
  },
  input: {
    width: "90%",
    height: 60,
    backgroundColor: "#101026",
    borderRadius: 4,
    paddingHorizontal: 8,
    textAlign: "center",
    fontSize: 22,
    color: "#F0F0F0",
  },
  button: {
    width: "90%",
    height: 40,
    backgroundColor: "#3FFFA3",
    borderRadius: 4,
    marginVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#101026",
    fontWeight: "bold",
  },
});
