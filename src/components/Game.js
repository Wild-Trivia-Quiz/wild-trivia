import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BackBtn from "./BackBtn";
import QuestionAnswers from "./QuestionAnswers";
import { QuizAPIContext } from "../contexts/QuizAPIContext";
import { GameContext } from "../contexts/GameContext";
import "./Game.scss";

const Game = () => {
  const {
    toggleShouldRedirectGame,
    quizName,
    quizCategoryName,
    quizInstructions,
  } = useContext(QuizAPIContext);

  const { startGameClick, isGameStarted, score, round } = useContext(
    GameContext
  );

  useEffect(() => {
    toggleShouldRedirectGame();
  }, []);

  return (
    <section className="game">
      {isGameStarted ? (
        <div>
          <div className="game-nav">
            <BackBtn url="/" />
            <ul>
              <li>
                <p>Score: {score}</p>
              </li>
              <li>
                <p>Rounds: {round}/10</p>
              </li>
              <li>
                <h1>{quizName}</h1>
                <p className="category">Category: {quizCategoryName}</p>
              </li>
              
            </ul>
          </div>
          <Container fluid>
            <Row className="content-block">
              <Col
                xs={12}
                sm={12}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 8, offset: 2 }}
              >
                <QuestionAnswers />
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <div>
          <div className="game-nav">
            <BackBtn url="/" />
          </div>
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
                <button
                  type="submit"
                  className="arcade-btn"
                  onClick={startGameClick}
                >
                  Bring it on!
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </section>
  );
};

export default Game;
