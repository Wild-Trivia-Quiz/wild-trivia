import React from "react";
import axios from "axios";
import "./MainPage.scss";
import { Container, Row, Col } from "react-bootstrap";
import CardGame from "./CardGame";
import logo from "../img/logo-white.png";
import gamesnames from "../gamesnames.json";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      quizData: []
    };
  }

  triviaApiCall = (event) => {
    let searchParams = "";
    
    if (event.target.value !== "random") {
      searchParams = `&difficulty=${event.target.value}`;
      console.log(`game difficulty ${event.target.value}`);
    }
    
    axios
      .get(
        `https://opentdb.com/api.php?amount=10&category=23${searchParams}&type=multiple&encode=url3986`
      )
      .then((response) => {
        console.log(response.data.results);
        const quizData = response.data.results;
        this.setState({
          quizData,
        });
      });
  };

  handleClick = () => {
    const { active } = this.state;
    this.setState({
      active: !active,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit game!")
  }

  render() {
    const { active } = this.state;
    return (
      <div className="mainpage">
        <Container fluid>
          <Row className="content-block">
            <Col xs={12} sm={12} md={12} lg={6}>
              <div className="logo-wrapper">
                <img className="logo" src={logo} alt="logo" />
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <article>
                <Row>
                  <Col
                    xs={12}
                    sm={12}
                    md={{ span: 8, offset: 2 }}
                    lg={{ span: 12, offset: 0 }}
                  >
                    <h1>Hey you && welcome to Wild Trivia games!</h1>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={{ span: 8, offset: 2 }}
                    lg={{ span: 12, offset: 0 }}
                  >
                    <p>
                      Are you ready to start?! Here are some of our top trivia
                      games for you to play. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                  </Col>
                </Row>
              </article>
            </Col>
          </Row>
          <Row className="content-block">
            {gamesnames.map((game) => (
              <CardGame
                key={game.id}
                id={game.id}
                name={game.name}
                active={active}
                handleClick={this.handleClick}
                handleSubmit={this.handleSubmit}
                triviaApiCall={this.triviaApiCall}
              />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainPage;
