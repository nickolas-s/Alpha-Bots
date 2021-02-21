import React from 'react';
import PropTypes from 'prop-types';

import { PieWrapper } from './percentage-circle.styles';

const PercentageCircle = ({ success }) => (
  <PieWrapper success={success}>
    <span className="label">
      {success}
      <span className="smaller">%</span>
    </span>
    <div className="pie">
      <div className="left-side half-circle" />
      <div className="right-side half-circle" />
    </div>
    <div className="shadow" />
  </PieWrapper>
);

PercentageCircle.propTypes = {
  success: PropTypes.number,
};

export default PercentageCircle;
