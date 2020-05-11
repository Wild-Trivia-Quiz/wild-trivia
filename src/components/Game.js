import React, { useState, useContext } from "react";
import GameIntro from "./GameIntro";
import GameUI from "./GameUI";
import QuizAPIContextProvider, { QuizAPIContext } from "../contexts/QuizAPIContext";


const Game = () => {
  const { quizData } = useContext(QuizAPIContext);
  const [isGameUILoaded, setIsGameUILoaded] = useState(false);

  console.log(quizData);

  const handleClick = () => {
    setIsGameUILoaded(true);
  };

  return (
    <div>
      <QuizAPIContextProvider>
        {isGameUILoaded ? <GameUI /> : <GameIntro click={handleClick} />}
      </QuizAPIContextProvider>
    </div>
  );
};

export default Game;
