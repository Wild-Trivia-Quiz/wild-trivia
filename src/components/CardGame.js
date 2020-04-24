import React from "react";
import "./CardGame.scss";
import { Card, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import cardGameImage from "../img/cardgame.jpg";

class CardGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameSelectionValue: "easy",
    };
  }

  selectChangeHandler = (e) => {
    console.log("changed", e.target.value);
    this.setState({
      gameSelectionValue: e.target.value,
    });
  };

  render() {
    const {
      handleSubmit,
      name,
      id,
    } = this.props;

    const { gameSelectionValue } = this.state;
    return (
      <Col xs={12} sm={6} md={6} lg={4}>
        <Card id={`game-${id}`} className="card-game text-white">
          <div className="card-img-wrapper">
            <Card.Img src={cardGameImage} alt="Game" />
          </div>
          <Card.ImgOverlay>
            <h2>{name}</h2>
            <Form onSubmit={(event) => handleSubmit(event, gameSelectionValue)}>
              <Form.Group controlId={`form.SelectGame-${id}`}>
                <Form.Label>What&apos;s your difficulty level?</Form.Label>
                <Form.Control
                  as="select"
                  value={gameSelectionValue}
                  onChange={this.selectChangeHandler}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                  <option value="random">Random</option>
                </Form.Control>
              </Form.Group>
              <button
                id={`game-btn-${id}`}
                type="submit"
                className="arcade-btn"
              >
                Let&apos;s play!
              </button>
            </Form>
          </Card.ImgOverlay>
        </Card>
      </Col>
    );
  }
}

CardGame.propTypes = {
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.number
};

CardGame.defaultProps = {
  handleSubmit: () => {},
  name: "",
  id: "",
};

export default CardGame;
