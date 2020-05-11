import React, { createContext, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const QuizAPIContext = createContext();

const QuizAPIContextProvider = ({ children, history }) => {
  const [quizData, setQuizData] = useState([]);

  const triviaApiCall = (gameSelection) => {
    let searchParams = "";

    if (gameSelection !== "random") {
      searchParams = `&difficulty=${gameSelection}`;
    }

    const url = `https://opentdb.com/api.php?amount=10&category=23${searchParams}&type=multiple&encode=url3986`;

    axios.get(url).then((response) => {
      const data = response.data.results;
      setQuizData(data);
    });
  };

  const handleSubmit = (event, gameDifficulty) => {
    event.preventDefault();
    triviaApiCall(gameDifficulty);
    history.push("/game");
  };
  return (
    <QuizAPIContext.Provider value={{ quizData, handleSubmit }}>
      {children}
    </QuizAPIContext.Provider>
  );
};

QuizAPIContextProvider.propTypes = {
  children: PropTypes.func,
  history: PropTypes.func,
};

QuizAPIContextProvider.defaultProps = {
  children: "",
  history: "",
};

export default QuizAPIContextProvider;
