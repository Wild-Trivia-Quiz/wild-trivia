import React from "react";
import "./MainPage.scss";
import { Container, Row, Col } from "react-bootstrap";
import CardGame from "./CardGame";
import logo from "../img/logo-white.png";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  handleClick = () => {
    const { active } = this.state;
    this.setState({
      active: !active,
    });
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
            <Col xs={12} sm={6} md={6} lg={4}>
              <CardGame active={active} handleClick={this.handleClick} />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
              <CardGame active={active} handleClick={this.handleClick} />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
              <CardGame active={active} handleClick={this.handleClick} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainPage;
