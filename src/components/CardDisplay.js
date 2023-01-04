import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  CardArea,
  CartAttContainer,
  InsideCard,
  NameContainer,
  ImageCard,
  CardText,
  CartAtt,
  CartRarity,
  Trunfo } from './Card.styled';
import Image from '../trunfo.png';
import { GameContainer, ButtonConatiner } from './styled';
import { ShuffleBtn, NextBtn } from './Button.styled';
import Arrow from '../arrow.png';

class CardDisplay extends Component {
  render() {
    const { randomCard, handleNextClick, isDisabled, handlePlayClick } = this.props;
    const { randomCards, index } = this.props;
    const { cardName, cardDescription, cardAttr1, cardAttr2 } = randomCard;
    const { cardAttr3, cardImage, cardRare, cardTrunfo } = randomCard;
    const num = randomCards.length - 1;
    console.log(num);
    return (
      <GameContainer>
        <CardArea>
          <InsideCard>
            <NameContainer data-testid="name-card">{cardName}</NameContainer>
            <ImageCard src={ cardImage } alt={ cardName } data-testid="image-card" />
            <CardText data-testid="description-card">{cardDescription}</CardText>
            <CartAttContainer>
              <CartRarity data-testid="rare-card">{cardRare}</CartRarity>
              <CartAtt
                data-testid="attr1-card"
              >
                Attr01
                <div>
                  {cardAttr1}
                </div>
              </CartAtt>
              <CartAtt data-testid="attr2-card">
                Attr02
                <div>
                  {cardAttr2}
                </div>
              </CartAtt>
              <CartAtt data-testid="attr3-card">
                Attr03
                <div>
                  {cardAttr3}
                </div>
              </CartAtt>
            </CartAttContainer>
            {cardTrunfo ? <Trunfo
              src={ Image }
              alt="trunfo"
              data-testid="trunfo-card"
            /> : ''}
          </InsideCard>
        </CardArea>
        <ButtonConatiner>
          {index === num ? <ShuffleBtn
            type="button"
            onClick={ handlePlayClick }
          >
            Embaralhar Cartas
          </ShuffleBtn> : null}
          <NextBtn
            type="button"
            onClick={ handleNextClick }
            disabled={ isDisabled }
          >
            Próxima carta
            <img src={ Arrow } alt="seta pra direita" />
          </NextBtn>
        </ButtonConatiner>
      </GameContainer>
    );
  }
}

CardDisplay.propTypes = {
  randomCard: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  }).isRequired,
  handleNextClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  handlePlayClick: PropTypes.func.isRequired,
  randomCards: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
  index: PropTypes.number.isRequired,
};

export default CardDisplay;
