import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({image, buttonUrl, buttonText, children}) => (
  <article className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={image} alt="" />
      </figure>
    </div>

    <div className="card-content content">
      {children}
    </div>

    <footer className="card-footer">
      <Link
        to={buttonUrl}
        className="card-footer-item">
          {buttonText}
      </Link>
    </footer>
  </article>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Card;
