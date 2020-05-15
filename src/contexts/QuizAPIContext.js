/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const QuizAPIContext = createContext();

const QuizAPIContextProvider = ({ children }) => {
  const [quizData, setQuizData] = useState(
    [] || JSON.parse(sessionStorage.getItem("quizData"))
  );
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [quizName, setQuizName] = useState("");
  const [quizCategoryName, setQuizCategoryName] = useState("");
  const [quizInstructions, setQuizInstructions] = useState("");
  const [quizQuestionsAndAnswers, setQuizQuestionsAndAnswers] = useState({});
  const [quizDifficulty, setQuizDifficulty] = useState("");

  const convertString = (string) => { 
    return string
      .replace("&amp;", "&")
      .replace("&AMP;", "&")
      .replace("&quot;", '"')
      .replace("&QUOT;", '"')
      .replace("&apos;", "'")
      .replace("&APOS;", "'")
      .replace("&gt;", ">")
      .replace("&lt;", "<")
      .replace("&rsquo;", "'")
      .replace("&RSQUO;", "'")
      .replace("&#039;", "'")
      .replace("&lrm;", "")
      .replace("&LRM;", "")
      .replace("&micro;", "µ")
      .replace("&OACUTE;", "Ó")
      .replace("&UUML;", "Ü");
  }

  const toggleShouldRedirectGame = () => {
    setShouldRedirect(!shouldRedirect);
  };

  useEffect(() => {
    sessionStorage.setItem("quizData", JSON.stringify(quizData));
    if (quizData.length) {
      toggleShouldRedirectGame();
    }
  }, [quizData]);

  const triviaApiCall = (
    gameSelection,
    category,
    name,
    categoryName,
    instructions
  ) => {
    setQuizName(name);
    setQuizCategoryName(categoryName);
    setQuizInstructions(instructions);
    setQuizDifficulty(gameSelection);
    let searchParams = "";
    if (gameSelection !== "random") {
      searchParams = `&difficulty=${gameSelection}`;
    }
    const url = `https://opentdb.com/api.php?amount=10&category=${category}${searchParams}&type=multiple`;
    axios.get(url).then((response) => {
      const data = response.data.results;
      setQuizData(data);

      const dataQuestionsAndAnwsers = data.map((element, index) => {
        //object with question, correct anwser position and all the 4 options:
        const questionAndAnwsersObj = {
          id: index + 1,
          question: element.question,
        };

        //array with 3 incorrect answers:
        const answersArray = [...element.incorrect_answers];

        //save inside the object the position of the correct anwser:
        questionAndAnwsersObj.correctAnswerPosition =
          Math.floor(Math.random() * 4) + 1; //1 or 2 or 3 or 4

        answersArray.splice(
          questionAndAnwsersObj.correctAnswerPosition - 1,
          0,
          element.correct_answer
        );

        //save inside the object each "option" answer and position:
        answersArray.map((option, i) => {
          questionAndAnwsersObj["option" + (i + 1)] = option;
        });

        return questionAndAnwsersObj;
      });

      setQuizQuestionsAndAnswers(dataQuestionsAndAnwsers);
    });
  };

  return (
    <QuizAPIContext.Provider
      value={{
        quizData,
        quizName,
        quizCategoryName,
        quizInstructions,
        quizQuestionsAndAnswers,
        quizDifficulty,
        shouldRedirect,
        triviaApiCall,
        toggleShouldRedirectGame,
      }}
    >
      {children}
    </QuizAPIContext.Provider>
  );
};

QuizAPIContextProvider.propTypes = {
  children: PropTypes.func,
};

QuizAPIContextProvider.defaultProps = {
  children: "",
};

export default QuizAPIContextProvider;
