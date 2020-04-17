import React from 'react';
import MainPage from './MainPage';
import LandingPage from './LandingPage';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMainPageLoaded: false 
    };
  }

  handleClick = () => {
    console.log('clicked');
    this.setState({
      isMainPageLoaded : true
    }) 
  } 

  render() {
    const {isMainPageLoaded} = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleClick}>Click</button>
        {
        isMainPageLoaded ? 
        <MainPage /> : 
        <LandingPage />
        }
      </div>
    );
  }
}

export default Homepage;
