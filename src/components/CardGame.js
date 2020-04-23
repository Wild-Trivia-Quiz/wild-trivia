import React from "react";
import "./CardGame.scss";
import { Card, Form } from "react-bootstrap";
import PropTypes from 'prop-types';
import cardGameImage from "../img/cardgame.jpg";

function CardGame( {active, handleClick} ) {
    return (
      <Card className="card-game text-white">
        <div className="card-img-wrapper">
          <Card.Img src={cardGameImage} alt="Game" />
        </div>
        <Card.ImgOverlay>
          <h2>Game title</h2>
          <Form>
            <Form.Group controlId="form.SelectGame">
              <Form.Label>What&apos;s your difficulty level?</Form.Label>
              <Form.Control as="select">
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
                <option>Random</option>
              </Form.Control>
            </Form.Group>
            <button type="button" className={active ? 'button-on arcade-btn' : 'button-off arcade-btn'} onClick={handleClick}>
              Let&apos;s play!
            </button>
          </Form>
        </Card.ImgOverlay>
      </Card>
    );
}

CardGame.propTypes = {
  active: PropTypes.bool,
  handleClick: PropTypes.func
};

CardGame.defaultProps = {
  handleClick: () => {},
  active: false
};

export default CardGame;
