import React from 'react';
import PropTypes from 'prop-types';

import {
  SingleBotConainer,
  ImageContainer,
  SpecsContainer,
  BotSpec,
} from './single-bot.style';

const SingleBot = ({
  manufacturer,
  id,
  botcode,
  botname,
  serial,
  location,
  specialty,
  botOnDashboard,
}) => (
  <SingleBotConainer botOnDashboard={!!botOnDashboard}>
    <ImageContainer>
      <img
        src={`https://avatars.dicebear.com/api/bottts/${manufacturer}-${id}.svg?width=150`}
        alt={botcode}
      />
    </ImageContainer>

    <SpecsContainer botOnDashboard={!!botOnDashboard}>
      <h2>
        {botname}-{botcode}
      </h2>
      <ul>
        <li>
          <BotSpec>Specialty:</BotSpec> {specialty}
        </li>
        <li className="no-dashboard">
          <BotSpec>Serial #:</BotSpec> {serial}
        </li>
        <li className="no-dashboard">
          <BotSpec>Manufacturer:</BotSpec> {manufacturer}
        </li>
        <li className="no-dashboard">
          <BotSpec>Location:</BotSpec> {location}
        </li>
      </ul>
    </SpecsContainer>
  </SingleBotConainer>
);

SingleBot.propTypes = {
  manufacturer: PropTypes.string,
  id: PropTypes.number,
  botcode: PropTypes.string,
  botname: PropTypes.string,
  serial: PropTypes.string,
  location: PropTypes.string,
  specialty: PropTypes.string,
  botOnDashboard: PropTypes.bool,
};

export default SingleBot;
