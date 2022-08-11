import React from "react";
import { useSelector } from "react-redux/es/exports";
import Example from "./components/sidebar";
import UnAuthentificationApp from "./pages/Unauthentification";
function App() {
  const userAndToken = useSelector((state) => state.user);
  if (userAndToken.token) {
    return <Example />;
  } else {
    return <UnAuthentificationApp />;
  }
}

export default App;
