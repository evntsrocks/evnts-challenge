import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Hero from './components/Hero';
import Footer from './components/Footer';
import Eventos from './containers/Eventos';
import Hoteis from './containers/Hoteis';
import Reserva from './containers/Reserva';
import Finalizar from './containers/Finalizar';
import Erro from './containers/Erro';

import './App.css';

class App extends Component {
  componentDidMount() {
    sessionStorage.removeItem('event');
    sessionStorage.removeItem('hotel');
    sessionStorage.removeItem('reserva');
    sessionStorage.removeItem('room');
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Hero />

          <Switch>
            <Route exact path="/" component={Eventos} />
            <Route path="/hoteis" component={Hoteis} />
            <Route path="/reserva" component={Reserva} />
            <Route path="/concluido" component={Finalizar} />
            <Route component={Erro} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
