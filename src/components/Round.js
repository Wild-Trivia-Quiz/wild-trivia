import React, { useContext } from "react";
import PropTypes from "prop-types";
import { GameContext } from "../contexts/GameContext";
import "./Round.scss";

const Round = ({
  question,
  id,
  correctAnswerPosition,
  option1,
  option2,
  option3,
  option4,
}) => {
  const { handleClick } = useContext(GameContext);

  return (
    <div className="question-answers" id={`round-${id}`}>
      <p className="question">{question}</p>
      <ul>
        <li>
          <button
            className={correctAnswerPosition === 1 ? "correct-answer" : ""}
            type="button"
            onClick={() => handleClick(1, correctAnswerPosition)}
          >
            <span>1 · </span>
            {option1}
          </button>
        </li>
        <li>
          <button
            className={correctAnswerPosition === 2 ? "correct-answer" : ""}
            type="button"
            onClick={() => handleClick(2, correctAnswerPosition)}
          >
            <span>2 · </span>
            {option2}
          </button>
        </li>
        <li>
          <button
            className={correctAnswerPosition === 3 ? "correct-answer" : ""}
            type="button"
            onClick={() => handleClick(3, correctAnswerPosition)}
          >
            <span>3 · </span>
            {option3}
          </button>
        </li>
        <li>
          <button
            className={correctAnswerPosition === 4 ? "correct-answer" : ""}
            type="button"
            onClick={() => handleClick(4, correctAnswerPosition)}
          >
            <span>4 · </span>
            {option4}
          </button>
        </li>
      </ul>
    </div>
  );
};

Round.propTypes = {
  id: PropTypes.number,
  question: PropTypes.string,
  correctAnswerPosition: PropTypes.number,
  option1: PropTypes.string,
  option2: PropTypes.string,
  option3: PropTypes.string,
  option4: PropTypes.string,
};

Round.defaultProps = {
  id: "",
  question: "",
  correctAnswerPosition: 0,
  option1: "",
  option2: "",
  option3: "",
  option4: "",
};

export default Round;
