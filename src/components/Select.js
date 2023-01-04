import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LabelArea, LabelText } from './Label.styled';
import { SelectArea } from './Select.styled';

class Select extends Component {
  render() {
    const { value, onInputChange } = this.props;
    return (
      <LabelArea htmlFor="cardRare">
        <LabelText>
          Raridade
        </LabelText>
        <SelectArea
          name="cardRare"
          id="cardRare"
          value={ value }
          onChange={ onInputChange }
          data-testid="rare-input"
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </SelectArea>
      </LabelArea>
    );
  }
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Select;
