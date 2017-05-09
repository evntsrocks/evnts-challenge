import React, { Component } from 'react';

import Section from '../components/Section';
import Loading from '../components/Loading';

class Reserva extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      evento: {},
      hotel: {},
      room: {}
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
      evento: sessionStorage.getItem('event'),
      hotel: sessionStorage.getItem('hotel'),
      room: sessionStorage.getItem('room')
    })
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Section
        title="Reserva de quarto">
        {console.log(this.state)}
          {isLoading
          ? <Loading />
          : <p>Reserva</p> }
      </Section>
    )
  }
}

export default Reserva;
