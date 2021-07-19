import React from "react";
import Routes from "./Routes";
import AuthProvider from "./contexts/authContext";

const App = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);

export default App;
