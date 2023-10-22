import { StyleSheet, Text, View, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

import { AuthProvider } from "./src/contexts/AuthContex";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar /*style="auto"*/ />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E17D14",
    alignItems: "center",
    justifyContent: "center",
  },
});
