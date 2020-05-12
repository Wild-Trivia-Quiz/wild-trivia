import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardGame from './CardGame';
import Footer from './Footer';
import logo from '../img/logo-white.png';
import gamesnames from '../gamesnames.json';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div>
      <div className='mainpage'>
        <Container fluid>
          <Row className='content-block'>
            <Col xs={12} sm={12} md={12} lg={6}>
              <div className='logo-wrapper'>
                <img className='logo' src={logo} alt='logo' />
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <article>
                <Row>
                  <Col
                    xs={12}
                    sm={12}
                    md={{ span: 8, offset: 2 }}
                    lg={{ span: 12, offset: 0 }}>
                    <h1>Hey you && welcome to Wild Trivia games!</h1>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={{ span: 8, offset: 2 }}
                    lg={{ span: 12, offset: 0 }}>
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
          <Row className='content-block'>
            {gamesnames.map((game) => (
              <CardGame
                key={game.id}
                id={game.id}
                name={game.name}
                category={game.category}
                categoryName={game.categoryName}
                instructions={game.instructions}
              />
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
