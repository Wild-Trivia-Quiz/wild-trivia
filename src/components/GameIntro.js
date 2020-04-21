import React from 'react';
import PropTypes from 'prop-types';

function GameIntro(props) {
  const { click } = props;

  return (
    <div>
      <p>Game Intro</p>
      <button type='button' onClick={click}>
        I&apos;m ready, bring it on!
      </button>
    </div>
  );
}

GameIntro.propTypes = {
  click: PropTypes.func,
};

GameIntro.defaultProps = {
  click: () => {},
};
export default GameIntro;
