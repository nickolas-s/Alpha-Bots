import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { ReactComponent as Logo } from '../../assets/robot-svgrepo-color.svg';

import {
  HeaderConainer,
  LogoContainer,
  Navbar,
  LinksContainer,
} from './header.styles';

const Header = () => (
  <HeaderConainer>
    <LogoContainer>
      Alpha
      <span>
        <Logo className="logo" />
      </span>
      Bots!
    </LogoContainer>
    <Navbar>
      <LinksContainer>
        <Link to="/">Dashboard</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/robots">Bots</Link>
      </LinksContainer>
    </Navbar>
  </HeaderConainer>
);

export default Header;
