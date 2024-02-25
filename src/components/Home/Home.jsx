import React, { useContext } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import AuthContext from "../../store/login-context";

const Home = (props) => {
  const authCxt = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCxt.onLogout}>Log Out</Button>
    </Card>
  );
};

export default Home;
