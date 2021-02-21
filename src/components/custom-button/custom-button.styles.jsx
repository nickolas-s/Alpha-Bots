import styled from 'styled-components';
import { colors } from '../../styles-config/config';

export const Button = styled.button`
  color: ${colors.headline};
  padding: 5px 10px;
  background-color: ${colors.accentColor};
  border-radius: 5px;
  border: 2px solid ${colors.accentColor};
  cursor: pointer;
  transition: all 700ms;
  font-family: inherit;

  &:hover {
    background-color: ${colors.cardBackground};
  }

  &.btn-bg {
    padding: 15px;
    font-size: 18px;
    letter-spacing: 1px;
    width: 240px;
  }
`;
