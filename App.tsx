import React from "react";

import styled from "styled-components/native";
import LoginPage from "./Pages/Login";

const AppContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <AppContainer>
      <LoginPage />
    </AppContainer>
  );
}
