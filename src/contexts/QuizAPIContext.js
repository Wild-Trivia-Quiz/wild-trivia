import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const QuizAPIContext = createContext();

const QuizAPIContextProvider = ({ children }) => {
  const [quizData, setQuizData] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (quizData.length) {
      setShouldRedirect(true);
    }
  }, [quizData]);

  const triviaApiCall = (gameSelection) => {
    let searchParams = '';
    if (gameSelection !== 'random') {
      searchParams = `&difficulty=${gameSelection}`;
    }
    const url = `https://opentdb.com/api.php?amount=10&category=23${searchParams}&type=multiple&encode=url3986`;
    axios.get(url).then((response) => {
      const data = response.data.results;
      setQuizData(data);
    });
  };

  // const handleSubmit = (event, gameDifficulty) => {
  //   event.preventDefault();
  //   triviaApiCall(gameDifficulty);
  // };

  return (
    <QuizAPIContext.Provider value={{ quizData, shouldRedirect, triviaApiCall}}>
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
