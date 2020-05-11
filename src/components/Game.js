import React, { useState, useContext } from 'react';
import GameIntro from './GameIntro';
import GameUI from './GameUI';
import { QuizAPIContext } from '../contexts/QuizAPIContext';

const Game = () => {
  const { quizData } = useContext(QuizAPIContext);
  console.log(quizData);
  const [isGameUILoaded, setIsGameUILoaded] = useState(false);

  const handleClick = () => {
    setIsGameUILoaded(true);
  };

  return (
    <div>{isGameUILoaded ? <GameUI /> : <GameIntro click={handleClick} />}</div>
  );
};

export default Game;
