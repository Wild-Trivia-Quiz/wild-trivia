import React from 'react';
import APIFetchingDummy from './APIFetchingDummy';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Selected Landing Page</div>
        <div>
          <APIFetchingDummy />
        </div>
      </div>
    );
  }
}

export default LandingPage;
