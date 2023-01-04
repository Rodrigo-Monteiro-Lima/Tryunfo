import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';
// import PlayButton from './components/PlayButton';
import CardDisplay from './components/CardDisplay';
import { GlobalStyle } from './components/GlobalStyle';
import { MainContainer } from './components/styled';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
      filter: '',
      filteredCards: [],
      selectFilter: 'todas',
      checkFilter: false,
      randomCards: [],
      index: 0,
      isGameOn: false,
      isDisabled: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if (name === 'cardTrunfo') {
      this.setState(({
        hasTrunfo: true,
      }));
    }
    if (name === 'filter' || name === 'selectFilter' || name === 'checkFilter') {
      this.setState(() => ({
        [name]: value,
      }), this.handleFilter);
    }
    this.setState(() => ({
      [name]: value,
    }), this.buttonValidation);
  };

  buttonValidation = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxSum = 210;
    const maxValue = 90;
    const text = cardName && cardDescription && cardImage && cardRare !== '';
    const number = +cardAttr1 >= 0 && +cardAttr1 <= maxValue
    && +cardAttr2 >= 0 && +cardAttr2 <= maxValue
    && +cardAttr3 >= 0 && +cardAttr3 <= maxValue;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSum;
    if (text && number && sum) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  text = () => {
    this.setState({
      cardTrunfo: false,
    });
  };

  handlePlayClick = () => {
    const { randomCards } = this.state;
    const chance = 0.5;
    const shuffled = randomCards.sort(() => Math.random() - chance);
    this.setState({
      randomCards: shuffled,
      isGameOn: true,
      index: 0,
      isDisabled: false,
    });
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3, cardTrunfo } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };
    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, newCard],
      filteredCards: [...prevState.savedCards, newCard],
      randomCards: [...prevState.savedCards, newCard],
    }));
    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
    }), this.text);
  };

  onDelButtonClick = (card) => {
    const { savedCards } = this.state;
    const cardRemoved = savedCards.filter((cardRem) => cardRem.cardName !== card.cardName
    && cardRem.cardDescription !== card.cardAttr1
    && cardRem.cardDescription !== card.cardRare);
    if (card.cardTrunfo === true) this.setState({ hasTrunfo: false });
    this.setState({
      savedCards: [...cardRemoved],
      filteredCards: [...cardRemoved],
      randomCards: [...cardRemoved],
    });
    // target.parentNode.parentNode.removeChild(target.parentNode);
    // const text = target.parentNode.lastChild.previousSibling.innerHTML;
    // if (text === 'Super Trunfo') {
    //   this.setState({
    //     hasTrunfo: false,
    //   });
    // }
  };

  handleNextClick = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
  };

  handleFilter = () => {
    const { filteredCards, filter, selectFilter, checkFilter } = this.state;
    this.setState(() => ({
      filteredCards: filteredCards
        .filter((card) => (filter === '' ? card : card.cardName.includes(filter)))
        .filter((card) => (selectFilter === 'todas' ? card : card
          .cardRare === selectFilter))
        .filter((card) => (checkFilter ? card.cardTrunfo === true : card)),
    }));
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardImage, cardRare, cardTrunfo, hasTrunfo, selectFilter } = this.state;
    const { savedCards, isSaveButtonDisabled, filter, filteredCards } = this.state;
    const { checkFilter, isGameOn, randomCards, index, isDisabled } = this.state;
    return (
      <div>
        <GlobalStyle />
        <h1>Super Trunfo</h1>
        <MainContainer>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
          />
        </MainContainer>
        <div>
          {!isGameOn && <CardList
            filteredCards={ filteredCards }
            filter={ filter }
            checkFilter={ checkFilter }
            selectFilter={ selectFilter }
            savedCards={ savedCards }
            onDelButtonClick={ this.onDelButtonClick }
            onInputChange={ this.onInputChange }
            handlePlayClick={ this.handlePlayClick }
          />}
        </div>
        {isGameOn
        && <CardDisplay
          handleNextClick={ this.handleNextClick }
          randomCard={ randomCards[index] }
          isDisabled={ isDisabled }
          handlePlayClick={ this.handlePlayClick }
          randomCards={ randomCards }
          index={ index }
        />}
      </div>
    );
  }
}

export default App;
