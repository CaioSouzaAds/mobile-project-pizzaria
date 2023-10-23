import React, { useContext } from "react";

import { View, ActivityIndicator } from "react-native";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

import { AuthContext } from "../contexts/AuthContex";

function Routes() {
  const { loading, loadingAuth, isAuthenticated } = useContext(AuthContext);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#1D1D2E",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={200} color="#FFF" />
      </View>
    );
  }

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
