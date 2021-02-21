import React from 'react';
import PropTypes from 'prop-types';
import SingleBot from '../single-bot/single-bot.component';

import {
  BotsDashboardContainer,
  BotsContainer,
  BotCard,
} from './bots-dashboard.styles';

const BotsDashboard = ({ currentBots }) => (
  <BotsDashboardContainer>
    <h2>Bots</h2>
    <BotsContainer>
      {currentBots.map((singleBot) => {
        const { id, username, phone } = singleBot;
        const { zipcode, city } = singleBot.address;
        const { name, catchPhrase } = singleBot.company;

        return (
          <BotCard key={id}>
            <SingleBot
              id={id}
              manufacturer={name}
              botname={username}
              botcode={zipcode}
              serial={phone}
              location={city}
              specialty={catchPhrase}
              botOnDashboard
            />
          </BotCard>
        );
      })}
    </BotsContainer>
  </BotsDashboardContainer>
);

BotsDashboard.propTypes = {
  currentBots: PropTypes.array,
};

export default BotsDashboard;
