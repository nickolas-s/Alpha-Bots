import styled from 'styled-components';
import { colors } from '../../styles-config/config';

export const TaskDashboardConainer = styled.div`
  color: ${colors.headline};
  margin: 20px;

  h2 {
    margin-bottom: 20px;
    margin-left: 30px;
  }
`;

export const TaskListContainer = styled.div`
  background-color: ${colors.cardBackground};
  border-radius: 5px;
  padding: 30px;
  padding: clamp(0.75rem, 3.5vw, 1.875rem);

  ul {
    li {
      list-style: none;
      color: ${colors.headline};
      padding: 5px 0;
      font-size: clamp(0.75rem, 3.5vw, 1rem);

      input {
        margin-right: 10px;

        &:checked + label {
          text-decoration: line-through;
        }
      }
    }
  }
`;
