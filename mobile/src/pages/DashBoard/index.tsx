import React, { useContext } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/AuthContex";

export default function DashBoard() {
  const { signOut } = useContext(AuthContext);

  return (
    <View>
      <Text>Screm DashBoard</Text>
      <Button title="Sair do app" onPress={signOut} />
    </View>
  );
}
