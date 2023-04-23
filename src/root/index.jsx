import React, {useState} from "react"
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import HomeScreen from "../screens/homeScreen/HomeScreen";
const Root = () => {

  const [sidebarTitle, toggoleSidebar] = useState(true);
  const handleToggleSidebar = () => toggoleSidebar(value=>!value)
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_wrapper app_container border border-info d-flex">
        <Sidebar sidebarTitle={sidebarTitle} />
        <Container fluid className="app__main">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
};

export default Root;
