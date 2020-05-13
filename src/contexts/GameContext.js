import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);

  const handleClick = (event, option, correctAnswerPosition) => {
    console.log('click', option);
    if (option === correctAnswerPosition) {
      console.log('correct', option);
      setScore(score + 10);
    } else {
      console.log('incorrect');
    }
    setRound(round + 1);
  };

  return (
    <GameContext.Provider
      value={{
        score,
        round,
        handleClick,
      }}>
      {children}
    </GameContext.Provider>
  );
};

GameContextProvider.propTypes = {
  children: PropTypes.func,
};

GameContextProvider.defaultProps = {
  children: '',
};

export default GameContextProvider;
