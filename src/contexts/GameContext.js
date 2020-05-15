import React, { createContext, useState } from 'react';

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [correctAnswersCounter, setCorrectAnswersCounter] = useState(0);

  const nextRound = () => {
    if (round !== 10) {
      setRound(round + 1);
    } else {
      setRound('10');
      setIsGameFinished(true);
    }
  };

  const handleClick = (option, correctAnswerPosition) => {
    if (option === correctAnswerPosition) {
      setScore(score + 10);
      setCorrectAnswersCounter(correctAnswersCounter + 1);
    }
    nextRound();
  };

  const resetGameStartState = () => {
    setIsGameStarted(false);
  };

  const startGameClick = () => {
    setIsGameFinished(false);
    setScore(0);
    setRound(1);
    setIsGameStarted(true);
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
        isGameFinished,
        correctAnswersCounter,
      }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
