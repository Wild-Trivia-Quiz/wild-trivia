import React, { useContext } from "react";
import MainPage from "./MainPage";
import LandingPage from "./LandingPage";
import {HomepageContext} from "../contexts/HomepageContext";

const Homepage = () => {
  const { isMainPageLoaded } = useContext(HomepageContext);

  return (
    <div>
      
        {isMainPageLoaded ? <MainPage /> : <LandingPage />}
      
    </div>
  );
};

export default Homepage;
