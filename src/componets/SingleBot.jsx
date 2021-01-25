import React from 'react';
import PropTypes from 'prop-types';
import '../scss/singlebot.style.scss';

const SingleBot = ({
  manufacturer,
  id,
  botcode,
  botname,
  serial,
  location,
  specialty,
}) => (
  <div className="bot">
    <div className="img-container">
      <img
        src={`https://avatars.dicebear.com/api/bottts/${manufacturer}-${id}.svg?width=150`}
        alt={botcode}
      />
    </div>

    <div className="specs-container">
      <h2>
        {botname}-{botcode}
      </h2>
      <ul>
        <li>
          <span className="bot-spec">Specialty:</span> {specialty}
        </li>
        <li className="no-dashboard">
          <span className="bot-spec">Serial #:</span> {serial}
        </li>
        <li className="no-dashboard">
          <span className="bot-spec">Manufacturer:</span> {manufacturer}
        </li>
        <li className="no-dashboard">
          <span className="bot-spec">Location:</span> {location}
        </li>
      </ul>
    </div>
  </div>
);

SingleBot.propTypes = {
  manufacturer: PropTypes.string,
  id: PropTypes.number,
  botcode: PropTypes.string,
  botname: PropTypes.string,
  serial: PropTypes.string,
  location: PropTypes.string,
  specialty: PropTypes.string,
};

export default SingleBot;
