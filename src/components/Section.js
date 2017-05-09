import React from 'react';
import PropTypes from 'prop-types';

const Section = ({title, subtitle, children}) => (
  <section className="section">
    <div className="container">
      <h2 className="title">{title}</h2>
      {subtitle ? <h3 className="subtitle">{subtitle}</h3> : null }

      <hr/>

      {children}
    </div>
  </section>
)

Section.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node
}

export default Section;
