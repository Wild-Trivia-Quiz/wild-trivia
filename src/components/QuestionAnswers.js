import React, { useContext } from "react";
import { QuizAPIContext } from "../contexts/QuizAPIContext";
import { GameContext } from "../contexts/GameContext";
import GameResult from "./GameResult";

const QuestionAnswers = () => {
  const { quizQuestionsAndAnswers } = useContext(QuizAPIContext);
  const { handleClick, round, isGameFinished } = useContext(GameContext);

  return (
    <div>
      {isGameFinished ? (
        <GameResult />
      ) : (
        quizQuestionsAndAnswers.map(
          (quizRound) =>
            quizRound.id === round && (
              <div
                className="question-answers"
                key={quizRound.id}
                id={`round-${quizRound.id}`}
              >
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
            )
        )
      )}
    </div>
  );
};

export default QuestionAnswers;
