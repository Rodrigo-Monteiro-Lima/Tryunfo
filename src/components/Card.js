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
  Trunfo,
  CardContainer,
  CardTitle } from './Card.styled';
import Image from '../trunfo.png';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2 } = this.props;
    const { cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <CardContainer>
        <CardTitle>
          pré-visualização
        </CardTitle>
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
      </CardContainer>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
