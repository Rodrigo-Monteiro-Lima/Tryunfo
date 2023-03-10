import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewCard from './NewCard';
import Filter from './Filter';
import { ListContainer, CardsContainer } from './styled';
import PlayButton from './PlayButton';

class CardList extends Component {
  render() {
    const
      { savedCards, onDelButtonClick, filter, onInputChange, filteredCards } = this.props;
    const { selectFilter, checkFilter, handlePlayClick } = this.props;
    return (
      <CardsContainer>
        TODAS AS CARTAS
        <Filter
          filter={ filter }
          onInputChange={ onInputChange }
          selectFilter={ selectFilter }
          checkFilter={ checkFilter }
        />
        <PlayButton handlePlayClick={ handlePlayClick } savedCards={ savedCards } />
        <ListContainer>
          {(filter !== ''
          || selectFilter !== 'todas' || checkFilter ? filteredCards : savedCards)
            .map((card) => (<NewCard
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
              card={ card }
            />))}
        </ListContainer>
      </CardsContainer>
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
  filter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  filteredCards: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
  })).isRequired,
  selectFilter: PropTypes.string.isRequired,
  checkFilter: PropTypes.bool.isRequired,
  handlePlayClick: PropTypes.func.isRequired,
};

export default CardList;
