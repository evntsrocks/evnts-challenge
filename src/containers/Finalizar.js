import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Section from '../components/Section';

class Finalizar extends Component {
  constructor() {
    super();

    this.state = {
      reserva: {}
    };
  }

  componentWillMount() {
    if(!sessionStorage.getItem('reserva')) {
      this.context.router.history.push('/erro');
    }
  }

  componentDidMount() {
    this.setState({
      reserva: JSON.parse(sessionStorage.getItem('reserva'))
    });
  }

  render() {
    const {reserva} = this.state;

    return (
      <Section title="Reserva concluída">
        <div className="content is-medium">
          <h2>Parabéns!</h2>

          <p>
            <strong>{reserva.nome}</strong> em breve você receberá no seu e-mail (<a href={'mailto:' + reserva.email}>{reserva.email}</a>)
            a sua confirmação de reserva.
          </p>

          <p>
            Caso você não receba nenhum e-mail na sua caixa de entrada,
            entre em contato conosco.
          </p>
        </div>

        <p className="has-text-centered">
          <Link className="button is-primary is-medium" to="/">
            Procurar outros eventos
          </Link>
        </p>
      </Section>
    )
  }
}

Finalizar.contextTypes = {
  router: PropTypes.object
}

export default Finalizar;
