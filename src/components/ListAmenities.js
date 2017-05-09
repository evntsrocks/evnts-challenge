import React from 'react';
import PropTypes from 'prop-types';

import './ListAmenities.css';

import breakfast from '../images/breakfast.svg';
import gym from '../images/gym.svg';
import parking from '../images/parking.svg';
import wifi from '../images/wifi.svg';

const images = {
  breakfast,
  gym,
  parking,
  'wi-fi': wifi
}

const ListAmenities = ({amenities}) => (
  <ul className="list-amenities">
    {amenities.map((item, index) => {
      const img = images[item];

      return (
        <li key={index}>
          <img src={img} alt={item} />
        </li>
      )
    })}
  </ul>
)

ListAmenities.propTypes = {
  amenities: PropTypes.arrayOf(PropTypes.string)
}

export default ListAmenities;
