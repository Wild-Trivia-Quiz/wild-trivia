import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const nextRound = () => {
    if (round !== 10) {
      setRound(round + 1);
    } else {
      setRound("10");
      setIsGameFinished(true);
    }
  };

  const handleClick = (event, option, correctAnswerPosition) => {
    console.log("click", option);
    if (option === correctAnswerPosition) {
      console.log("correct", option);
      setScore(score + 10);
    } else {
      console.log("incorrect");
    }
    nextRound();
  };


  const resetGameStartState = () => {
    setIsGameStarted(false);
  }

  const startGameClick = () => {
    setIsGameFinished(false);
    setScore(0); //reset
    setRound(1); //reset
    setIsGameStarted(true); //ternary call
   
  };


  
  return (
    <GameContext.Provider
      value={{
        score,
        round,
        handleClick,
        startGameClick,
        isGameStarted,
        resetGameStartState,
        isGameFinished
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

GameContextProvider.propTypes = {
  children: PropTypes.func,
};

GameContextProvider.defaultProps = {
  children: "",
};

export default GameContextProvider;
