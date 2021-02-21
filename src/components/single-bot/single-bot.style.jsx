import styled, { css } from 'styled-components';
import { colors } from '../../styles-config/config';

const dashboardBotStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
`;

const getBotStyles = ({ botOnDashboard }) =>
  botOnDashboard ? dashboardBotStyles : '';

export const SingleBotConainer = styled.div`
  ${getBotStyles}
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const dashboardSpecStyles = css`
  max-width: 216px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 16px;
    margin: 0;
  }

  ul {
    .no-dashboard {
      display: none;
    }

    li > span {
      color: $paragraph;
      display: block;
      line-height: 3;
    }
  }
`;

const getSpecsStyles = ({ botOnDashboard }) =>
  botOnDashboard ? dashboardSpecStyles : '';

export const SpecsContainer = styled.div`
  h2 {
    color: ${colors.accentColor};
    text-align: center;
    font-size: 20px;
  }

  ul {
    li {
      list-style: none;
      padding: 5px 0;
      font-size: 12px;
    }
  }

  ${getSpecsStyles}
`;

export const BotSpec = styled.span`
  color: ${colors.paragraph};
`;
