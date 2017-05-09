import React from 'react';
import PropTypes from 'prop-types';

const ListHoteis = ({hoteis}) => (
  <ul className="columns is-multiline">
    {hoteis.map(hotel => (
      <li
        key={hotel.id}
        className="column is-4">
          <img src={hotel.image} alt=""/>

          nome: {hotel.name}<br />
          local: {hotel.location}<br />
          stars: {hotel.stars}<br />
          distancia: {hotel.distanceToEvent}<br />
          descricao: {hotel.description}<br />
          coisas: {hotel.amenities}<br />
          quartos: {hotel.rooms.map(quarto => (
            <div key={quarto.id}>
              {quarto.name}<br />
              {quarto.price}<br />
              {quarto.beds}
            </div>
          ))}<br />
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
  })).isRequired
}

export default ListHoteis;
