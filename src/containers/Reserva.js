import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Section from '../components/Section';
import Loading from '../components/Loading';
import Card from '../components/Card';
import FormReserva from '../components/FormReserva';

class Reserva extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      isLoading: true,
      evento: {},
      hotel: {},
      room: {}
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const reserva = {
      nome: form.nome.value,
      email: form.email.value,
      tipo: form.tipo.value
    }

    sessionStorage.setItem('reserva', JSON.stringify(reserva));

    this.context.router.history.push('/concluido');
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
      evento: JSON.parse(sessionStorage.getItem('event')),
      hotel: JSON.parse(sessionStorage.getItem('hotel')),
      room: JSON.parse(sessionStorage.getItem('room'))
    })
  }

  render() {
    const { isLoading, evento, hotel, room } = this.state;

    return (
      <Section
        title="Reserva de quarto">
          {isLoading
          ? <Loading />
          : <div className="columns">
              <div className="column">
                <Card image={evento.image}>
                  <h3 className="title is-5">{evento.name}</h3>

                  <p className="subtitle is-6">{evento.location}</p>

                  <p>
                    <strong>Data do evento:</strong>
                    <br />
                    {evento.startDate} a {evento.endDate}
                  </p>
                </Card>
              </div>

              <div className="column">
                <Card image={hotel.image}>
                  <h3 className="title is-5">{hotel.name}</h3>

                  <p className="subtitle is-6">{hotel.distanceToEvent} distante do evento</p>

                  <p>
                    <strong>Previsão de reserva:</strong>
                    <br />
                    {evento.startDate} a {evento.endDate}
                  </p>
                </Card>
              </div>

              <div className="column is-5">
                <FormReserva room={room} handleSubmit={this.handleSubmit} />
              </div>
            </div> }
      </Section>
    )
  }
}

Reserva.contextTypes = {
  router: PropTypes.object
}

export default Reserva;
