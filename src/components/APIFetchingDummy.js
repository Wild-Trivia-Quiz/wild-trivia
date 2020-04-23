import React from 'react';
import axios from 'axios';

class APIFetchingDummy extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quizData: [] };
  }

  triviaApiCall = (event) => {
    let searchParams = '';

    if (event.target.value !== 'any') {
      searchParams = `&difficulty=${event.target.value}`;
    }

    axios
      .get(
        `https://opentdb.com/api.php?amount=10&category=23${searchParams}&type=multiple&encode=url3986`
      )
      .then((response) => {
        console.log(response);
        const quizData = response.data.results;
        this.setState({ quizData });
      });
  };

  render() {
    return (
      <div>
        <select name='difficulty' required onBlur={this.triviaApiCall}>
          <option value='' disabled selected hidden>
            Select difficulty
          </option>
          <option value='any'>Any</option>
          <option value='easy'>Easy</option>
          <option value='medium'>Medium</option>
          <option value='hard'>Hard</option>
        </select>
      </div>
    );
  }
}

export default APIFetchingDummy;
