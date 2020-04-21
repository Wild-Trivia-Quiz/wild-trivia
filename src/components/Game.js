import React from 'react';
import GameIntro from './GameIntro';
import GameUI from './GameUI';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameUILoaded: false,
    };
  }

  handleClick = () => {
    this.setState({
      isGameUILoaded: true,
    });
  };

  render() {
    const { isGameUILoaded } = this.state;

    return (
      <div>
        {isGameUILoaded ? <GameUI /> : <GameIntro click={this.handleClick} />}
      </div>
    );
  }
}

export default Game;
