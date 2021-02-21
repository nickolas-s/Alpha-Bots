import styled from 'styled-components';
import { colors } from '../../styles-config/config';

export const HeroContainer = styled.div`
  color: ${colors.headline};
  padding: 20px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: clamp(1.4rem, 3.5vw, 2rem);
  }

  p {
    color: ${colors.paragraph};
    margin-bottom: 20px;
    text-align: justify;
    text-justify: inter-word;
  }
`;

export const HeroButtonsContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const HeroButtons = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

export const SuccessDisplayContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  background-color: ${colors.cardBackground};
  border-radius: 5px;
  padding: 10px;

  h3 {
    text-align: center;
  }
`;
