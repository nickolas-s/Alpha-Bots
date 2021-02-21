import styled from 'styled-components';
import { colors } from '../../styles-config/config';

export const BotsDashboardContainer = styled.div`
  color: ${colors.headline};
  margin: 20px;

  h2 {
    margin-bottom: 20px;
    margin-left: 30px;
  }
`;

export const BotsContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(335px, 2fr));
`;

export const BotCard = styled.div`
  background-color: ${colors.cardBackground};
  border-radius: 5px;
  padding: 15px;
`;
