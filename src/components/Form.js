import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Checkbox from './Checkbox';
import Button from './Button';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.props;
    const { cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.props;
    const { hasTrunfo, onInputChange, onSaveButtonClick } = this.props;
    return (
      <form>
        <Input
          type="text"
          name="cardName"
          data="name-input"
          text="Nome"
          value={ cardName }
          onInputChange={ onInputChange }
        />
        <Textarea
          data="description-input"
          name="cardDescription"
          text="Descrição"
          value={ cardDescription }
          onInputChange={ onInputChange }
        />
        <Input
          type="number"
          name="cardAttr1"
          data="attr1-input"
          text="Attr01"
          value={ cardAttr1 }
          onInputChange={ onInputChange }
        />
        <Input
          type="number"
          name="cardAttr2"
          data="attr2-input"
          text="Attr02"
          value={ cardAttr2 }
          onInputChange={ onInputChange }
        />
        <Input
          type="number"
          name="cardAttr3"
          data="attr3-input"
          text="Attr03"
          value={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <Input
          type="text"
          name="cardImage"
          data="image-input"
          text="Imagem"
          value={ cardImage }
          onInputChange={ onInputChange }
        />
        <Select value={ cardRare } onInputChange={ onInputChange } />
        <Checkbox value={ cardTrunfo } onInputChange={ onInputChange } />
        <Button
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
