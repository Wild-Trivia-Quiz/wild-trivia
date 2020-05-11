import React, { useState } from "react";
import MainPage from "./MainPage";
import LandingPage from "./LandingPage";

const Homepage = () => {
  const [isMainPageLoaded, setIsMainPageLoaded] = useState(false);

  const handleClick = () => {
    setIsMainPageLoaded(true);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Click
      </button>
      {isMainPageLoaded ? <MainPage /> : <LandingPage />}
    </div>
  );
};

export default Homepage;
