import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Section from '../components/Section';

class Erro extends Component {
  render() {
    return (
      <Section title="Página não encontrada">
        <p>A página que você tentou acessar não foi encontrada.</p>

        <p>
          <Link to="/">&larr; Retornar à pagina inicial</Link>
        </p>
      </Section>
    )
  }
}

export default Erro;
