import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './custom-button.styles';

const CustomButton = ({ children, type, big, onClick }) => (
  <Button
    className={`${big ? 'btn-bg' : ''}`}
    type={type === 'submit' ? 'submit' : 'button'}
    onClick={onClick}
  >
    {children}
  </Button>
);

CustomButton.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  big: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CustomButton;
