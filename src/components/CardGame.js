import React from "react";
import "./CardGame.scss";
import { Card, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import cardGameImage from "../img/cardgame.jpg";

function CardGame({ active, handleClick, handleSubmit, triviaApiCall, name, id }) {
  return (
    <Col xs={12} sm={6} md={6} lg={4}>
      <Card id={`game-${id}`} className="card-game text-white">
        <div className="card-img-wrapper">
          <Card.Img src={cardGameImage} alt="Game" />
        </div>
        <Card.ImgOverlay>
          <h2>{name}</h2>
          <Form>
            <Form.Group controlId="form.SelectGame" onSubmit={handleSubmit}>
              <Form.Label>What&apos;s your difficulty level?</Form.Label>
              <Form.Control
                as="select"
                name="difficulty"
                onBlur={triviaApiCall}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                <option value="random">Random</option>
              </Form.Control>
            </Form.Group>
            <button
              type="button"
              className={
                active ? "button-on arcade-btn" : "button-off arcade-btn"
              }
              onClick={handleClick}
            >
              Let&apos;s play!
            </button>
          </Form>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
}

CardGame.propTypes = {
  active: PropTypes.bool,
  handleClick: PropTypes.func,
  handleSubmit: PropTypes.func,
  triviaApiCall: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.number
};

CardGame.defaultProps = {
  handleClick: () => {},
  handleSubmit: () => {},
  triviaApiCall: () => {},
  active: false,
  name: "",
  id: ""
};

export default CardGame;
