import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
      <label htmlFor="cardTrunfo">
        <input
          type="checkbox"
          name="cardTrunfo"
          id="cardTrunfo"
          data-testid="trunfo-input"
        />
        Super Trybe Trunfo
      </label>
    );
  }
}

export default Checkbox;
