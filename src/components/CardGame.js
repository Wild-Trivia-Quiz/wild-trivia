import React from "react";
import "./CardGame.scss";
import { Card, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import cardGameImage from "../img/cardgame.jpg";

function CardGame({
  handleSubmit,
  handleChange,
  handleClick,
  isButtonClicked,
  name,
  id,
  value,
}) {
  return (
    <Col xs={12} sm={6} md={6} lg={4}>
      <Card id={`game-${id}`} className="card-game text-white">
        <div className="card-img-wrapper">
          <Card.Img src={cardGameImage} alt="Game" />
        </div>
        <Card.ImgOverlay>
          <h2>{name}</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId={`form.SelectGame-${id}`}>
              <Form.Label>What&apos;s your difficulty level?</Form.Label>
              <Form.Control as="select" value={value} onChange={handleChange}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                <option value="random">Random</option>
              </Form.Control>
            </Form.Group>
            <button
              id={`game-btn-${id}`}
              type="submit"
              className={isButtonClicked ? "arcade-btn active" : "arcade-btn"}
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
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  isButtonClicked: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.number,
  value: PropTypes.string,
};

CardGame.defaultProps = {
  handleSubmit: () => {},
  handleChange: () => {},
  handleClick: () => {},
  isButtonClicked: false,
  value: "easy",
  name: "",
  id: "",
};

export default CardGame;
