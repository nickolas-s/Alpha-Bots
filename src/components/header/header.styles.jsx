import styled from 'styled-components';
import { colors, base } from '../../styles-config/config';

export const HeaderConainer = styled.header`
  font-size: calc(10px + 2vmin);
  color: ${colors.headline};
  margin-top: 10px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  font-size: calc(20px + 4vmin);
  font-family: ${base.titleFont};

  .logo {
    height: 10vh;
    margin: 0 15px;
  }
`;

export const Navbar = styled.nav`
  border-top: 1px solid ${colors.accentColor};
  border-bottom: 1px solid ${colors.accentColor};

  a {
    color: inherit;
    transition: all 500ms;

    &:hover {
      color: #94a1b2;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 0;
  max-width: ${base.websiteWidth};
  margin: 0 auto;
`;
