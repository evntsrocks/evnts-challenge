import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const ListEventos = ({eventos, chooseEvent}) => (
  <ul className="columns is-multiline">
    {eventos.map(evento => {
      return (
        <li
          key={evento.id}
          className="column is-4">
            <Card image={evento.image}>
              <h3 className="title is-4">{evento.name}</h3>

              <p className="subtitle is-6">
                <strong>{evento.location}</strong>
                <br/>
                <small>{evento.startDate} a {evento.endDate}</small>
              </p>

              <p>{evento.description}</p>

              <button
                onClick={() => chooseEvent(evento)}
                className="button is-primary is-fullwidth"
                type="button">
                  Ver hotéis &rarr;
              </button>
            </Card>
        </li>
      )
    })}
  </ul>
)

ListEventos.propTypes = {
  eventos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired,
  chooseEvent: PropTypes.func.isRequired
}

export default ListEventos;
