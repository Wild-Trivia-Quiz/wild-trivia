import React, { useContext, useEffect } from 'react';
import { QuizAPIContext } from '../contexts/QuizAPIContext';
import { GameContext } from '../contexts/GameContext';
import GameResult from './GameResult';
import './QuestionAnswers.scss';
import Round from './Round';

const QuestionAnswers = () => {
  const { quizQuestionsAndAnswers } = useContext(QuizAPIContext);
  const { round, isGameFinished } = useContext(GameContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {isGameFinished ? (
        <GameResult />
      ) : (
        quizQuestionsAndAnswers.map(
          (quizRound) =>
            quizRound.id === round && (
              <Round key={quizRound.id} quizRound={{ ...quizRound }} />
            )
        )
      )}
    </div>
  );
};

export default QuestionAnswers;
