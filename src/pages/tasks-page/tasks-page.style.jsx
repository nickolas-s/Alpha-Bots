import styled from 'styled-components';
import { colors } from '../../styles-config/config';

export const TasksPageContainer = styled.div`
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

export const Form = styled.form`
  text-align: center;
  margin-bottom: 10px;

  input[type='text'] {
    padding: 5px;
    border-radius: 5px;
    border: 2px solid ${colors.accentColor};
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

export const TasksEditContainer = styled.div`
  background-color: ${colors.cardBackground};
  padding: 20px;
  padding: clamp(0.75rem, 3.5vw, 1.875rem);
  border-radius: 5px;
  color: ${colors.headline};

  ul {
    li {
      list-style: none;
      color: inherit;
      padding: 5px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: clamp(0.75rem, 3.5vw, 1rem);

      span {
        overflow: hidden;
      }

      span.checked {
        text-decoration: line-through;
      }
    }
  }
`;
