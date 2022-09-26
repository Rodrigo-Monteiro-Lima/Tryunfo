import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;
    return (
      <button
        type="button"
        data-testid="save-button"
        onClick={ onSaveButtonClick }
        disabled={ isSaveButtonDisabled }
      >
        Salvar
      </button>
    );
  }
}

Button.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Button;
