import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import BackBtn from './BackBtn';
import { QuizAPIContext } from '../contexts/QuizAPIContext';
import './Game.scss';

const Game = () => {
  const { toggleShouldRedirectGame, quizData } = useContext(QuizAPIContext);
  console.log(quizData);

  useEffect(() => {
    toggleShouldRedirectGame();
  }, []);

  return (
    <section className='game'>
      <Container fluid>
        <Row className='content-block'>
          <Col xs={12} sm={12} md={12} lg={12}>
            <BackBtn url='/' />
          </Col>
        </Row>
        <Row className='content-block'>
          <Col
            xs={12}
            sm={12}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 8, offset: 2 }}>
            <h1>game name</h1>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 8, offset: 2 }}>
            <p>
              Game instructions here. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </Col>
        </Row>
        <Row className='content-block'>
          <Col
            xs={12}
            sm={12}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 8, offset: 2 }}>
            {/*  <form onSubmit={handleSubmitAvatar}>
              <label htmlFor="avatar">Set a nickname:</label>
              <input
                type="text"
                name="avatar"
                id="avatar"
                value={avatar}
                onChange={handleChangeAvatar}
              />
              <button type="submit" className="arcade-btn">
                Bring it on!
              </button>
            </form> */}
            <button type='submit' className='arcade-btn'>
              Bring it on!
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Game;
