import React from "react";
import PropTypes from "prop-types";

const GameIntro = ({ click }) => {
  return (
    <div>
      <p>Game Intro</p>
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
