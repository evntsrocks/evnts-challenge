import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const ListHoteis = ({hoteis}) => (
  <ul className="columns is-multiline">
    {hoteis.map(hotel => (
      <li
        key={hotel.id}
        className="column is-4">
        <Card
          image={hotel.image}
          buttonUrl="/reserva"
          buttonText="Reservar um quarto">
          <h3 className="title is-4">{hotel.name}</h3>

          <p className="subtitle is-6">
            {hotel.location}
          </p>

          {hotel.stars} / {hotel.distanceToEvent}

          <p>{hotel.description}</p>
        </Card>
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
    beds: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      beds: PropTypes.arrayOf(PropTypes.string)
    }))
  })).isRequired
}

export default ListHoteis;
