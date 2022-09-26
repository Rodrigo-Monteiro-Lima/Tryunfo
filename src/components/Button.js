import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button
        type="button"
        data-testid="save-button"
      >
        Salvar
      </button>
    );
  }
}

export default Button;
