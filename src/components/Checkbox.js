import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CheckboxArea } from './Checkbox.styled';

class Checkbox extends Component {
  render() {
    const { value, onInputChange } = this.props;
    return (
      <CheckboxArea htmlFor="cardTrunfo">
        <input
          type="checkbox"
          name="cardTrunfo"
          id="cardTrunfo"
          checked={ value }
          onChange={ onInputChange }
          data-testid="trunfo-input"
        />
        Super Trybe Trunfo
      </CheckboxArea>
    );
  }
}

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Checkbox;
