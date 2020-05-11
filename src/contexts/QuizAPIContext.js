import React, { createContext, useState} from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const QuizAPIContext = createContext();

const QuizAPIContextProvider = ({ children}) => {
  const [quizData, setQuizData] = useState(JSON.parse(localStorage.getItem("quizData")) || []);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const triviaApiCall = (gameSelection) => {
    let searchParams = "";

    if (gameSelection !== "random") {
      searchParams = `&difficulty=${gameSelection}`;
    }

    const url = `https://opentdb.com/api.php?amount=10&category=23${searchParams}&type=multiple&encode=url3986`;

    axios.get(url).then((response) => {
      const data = response.data.results;
      setQuizData(data);
      localStorage.setItem("quizData", JSON.stringify(quizData));
      setShouldRedirect(true);
    });
  };

  const handleSubmit = (event, gameDifficulty) => {
    event.preventDefault();
    triviaApiCall(gameDifficulty);
  };

  return (
    <QuizAPIContext.Provider value={{ quizData, handleSubmit, shouldRedirect }}>
      {children}
    </QuizAPIContext.Provider>
  );
};

QuizAPIContextProvider.propTypes = {
  children: PropTypes.func
};

QuizAPIContextProvider.defaultProps = {
  children: ""
};

export default QuizAPIContextProvider;
