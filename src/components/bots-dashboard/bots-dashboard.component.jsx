import React from 'react';
import PropTypes from 'prop-types';
import SingleBot from '../single-bot/single-bot.component';
import './bots-dashboard.styles.scss';

const BotsDashboard = ({ currentBots }) => (
  <div className="bots-dash">
    <h2>Bots</h2>
    <div className="bots-container">
      {currentBots.map((singleBot) => {
        const { id, username, phone } = singleBot;
        const { zipcode, city } = singleBot.address;
        const { name, catchPhrase } = singleBot.company;

        return (
          <div className="bot-card" key={id}>
            <SingleBot
              id={id}
              manufacturer={name}
              botname={username}
              botcode={zipcode}
              serial={phone}
              location={city}
              specialty={catchPhrase}
            />
          </div>
        );
      })}
    </div>
  </div>
);

BotsDashboard.propTypes = {
  currentBots: PropTypes.array,
};

export default BotsDashboard;
