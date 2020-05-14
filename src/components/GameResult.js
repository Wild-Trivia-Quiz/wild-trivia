import React, { useContext } from "react";
import Round from "./Round";
import { QuizAPIContext } from "../contexts/QuizAPIContext";
import { GameContext } from "../contexts/GameContext";
import logo from '../img/logo-white.png';
import "./GameResult.scss";

const GameResult = () => {
  const { quizQuestionsAndAnswers } = useContext(QuizAPIContext);
  const { round, score, correctAnswersCounter } = useContext(GameContext);

  return (
    <div className="game-result">
      <div className="message">
        <h4>
          Congratulations, you have reached the end with:<br /><span>{correctAnswersCounter}{" "}
          correct answers</span>
        </h4>
        <img src={logo} alt='logo' className='logo' />
        <p>Check your Trivia Game with all the questions and answers bellow.</p>
      </div>
      <ul className="board-results">
        <li>Rounds: {round}/10</li>
        <li>Score: {score}/100</li>
      </ul>
      <section className="final-results">
        {quizQuestionsAndAnswers.map((quizRound) => (
          <Round key={quizRound.id} quizRound={{ ...quizRound }} />
        ))}
      </section>
    </div>
  );
};

export default GameResult;
