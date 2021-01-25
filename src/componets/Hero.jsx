import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CustomButton from './CustomButton';
import '../scss/hero.styles.scss';
import '../scss/percentage-circle.styles.scss';

const Hero = ({ success }) => (
  <div className="hero">
    <h1>The Robot Revolution Is Coming</h1>
    <p>
      We all know that at some point in the future the AI will get so advanced
      that robots will get fed up with humans and start the uprising. We've seen
      it in the movies... It is going to happen sooner or later.
    </p>
    <p>
      What's better to combat bots than the bots themselves. Help put together a
      squad of good bots and list the tasks that they should accomplish to avoid
      the human extinction. This task force is called Alpha Bots!
    </p>
    <div className="buttons-container">
      <div className="hero-buttons">
        <Link to="/tasks">
          <CustomButton big>Manage Tasks 📝</CustomButton>
        </Link>
        <Link to="/robots">
          <CustomButton big>Manage Bots 🤖</CustomButton>
        </Link>
      </div>
    </div>

    <div className="success-display">
      <div>
        {' '}
        <h3>Likelihood to Succeed</h3>
      </div>
      <div className={`pie-wrapper progress-${success}`}>
        <span className="label">
          {success}
          <span className="smaller">%</span>
        </span>
        <div className="pie">
          <div className="left-side half-circle" />
          <div className="right-side half-circle" />
        </div>
        <div className="shadow" />
      </div>
    </div>
  </div>
);

Hero.propTypes = {
  success: PropTypes.number,
};

export default Hero;
