import React, { useContext, useState } from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

import { AuthContext } from "../../contexts/AuthContex";

export default function Order() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Order</Text>

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
