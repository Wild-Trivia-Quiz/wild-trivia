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
                    <h1>Hey you & welcome to Wild Trivia games!</h1>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={{ span: 8, offset: 2 }}
                    lg={{ span: 12, offset: 0 }}>
                    <p>Let&apos;s get that brain to work, shall we? Have you heard the pulleys moving? How much knowledge have you accumulated over the years? What do you know about Music, Movies, Science, etc? We have several trivia to exercise your knowledge. Choose yours!
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
                image={game.image}
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
