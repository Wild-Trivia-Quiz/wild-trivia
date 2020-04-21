import React from 'react';

function GameIntro(props) {
  return (
    <div>
      <p>Game Intro</p>
      <button type='button' onClick={props.click}>
        I'm ready, bring it on!
      </button>
    </div>
  );
}

export default GameIntro;
