import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textarea extends Component {
  render() {
    const { data, name, text } = this.props;
    return (
      <label htmlFor={ name }>
        {text}
        <textarea
          name={ name }
          id={ name }
          data-testid={ data }
          cols="30"
          rows="10"
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Textarea;
