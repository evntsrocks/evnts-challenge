import React from 'react';
import PropTypes from 'prop-types';

const FormReserva = ({room, handleSubmit}) => (
  <form className="box" name="reservaInfo" onSubmit={(event) => handleSubmit(event)}>
    <div className="content">
      <p>
        Para finalizar sua reseva, informe os dados abaixo.
      </p>

      <div className="field">
        <label
          className="label"
          htmlFor="nome">Nome:</label>

        <p className="control">
          <input
            className="input"
            id="nome"
            name="nome"
            type="text"
            required />
        </p>
      </div>

      <div className="field">
        <label
          className="label"
          htmlFor="email">E-mail:</label>

        <p className="control">
          <input
            className="input"
            id="email"
            name="email"
            type="email"
            required />
        </p>
      </div>

      <div className="field">
        <label
          className="label"
          htmlFor="tipo-0">Tipo de cama:</label>
        <p className="control">
          {room.beds.map((item, index) => (
            <label
              key={index}
              className="radio"
              htmlFor={'tipo-' + index}>
                <input
                  id={'tipo-' + index}
                  type="radio"
                  name="tipo"
                  value={item}
                  required /> {item}
            </label>
          ))}
        </p>
      </div>
      <button
        className="button is-primary"
        type="submit">Enviar</button>
    </div>
  </form>
)

FormReserva.propTypes = {
  room: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default FormReserva;
