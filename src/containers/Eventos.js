import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Section from '../components/Section';
import ListEventos from '../components/ListEventos';
import Loading from '../components/Loading';

import EventosService from '../services/eventos';

class Eventos extends Component {
  constructor() {
    super();

    this.chooseEvent = this.chooseEvent.bind(this);

    this.state = {
      isLoading: true,
      eventos: []
    }
  }

  componentDidMount() {
    EventosService.get
      .then(
        ({data}) => this.setState({
          isLoading: false,
          eventos: data
        })
      );
  }

  chooseEvent(evento) {
    sessionStorage.setItem('event', JSON.stringify(evento));

    this.context.router.history.push('/hoteis');

    console.log(sessionStorage);
  }

  render() {
    const {eventos, isLoading} = this.state;

    return (
      <Section title="Eventos">
          { isLoading
          ? <Loading />
          : <ListEventos eventos={eventos} chooseEvent={this.chooseEvent} /> }
      </Section>
    )
  }
}

Eventos.contextTypes = {
  router: PropTypes.object
}

export default Eventos;
