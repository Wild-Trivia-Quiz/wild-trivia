import React, { useContext } from 'react';
import './GameResult.scss';
import { QuizAPIContext } from '../contexts/QuizAPIContext';
import Round from './Round';
import { GameContext } from '../contexts/GameContext';

const GameResult = () => {
  const { quizQuestionsAndAnswers } = useContext(QuizAPIContext);
  const { correctAnswersCounter } = useContext(GameContext);

  return (
    <div className='game-result'>
      <p>
        Congratulations, you have reached the end with {correctAnswersCounter}
        {''}
        correct answers. Here are all the others:
      </p>
      <section className='final-results'>
        {quizQuestionsAndAnswers.map((quizRound) => (
          <Round key={quizRound.id} quizRound={{ ...quizRound }} />
        ))}
      </section>
    </div>
  );
};

export default GameResult;
