import styled from 'styled-components';
import { colors } from '../../styles-config/config';

export const BotsPageContainer = styled.div`
  color: ${colors.headline};
  padding: 20px;

  h1 {
    color: ${colors.headline};
    text-align: center;
    padding-bottom: 20px;
  }

  p {
    color: ${colors.paragraph};
    padding-bottom: 20px;
  }
`;

export const CurrentBotsContainer = styled.div`
  background-color: ${colors.cardBackground};
  border-radius: 5px;
  padding: 20px;
  padding: clamp(0.75rem, 3.5vw, 1.875rem);
  margin-bottom: 20px;

  ul {
    li {
      list-style: none;
      color: ${colors.headline};
      padding: 5px 0;
      height: 40px;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      font-size: clamp(0.75rem, 3.5vw, 1rem);
      align-items: center;
    }
  }
`;

export const BotsDisplayContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

export const BotCard = styled.div`
  background-color: ${colors.cardBackground};
  border-radius: 5px;
  padding: 20px;
  border: 3px solid ${colors.cardBackground};
  transition: all 300ms;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.3);
  }

  &.selected {
    border: 3px solid ${colors.accentColor};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
