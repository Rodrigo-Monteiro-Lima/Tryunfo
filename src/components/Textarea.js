import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LabelArea, LabelText } from './Label.styled';
import { TextArea } from './Textarea.styled';

class Textarea extends Component {
  render() {
    const { data, name, text, value, onInputChange } = this.props;
    return (
      <LabelArea htmlFor={ name }>
        <LabelText>
          {text}
        </LabelText>
        <TextArea
          name={ name }
          id={ name }
          data-testid={ data }
          value={ value }
          onChange={ onInputChange }
          cols="30"
          rows="10"
        />
      </LabelArea>
    );
  }
}

Textarea.propTypes = {
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Textarea;
