import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './BackBtn.scss';

const BackBtn = ({ url }) => {
  return (
      <Link to={url} className="back-btn" />
  );
};
BackBtn.propTypes = {
  url: PropTypes.string,
};

BackBtn.defaultProps = {
  url: '',
};

export default BackBtn;
