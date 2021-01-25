import React from 'react';
import PropTypes from 'prop-types';
import '../scss/custom-button.styles.scss';

const CustomButton = ({ children, type, big, onClick }) => (
  <button
    className={`${big ? 'btn-bg' : ''} custom-button`}
    type={type === 'submit' ? 'submit' : 'button'}
    onClick={onClick}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  big: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CustomButton;
