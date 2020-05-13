import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './BackBtn.scss';

const BackBtn = ({ url }) => {
  return (
    <div className="back-btn-wrapper">
      <Link to={url} className="back-btn" />
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
