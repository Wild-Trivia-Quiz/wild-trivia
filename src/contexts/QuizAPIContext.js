import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const QuizAPIContext = createContext();

const QuizAPIContextProvider = ({ children }) => {
  const [quizData, setQuizData] = useState([] || JSON.parse(sessionStorage.getItem('quizData')));
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [quizName, setQuizName] = useState("");
  const [quizCategoryName, setQuizCategoryName] = useState("");
  const [quizInstructions, setQuizInstructions] = useState("");
  const [quizQuestionsAndAnswers, setQuizQuestionsAndAnswers] = useState({});

  const toggleShouldRedirectGame = () => {
    setShouldRedirect(!shouldRedirect);
  };

  useEffect(() => {
    sessionStorage.setItem('quizData', JSON.stringify(quizData));
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

    let searchParams = "";
    if (gameSelection !== "random") {
      searchParams = `&difficulty=${gameSelection}`;
    }
    const url = `https://opentdb.com/api.php?amount=10&category=${category}${searchParams}&type=multiple`;
    axios.get(url).then((response) => {
      const data = response.data.results;
      setQuizData(data);
      
      const dataQuestionsAndAnwsers = data.map((element) => {
        //object with question, correct anwser position and all the 4 options:
        const questionAndAnwsersObj = { question: element.question };
        
        //array with 3 incorrect answers:
        const answersArray = [...element.incorrect_answers];

        //save in the object the position of the correct anwser:
        questionAndAnwsersObj.correctAnswerPosition =
          Math.floor(Math.random() * 4) + 1; //1 or 2 or 3 or 4

        answersArray.splice(
          questionAndAnwsersObj.correctAnswerPosition - 1,
          0,
          element.correct_answer
        );

        //save in the object each "option" answer and position:
        answersArray.map( (option, index) => {
          questionAndAnwsersObj["option" + (index + 1)] = option;
        });
       
        return questionAndAnwsersObj;
      });
     
      console.log(dataQuestionsAndAnwsers);
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
