import React, { useContext } from 'react';
import PropTypes from "prop-types";
import { GameContext } from '../contexts/GameContext';
import "./Round.scss";

const Round = ({ quizRound }) => {
  const { handleClick } = useContext(GameContext);

  return (
    <div className='question-answers' id={`round-${quizRound.id}`}>
      <p className='question'>{quizRound.question}</p>
      <ul>
        <li>
          <button
            className={
              quizRound.correctAnswerPosition === 1 && 'correct-answer'
            }
            type='button'
            onClick={(event) =>
              handleClick(event, 1, quizRound.correctAnswerPosition)
            }>
            <span>1 · </span>
            {quizRound.option1}
          </button>
        </li>
        <li>
          <button
            className={
              quizRound.correctAnswerPosition === 2 && 'correct-answer'
            }
            type='button'
            onClick={(event) =>
              handleClick(event, 2, quizRound.correctAnswerPosition)
            }>
            <span>2 · </span>
            {quizRound.option2}
          </button>
        </li>
        <li>
          <button
            className={
              quizRound.correctAnswerPosition === 3 && 'correct-answer'
            }
            type='button'
            onClick={(event) =>
              handleClick(event, 3, quizRound.correctAnswerPosition)
            }>
            <span>3 · </span>
            {quizRound.option3}
          </button>
        </li>
        <li>
          <button
            className={
              quizRound.correctAnswerPosition === 4 && 'correct-answer'
            }
            type='button'
            onClick={(event) =>
              handleClick(event, 4, quizRound.correctAnswerPosition)
            }>
            <span>4 · </span>
            {quizRound.option4}
          </button>
        </li>
      </ul>
    </div>
  );
};

Round.propTypes = {
  id: PropTypes.number,
  quizRound:  PropTypes.shape,
};

Round.defaultProps = {
  id: "",
  quizRound: {}
};

export default Round;
