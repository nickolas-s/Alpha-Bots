import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CustomButton from '../custom-button/custom-button.component';
import PercentageCircle from '../percentage-circle/percentage-circle.component';

import {
  HeroContainer,
  HeroButtonsContainer,
  HeroButtons,
  SuccessDisplayContainer,
} from './hero.styles';

const Hero = ({ success }) => (
  <HeroContainer>
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
    <HeroButtonsContainer>
      <HeroButtons>
        <Link to="/tasks">
          <CustomButton big>Manage Tasks 📝</CustomButton>
        </Link>
        <Link to="/robots">
          <CustomButton big>Manage Bots 🤖</CustomButton>
        </Link>
      </HeroButtons>
    </HeroButtonsContainer>

    <SuccessDisplayContainer>
      <div>
        {' '}
        <h3>Likelihood to Succeed</h3>
      </div>
      <PercentageCircle success={success} />
    </SuccessDisplayContainer>
  </HeroContainer>
);

Hero.propTypes = {
  success: PropTypes.number,
};

export default Hero;
