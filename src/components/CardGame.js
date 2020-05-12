import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Card, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import cardGameImage from "../img/cardgame.jpg";
import { QuizAPIContext } from "../contexts/QuizAPIContext";
import "./CardGame.scss";

const CardGame = ({ name, id }) => {
  const { triviaApiCall, shouldRedirect } = useContext(QuizAPIContext);

  const [gameSelectionValue, setGameSelectionValue] = useState("easy");

  const selectChangeHandler = (event) => {
    console.log("selectChangeHandler", event.target.value);
    setGameSelectionValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    triviaApiCall(gameSelectionValue);
  };

  console.log(id);

  return (
    <Col xs={12} sm={6} md={6} lg={4}>
      {shouldRedirect && <Redirect to="/game" />}
      <Card id={`game-${id}`} className="card-game text-white">
        <div className="card-img-wrapper">
          <Card.Img src={cardGameImage} alt="Game" />
        </div>
        <Card.ImgOverlay>
          <h2>{name}</h2>
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

CardGame.propTypes = { name: PropTypes.string, id: PropTypes.number };

CardGame.defaultProps = {
  name: "",
  id: "",
};

export default CardGame;
