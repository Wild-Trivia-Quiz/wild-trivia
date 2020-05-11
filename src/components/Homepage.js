import React, { useContext } from "react";
import MainPage from "./MainPage";
import LandingPage from "./LandingPage";
import { HomepageContext } from "../contexts/HomepageContext";
import QuizAPIContextProvider from "../contexts/QuizAPIContext";

const Homepage = () => {
  const { isMainPageLoaded } = useContext(HomepageContext);

  return (
    <div>
      {isMainPageLoaded ? (
        <QuizAPIContextProvider>
          <MainPage />
        </QuizAPIContextProvider>
      ) : (
        <LandingPage />
      )}
    </div>
  );
};

export default Homepage;
