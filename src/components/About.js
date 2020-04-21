import React from 'react';
import BackBtn from './BackBtn'

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BackBtn url="/" />
      </div>
    );
  }
}

export default About;
