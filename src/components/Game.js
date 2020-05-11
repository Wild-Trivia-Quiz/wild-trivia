import React, { useState } from "react";
import GameIntro from "./GameIntro";
import GameUI from "./GameUI";

const Game = () => {
  const [isGameUILoaded, setIsGameUILoaded] = useState(false);

  const handleClick = () => {
    setIsGameUILoaded(true);
  };

  return (
    <div>{isGameUILoaded ? <GameUI /> : <GameIntro click={handleClick} />}</div>
  );
};

export default Game;
