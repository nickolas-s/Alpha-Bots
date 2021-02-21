import { createGlobalStyle } from 'styled-components';
import { colors, base } from './config';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  font-family: ${base.fontStack};
  background-color: ${colors.backgroundColor};
}

a {
  text-decoration: none;
}

.wrapper {
  max-width: ${base.websiteWidth};
  margin: 0 auto;
}
`;

export default GlobalStyle;
