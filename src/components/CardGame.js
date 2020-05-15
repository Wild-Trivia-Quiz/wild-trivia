import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Card, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { QuizAPIContext } from "../contexts/QuizAPIContext";
import { GameContext } from "../contexts/GameContext";
import "./CardGame.scss";

const CardGame = ({
  name,
  id,
  category,
  categoryName,
  instructions
}) => {
  const { triviaApiCall, shouldRedirect } = useContext(QuizAPIContext);
  const { resetGameStartState } = useContext(GameContext);

  const [gameSelectionValue, setGameSelectionValue] = useState("easy");

  const selectChangeHandler = (event) => {
    setGameSelectionValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    resetGameStartState();
    triviaApiCall(
      gameSelectionValue,
      category,
      name,
      categoryName,
      instructions
    );
  };

  return (
    <Col xs={12} sm={6} md={6} lg={4}>
      {shouldRedirect && <Redirect to="/game" />}
      <Card id={`game-${id}`} className="card-game text-white">
        <Card.ImgOverlay>
          <h2>{name}</h2>
          <p className="category">{categoryName} Trivia</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId={`form.SelectGame-${id}`}>
              <Form.Label>What&apos;s your difficulty level?</Form.Label>
              <Form.Control
                as="select"
                value={gameSelectionValue}
                onChange={selectChangeHandler}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                <option value="random">Random</option>
              </Form.Control>
            </Form.Group>
            <button id={`game-btn-${id}`} type="submit" className="arcade-btn">
              Let&apos;s play!
            </button>
          </Form>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};

CardGame.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  category: PropTypes.number,
  categoryName: PropTypes.string,
  instructions: PropTypes.string
};

CardGame.defaultProps = {
  name: "",
  id: "",
  category: "",
  categoryName: "",
  instructions: ""
};

export default CardGame;
