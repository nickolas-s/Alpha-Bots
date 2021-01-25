import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from './CustomButton';
import SingleBot from './SingleBot';
import '../scss/bots-page.styles.scss';

class BotsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { botsData: [] };
  }

  async componentDidMount() {
    try {
      const endPoint = 'https://jsonplaceholder.typicode.com/users';
      const reponse = await fetch(endPoint);
      const data = await reponse.json();
      this.setState({ botsData: [...data] });
    } catch (error) {
      console.log('Error fetching Bots Data:', error);
    }
  }

  render() {
    const { botsData } = this.state;
    const { addBot, currentBots, removeBot } = this.props;
    const li = [];

    for (let i = 0; i < 5 - currentBots.length; i += 1) {
      li.push(<li key={i}>Available Spot</li>);
    }

    return (
      <div className="bots-page">
        <h1>Bots</h1>
        <p>Choose the 5 bots to join the Alpha Bots task force.</p>
        <div className="current-bots">
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
        </div>

        <div className="bots-display">
          {botsData.map((singleBot) => {
            const { id, username, phone } = singleBot;
            const { zipcode, city } = singleBot.address;
            const { name, catchPhrase } = singleBot.company;

            const isSelected = currentBots.find((bot) => bot.id === id);

            return (
              <div
                className={`${isSelected ? 'selected' : ''} bot-card`}
                key={id}
              >
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
                <div className="btn-container">
                  <CustomButton onClick={() => addBot(botsData[id - 1])}>
                    Add Bot
                  </CustomButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
BotsPage.propTypes = {
  addBot: PropTypes.func,
  removeBot: PropTypes.func,
  currentBots: PropTypes.array,
};

export default BotsPage;
