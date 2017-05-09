import React from 'react';
import { Link } from 'react-router-dom';

import './Hero.css';

const Hero = () => (
  <header className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-2">
          <Link to="/">Evnts</Link>
        </h1>
        <h2 className="subtitle">
          Os melhores hotéis, as melhores tarifas
        </h2>
      </div>
    </div>
  </header>
)

export default Hero;
