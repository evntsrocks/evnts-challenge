import React from 'react';
import PropTypes from 'prop-types';

import './ListRooms.css';

import classicSingle from '../images/classic-single.svg';
import classicDouble from '../images/classic-double.svg';
import classicTriple from '../images/classic-triple.svg';
import standardSingle from '../images/standard-single.svg';
import standardDouble from '../images/standard-double.svg';
import standardTriple from '../images/standard-triple.svg';
import deluxeSingle from '../images/deluxe-single.svg';
import deluxeDouble from '../images/deluxe-double.svg';
import deluxeTriple from '../images/deluxe-triple.svg';

const types = {
  'Classic Single': classicSingle,
  'Classic Double': classicDouble,
  'Classic Triple': classicTriple,
  'Standard Single': standardSingle,
  'Standard Double': standardDouble,
  'Standard Triple': standardTriple,
  'Deluxe Single': deluxeSingle,
  'Deluxe Double': deluxeDouble,
  'Deluxe Triple': deluxeTriple
}

const ListRooms = ({rooms, chooseHotel, hotel}) => (
  <ul className="list-rooms">
    {rooms.map(quarto => (
      <li key={quarto.id}>
        <button
          onClick={() => chooseHotel(hotel, quarto)}
          aria-label="Reservar quarto"
          type="button">
            <img src={types[quarto.name]} alt="" />

            <strong>{quarto.name}</strong>

            {quarto.price}
        </button>
      </li>
    ))}
  </ul>
)

ListRooms.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    beds: PropTypes.arrayOf(PropTypes.string)
  })).isRequired,
  chooseHotel: PropTypes.func.isRequired,
  hotel: PropTypes.object.isRequired
}

export default ListRooms;
