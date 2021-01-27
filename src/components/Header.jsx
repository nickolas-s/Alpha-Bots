import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../scss/header.styles.scss';
import { ReactComponent as Logo } from '../assets/robot-svgrepo-color.svg';

const Header = () => (
  <header>
    <div className="logo-container">
      Alpha
      <span>
        <Logo className="logo" />
      </span>
      Bots!
    </div>
    <nav className="options">
      <div className="options-wrapper">
        <Link to="/">Dashboard</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/robots">Bots</Link>
      </div>
    </nav>
  </header>
);

export default Header;
