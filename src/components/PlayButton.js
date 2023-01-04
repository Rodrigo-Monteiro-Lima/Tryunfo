import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PlayBtn } from './Button.styled';

class PlayButton extends Component {
  render() {
    const { handlePlayClick, savedCards } = this.props;
    return (
      <PlayBtn
        type="button"
        onClick={ handlePlayClick }
        disabled={ savedCards.length === 0 }
      >
        Jogar
      </PlayBtn>
    );
  }
}

PlayButton.propTypes = {
  handlePlayClick: PropTypes.func.isRequired,
  savedCards: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
  })).isRequired,
};

export default PlayButton;
