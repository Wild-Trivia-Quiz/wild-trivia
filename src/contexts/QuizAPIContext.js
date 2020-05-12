import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const QuizAPIContext = createContext();

const QuizAPIContextProvider = ({ children }) => {
  const [quizData, setQuizData] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [quizName, setQuizName] = useState('');

  const toggleShouldRedirectGame = () => {
    setShouldRedirect(!shouldRedirect);
  };

  useEffect(() => {
    if (quizData.length) {
      toggleShouldRedirectGame();
    }
  }, [quizData]);

  const triviaApiCall = (gameSelection, category, name) => {
    let searchParams = '';
    if (gameSelection !== 'random') {
      searchParams = `&difficulty=${gameSelection}`;
    }
    const url = `https://opentdb.com/api.php?amount=10&category=${category}${searchParams}&type=multiple&encode=url3986`;
    axios.get(url).then((response) => {
      const data = response.data.results;
      setQuizData(data);
      setQuizName(name);
    });
  };

  // const handleSubmit = (event, gameDifficulty) => {
  //   event.preventDefault();
  //   triviaApiCall(gameDifficulty);
  // };

  return (
    <QuizAPIContext.Provider
      value={{
        quizData,
        shouldRedirect,
        triviaApiCall,
        toggleShouldRedirectGame,
      }}>
      {children}
    </QuizAPIContext.Provider>
  );
};

QuizAPIContextProvider.propTypes = {
  children: PropTypes.func,
};

QuizAPIContextProvider.defaultProps = {
  children: '',
};

export default QuizAPIContextProvider;
