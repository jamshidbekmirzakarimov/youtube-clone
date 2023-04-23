import React from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import HomeScreen from "../screens/homeScreen/HomeScreen";
const Root = () => {
  return (
    <>
      <Header />
      <div className="app_wrapper app_container border border-info d-flex">
        <Sidebar />
        <Container fluid className="app__main">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
};

export default Root;
