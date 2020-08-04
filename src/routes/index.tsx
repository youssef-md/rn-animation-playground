import React from "react";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";

import AppRoutes from "./app.routes";

const Routes: React.FC = () => {
  const { type } = useTheme();

  return (
    <>
      <StatusBar style={type === "dark" ? "light" : "dark"} />
      <AppRoutes />
    </>
  );
};

export default Routes;
