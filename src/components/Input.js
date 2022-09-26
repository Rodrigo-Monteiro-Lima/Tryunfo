import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, data, text } = this.props;
    return (
      <label htmlFor={ name }>
        {text}
        <input
          type={ type }
          name={ name }
          id={ name }
          data-testid={ data }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Input;
