import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/login-context";

function App() {
  const authCxt = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!authCxt.isLoggedIn && <Login />}
        {authCxt.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
