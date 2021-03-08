import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../components/custom-button/custom-button.component';
import SingleBot from '../../components/single-bot/single-bot.component';

import {
  BotsPageContainer,
  CurrentBotsContainer,
  BotsDisplayContainer,
  BotCard,
  ButtonContainer,
} from './bots-page.styles';

const BotsPage = ({ addBot, currentBots, removeBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const endPoint = 'https://jsonplaceholder.typicode.com/users';

    const fetchFunc = async () => {
      const reponse = await fetch(endPoint);
      const data = await reponse.json();
      setBots(data);
    };

    fetchFunc();
  }, []);

  const li = [];
  for (let i = 0; i < 5 - currentBots.length; i += 1) {
    li.push(<li key={i}>Available Spot</li>);
  }

  return (
    <BotsPageContainer>
      <h1>Bots</h1>
      <p>Choose the 5 bots to join the Alpha Bots task force.</p>
      <CurrentBotsContainer>
        <ul>
          {currentBots.map((singleBot) => {
            const { id, username } = singleBot;
            const { zipcode } = singleBot.address;

            return (
              <li key={id}>
                <span className="bot-name">
                  {username}-{zipcode}
                </span>
                <CustomButton onClick={() => removeBot(singleBot)}>
                  Delete
                </CustomButton>
              </li>
            );
          })}

          {li.map((singleLi) => singleLi)}
        </ul>
      </CurrentBotsContainer>

      <BotsDisplayContainer>
        {bots.map((singleBot) => {
          const { id, username, phone } = singleBot;
          const { zipcode, city } = singleBot.address;
          const { name, catchPhrase } = singleBot.company;

          const isSelected = currentBots.find((bot) => bot.id === id);

          return (
            <BotCard className={`${isSelected ? 'selected' : ''}`} key={id}>
              <SingleBot
                id={id}
                manufacturer={name}
                botname={username}
                botcode={zipcode}
                serial={phone}
                location={city}
                specialty={catchPhrase}
                isSelected={!!isSelected}
              />
              <ButtonContainer>
                <CustomButton onClick={() => addBot(bots[id - 1])}>
                  Add Bot
                </CustomButton>
              </ButtonContainer>
            </BotCard>
          );
        })}
      </BotsDisplayContainer>
    </BotsPageContainer>
  );
};

BotsPage.propTypes = {
  addBot: PropTypes.func,
  removeBot: PropTypes.func,
  currentBots: PropTypes.array,
};

export default BotsPage;
