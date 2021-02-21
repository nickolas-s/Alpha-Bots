import styled from 'styled-components';
import { colors } from '../../styles-config/config';

// https://codepen.io/jo-asakura/pen/stFHi

// -- vars
const defaultSize = 10;
const labelFontSize = defaultSize / 4;
const labelFontSizeRedo = defaultSize * 1;

const size = (width, height) =>
  `
height: ${height}%;
width: ${width}%;
`;

const drawProgress = ({ success }) => `
.pie {
  .left-side {
    transform: rotate(${success * 3.6}deg);
  }

  ${
    success <= 50
      ? `.right-side {display: none;}`
      : `clip: rect(auto, auto, auto, auto); .right-side {transform: rotate(180deg);}`
  }
}
`;

// -- component
export const PieWrapper = styled.div`
  height: ${defaultSize}em;
  width: ${defaultSize}em;
  float: left;
  margin: 15px;
  position: relative;

  .pie {
    ${size(100, 100)};
    clip: rect(0, ${defaultSize}em, ${defaultSize}em, ${defaultSize / 2}em);
    left: 0;
    position: absolute;
    top: 0;

    .half-circle {
      ${size(100, 100)};
      border: ${defaultSize / 6}em solid ${colors.progressBr};
      border-radius: 50%;
      clip: rect(0, ${defaultSize / 2}em, ${defaultSize}em, 0);
      left: 0;
      position: absolute;
      top: 0;
    }
  }

  .label {
    border-radius: 50%;
    bottom: ${labelFontSizeRedo / 10}em;
    color: ${colors.headline};
    cursor: default;
    display: block;
    font-size: ${labelFontSize}em;
    left: ${labelFontSizeRedo / 10}em;
    line-height: ${labelFontSizeRedo * 0.16}em;
    position: absolute;
    right: ${labelFontSizeRedo / 10}em;
    text-align: center;
    top: ${labelFontSizeRedo / 10}em;

    .smaller {
      color: ${colors.paragraph};
      font-size: 0.45em;
      padding-bottom: 20px;
      vertical-align: super;
    }
  }

  .shadow {
    ${size(100, 100)};
    border: ${defaultSize / 6}em solid ${colors.paragraph};
    border-radius: 50%;
  }

  ${drawProgress}
`;
