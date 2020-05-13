import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import BackBtn from "./BackBtn";
import QuestionAnswers from "./QuestionAnswers";
import { QuizAPIContext } from "../contexts/QuizAPIContext";
import "./Game.scss";

const Game = () => {
  const {
    toggleShouldRedirectGame,
    quizData,
    quizName,
    quizCategoryName,
    quizQuestions,
    quizInstructions,
  } = useContext(QuizAPIContext);
  //console.log(quizData);

  useEffect(() => {
    toggleShouldRedirectGame();
  }, []);

  return (
    <section className="game">
      <BackBtn url="/" />
      <Container fluid>
        <Row className="content-block">
          <Col
            xs={12}
            sm={12}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 8, offset: 2 }}
          >
            <h1>{quizName}</h1>
            <p>Category: {quizCategoryName}</p>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 8, offset: 2 }}
          >
            <p>{quizInstructions}</p>
          </Col>
        </Row>
        <Row className="content-block">
          <Col
            xs={12}
            sm={12}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 8, offset: 2 }}
          >
            <QuestionAnswers />;
          </Col>
        </Row>
        <Row className="content-block">
          <Col
            xs={12}
            sm={12}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 8, offset: 2 }}
          >
            <button type="submit" className="arcade-btn">
              Bring it on!
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Game;
