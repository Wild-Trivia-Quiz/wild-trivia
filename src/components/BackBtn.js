import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './BackBtn.scss';
import { GameContext } from '../contexts/GameContext';

const BackBtn = ({ url }) => {
  const { isGameStarted } = useContext(GameContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button type='button' className='back-btn' onClick={handleShow} />
      <Modal className='modal-page' show={show} onHide={handleClose}>
        <Modal.Body className='modal-box'>
          <Modal.Header>
            <Modal.Title className='modal-title'>
              {isGameStarted ? 'Quit the game?' : 'Back to the Homepage?'}
            </Modal.Title>
          </Modal.Header>

          <Modal.Footer>
            <button type='button' className='no-button' onClick={handleClose}>
              No thanks...
            </button>
            <Link className='yes-link' to={url} onClick={handleClose}>
              Yes please!
            </Link>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
};
BackBtn.propTypes = {
  url: PropTypes.string,
};

BackBtn.defaultProps = {
  url: '',
};

export default BackBtn;
