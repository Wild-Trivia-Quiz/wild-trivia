import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { QuizAPIContext } from "../contexts/QuizAPIContext";

const QuestionAnswers = () => {
    const { quizQuestionsAndAnswers } = useContext(QuizAPIContext);
    const [score, setScore] = useState(0);
    const [round, setRound] = useState(1);

  const handleClick = (event, option, correctAnswerPosition) => {
    console.log("click", option);

    if (option === correctAnswerPosition) {
      console.log("correct", option);
      setScore(score + 10);
    } else {
      console.log("incorrect");
    }
  };

  return (
    <div>
      <h2>{score}</h2>
      {quizQuestionsAndAnswers.map((quizRound, index) => {
        //setRound(round + (index + 1));


        return (
          <div className="question-answers">
            <p>{quizRound.question}</p>
            <ul>
              <li>
                <button
                  type="button"
                  onClick={(event) =>
                    handleClick(event, 1, quizRound.correctAnswerPosition)
                  }
                >
                  <span>1 -</span>
                  {quizRound.option1}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(event) =>
                    handleClick(event, 2, quizRound.correctAnswerPosition)
                  }
                >
                  <span>2 -</span>
                  {quizRound.option2}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(event) =>
                    handleClick(event, 3, quizRound.correctAnswerPosition)
                  }
                >
                  <span>3 -</span>
                  {quizRound.option3}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(event) =>
                    handleClick(event, 4, quizRound.correctAnswerPosition)
                  }
                >
                  <span>4 -</span>
                  {quizRound.option4}
                </button>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionAnswers;
