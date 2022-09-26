import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

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
    }));
    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    }), this.text);
  };

  onDelButtonClick = ({ target }) => {
    target.parentNode.parentNode.removeChild(target.parentNode);
    const text = target.parentNode.lastChild.previousSibling.innerHTML;
    if (text === 'Super Trunfo') {
      this.setState({
        hasTrunfo: false,
      });
    }
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardImage, cardRare, cardTrunfo, hasTrunfo } = this.state;
    const { savedCards, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>TrybeTrunfo</h1>
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
        <CardList
          savedCards={ savedCards }
          onDelButtonClick={ this.onDelButtonClick }
        />
      </div>
    );
  }
}

export default App;
