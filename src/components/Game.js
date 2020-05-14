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
    quizDifficulty,
  } = useContext(QuizAPIContext);

  const { startGameClick, isGameStarted, score, round } = useContext(
    GameContext
  );

  useEffect(() => {
    toggleShouldRedirectGame();
  }, [toggleShouldRedirectGame]);

  // to start from the top when moving throught pages:
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [quizName]);


  return (
    <section className="game">
      {isGameStarted ? (
        <div>
          <div className="game-nav">
            <ul>
              <li>
                <BackBtn url="/" />
              </li>
              <li>
                <h1>{quizName}</h1>
              </li>
              <li>
                <p className="category">Difficulty: {quizDifficulty}</p>
                <p className="category">Category: {quizCategoryName}</p>
              </li>
            </ul>
          </div>
          <Container fluid>
            <Row>
              <Col
                xs={12}
                sm={{ span: 12, offset: 0 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 8, offset: 2 }}
              >
                <ul className="board-results">
                  <li>Rounds: {round}/10</li>
                  <li>Score: {score}</li>
                </ul>
              </Col>
            </Row>
            <Row className="content-block">
              <Col
                xs={12}
                sm={{ span: 12, offset: 0 }}
                md={{ span: 10, offset: 1 }}
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
          <article className="game-welcome">
            <Container fluid>
              <Row className="content-block">
                <Col
                  xs={12}
                  sm={12}
                  md={{ span: 8, offset: 2 }}
                  lg={{ span: 8, offset: 2 }}
                >
                  <p>Let&apos;s play it {quizDifficulty}</p>
                  <h1>{quizName}</h1>
                  <h2 className="category">{quizCategoryName} trivia</h2>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={{ span: 8, offset: 2 }}
                  lg={{ span: 8, offset: 2 }}
                >
                  <p>{quizInstructions}</p>
                  <p className="rules">
                    There are ten rounds of questions, with four options each
                    and you have to find the right answer.
                  </p>
                </Col>
              </Row>
              <Row>
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
          </article>
        </div>
      )}
    </section>
  );
};

export default Game;
