import React from 'react';
import PropTypes from 'prop-types';

const Card = ({image, children}) => (
  <article className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={image} alt="" />
      </figure>
    </div>

    <div className="card-content content">
      {children}
    </div>
  </article>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Card;
