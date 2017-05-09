import React, { Component } from 'react';

import Section from '../components/Section';
import ListEventos from '../components/ListEventos';
import Loading from '../components/Loading';

import EventosService from '../services/eventos';

class Eventos extends Component {
  constructor() {
    super();

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

  render() {
    const {eventos, isLoading} = this.state;

    return (
      <Section title="Eventos">
          { isLoading
          ? <Loading />
          : <ListEventos eventos={eventos} /> }
      </Section>
    )
  }
}

export default Eventos;
