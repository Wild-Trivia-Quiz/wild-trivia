import React, { useContext, useState } from 'react';
import { QuizAPIContext } from '../contexts/QuizAPIContext';

const Round = () => {
  const { quizQuestionsAndAnswers, score, round } = useContext(QuizAPIContext);

  return <>around the round</>;
};

export default Round;
