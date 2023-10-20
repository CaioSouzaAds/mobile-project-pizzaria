import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App pizzaria</Text>
      <StatusBar /*style="auto"*/ />
    </View>
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
