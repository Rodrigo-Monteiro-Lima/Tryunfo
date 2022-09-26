import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { value, onInputChange } = this.props;
    return (
      <label htmlFor="cardRare">
        Raridade
        <select
          name="cardRare"
          id="cardRare"
          value={ value }
          onChange={ onInputChange }
          data-testid="rare-input"
        >
          <option value="" disabled>Selecione</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito-raro">muito raro</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Select;
