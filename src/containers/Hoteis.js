import React, { Component } from 'react';

import Section from '../components/Section';
import ListHoteis from '../components/ListHoteis';
import Loading from '../components/Loading';

import HoteisService from '../services/hoteis';

class Hoteis extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      hoteis: []
    }
  }

  componentDidMount() {
    HoteisService.get
      .then(
        ({data}) => this.setState({
          isLoading: false,
          hoteis: data
        })
      );
  }

  render() {
    const {hoteis, isLoading} = this.state;

    return (
      <Section
        title="Hotéis"
        subtitle="Os melhores hoteis próximo ao seu evento">
          { isLoading
          ? <Loading />
          : <ListHoteis hoteis={hoteis} /> }
      </Section>
    )
  }
}

export default Hoteis;
