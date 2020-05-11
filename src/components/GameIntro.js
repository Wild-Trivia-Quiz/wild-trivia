import React, {useContext} from "react";
import PropTypes from "prop-types";
import BackBtn from "./BackBtn";
import { QuizAPIContext } from '../contexts/QuizAPIContext';

const GameIntro = ({ click }) => {
  const {quizData} = useContext(QuizAPIContext);
  //console.log(quizData);
  
  return (
    <div>
      <p>Game Intro</p>
      <BackBtn url="/" />
      <button type="button" onClick={click}>
        I&apos;m ready, bring it on!
      </button>
    </div>
  );
};

GameIntro.propTypes = {
  click: PropTypes.func,
};

GameIntro.defaultProps = {
  click: () => {},
};

export default GameIntro;
