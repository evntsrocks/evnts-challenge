import React from 'react';
import PropTypes from 'prop-types';

import './RatingStars.css';

const listStars = (stars) => {
  const maxStars = 5;
  let iterator = 1;
  let listStars = [];
  while (iterator <= maxStars) {

    if(iterator <= stars) {
      listStars.push(<li key={iterator} aria-hidden="true" className="is-active"></li>);
    } else {
      listStars.push(<li key={iterator} aria-hidden="true"></li>);
    }

    iterator++;
  }

  return listStars;
}

const RatingStars = ({stars}) => (
  <ol
    aria-label={stars + ' estrelas'}
    className="rating-stars">
      {listStars(stars)}
  </ol>
)

RatingStars.propTypes = {
  stars: PropTypes.string.isRequired
}

export default RatingStars;
