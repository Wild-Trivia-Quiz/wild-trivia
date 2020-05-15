import React, { useContext, useEffect } from "react";
import { QuizAPIContext } from "../contexts/QuizAPIContext";
import { GameContext } from "../contexts/GameContext";
import GameResult from "./GameResult";
import Round from "./Round";
import "./QuestionAnswers.scss";

const QuestionAnswers = () => {
  const { quizQuestionsAndAnswers } = useContext(QuizAPIContext);
  const { score, round, isGameFinished } = useContext(GameContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="board-background">
      {isGameFinished ? (
        <GameResult />
      ) : (
        <div className="board-background">
          <ul className="board-results">
            <li>Rounds: {round}/10</li>
            <li>Score: {score}/100</li>
          </ul>
          {quizQuestionsAndAnswers.map(
            (quizRound) =>
              quizRound.id === round && (
                <Round
                  key={quizRound.id}
                  id={quizRound.id}
                  question={quizRound.question}
                  correctAnswerPosition={quizRound.correctAnswerPosition}
                  option1={quizRound.option1}
                  option2={quizRound.option2}
                  option3={quizRound.option3}
                  option4={quizRound.option4}
                />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionAnswers;
