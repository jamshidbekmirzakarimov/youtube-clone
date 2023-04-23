import React from "react";
import { Container } from "reactstrap";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import YtVideo from "../../components/ytVideo/YtVideo";
const HomeScreen = () => {
  return (
    <>
      <Container>
        <CategoriesBar />
        <div className="row">
          {
            [...new Array(50)].map(() =>
              <div className="col-3">
                <YtVideo/>
              </div>
            )
          }
        </div>
      </Container>
    </>
  );
};

export default HomeScreen;
