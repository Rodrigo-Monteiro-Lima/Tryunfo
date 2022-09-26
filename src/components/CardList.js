import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewCard from './NewCard';

class CardList extends Component {
  render() {
    const { savedCards, onDelButtonClick } = this.props;
    return (
      <div>
        Todas as cartas
        {savedCards.map((card) => (<NewCard
          key={ card.cardName }
          cardName={ card.cardName }
          cardDescription={ card.cardDescription }
          cardAttr1={ card.cardAttr1 }
          cardAttr2={ card.cardAttr2 }
          cardAttr3={ card.cardAttr3 }
          cardImage={ card.cardImage }
          cardRare={ card.cardRare }
          cardTrunfo={ card.cardTrunfo }
          onDelButtonClick={ onDelButtonClick }
        />))}
      </div>
    );
  }
}

CardList.propTypes = {
  savedCards: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
  })).isRequired,
  onDelButtonClick: PropTypes.func.isRequired,
};

export default CardList;
