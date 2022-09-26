import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const { value, onInputChange } = this.props;
    return (
      <label htmlFor="cardTrunfo">
        <input
          type="checkbox"
          name="cardTrunfo"
          id="cardTrunfo"
          checked={ value }
          onChange={ onInputChange }
          data-testid="trunfo-input"
        />
        Super Trybe Trunfo
      </label>
    );
  }
}

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Checkbox;
