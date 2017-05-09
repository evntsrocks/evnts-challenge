import React from 'react';
import PropTypes from 'prop-types';

import RatingStars from './RatingStars';
import ListAmenities from './ListAmenities';
import ListRooms from './ListRooms';

import './ListHoteis.css';

const ListHoteis = ({hoteis, chooseHotel}) => (
  <ul className="list-hoteis">
    {hoteis.map(hotel => (
      <li
        key={hotel.id}
        className="box">
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img src={hotel.image} alt=""/>
              </figure>
            </div>

            <div className="media-content">
              <div className="content is-small">
                <h3 className="title">
                  {hotel.name} <small>({hotel.location})</small>
                </h3>

                <div className="subtitle">
                  <RatingStars stars={hotel.stars} />
                </div>

                <p>{hotel.description}</p>

                <ListAmenities amenities={hotel.amenities} />
              </div>
            </div>
          </div>

          <div>
            <strong>Quartos disponíveis</strong>

            <ListRooms rooms={hotel.rooms} hotel={hotel} chooseHotel={chooseHotel} />
          </div>
      </li>
    ))}
  </ul>
)

ListHoteis.propTypes = {
  hoteis: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stars: PropTypes.string.isRequired,
    distanceToEvent: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amenities: PropTypes.arrayOf(PropTypes.string),
    rooms: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      beds: PropTypes.arrayOf(PropTypes.string)
    }))
  })).isRequired,
  chooseHotel: PropTypes.func.isRequired
}

export default ListHoteis;
