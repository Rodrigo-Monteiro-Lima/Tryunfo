import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonArea } from './Button.styled';

class Button extends Component {
  render() {
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;
    return (
      <ButtonArea
        type="button"
        data-testid="save-button"
        onClick={ onSaveButtonClick }
        disabled={ isSaveButtonDisabled }
      >
        Salvar
      </ButtonArea>
    );
  }
}

Button.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Button;
