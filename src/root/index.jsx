import React from "react";
import { Container } from "reactstrap";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
const Root = () => {
  return (
    <>
      <Header />
      <div className="app_container">
        <Sidebar />
        <Container fluid className="app__main">
          <HomeScreen/>
        </Container>
      </div>
    </>
  );
};

export default Root;
