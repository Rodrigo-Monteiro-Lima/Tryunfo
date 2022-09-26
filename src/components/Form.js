import React, { Component } from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Checkbox from './Checkbox';
import Button from './Button';

class Form extends Component {
  render() {
    return (
      <form>
        <Input
          type="text"
          name="cardName"
          data="name-input"
          text="Nome"
        />
        <Textarea
          data="description-input"
          name="cardDescription"
          text="Descrição"
        />
        <Input
          type="number"
          name="cardAttr1"
          data="attr1-input"
          text="Attr01"
        />
        <Input
          type="number"
          name="cardAttr2"
          data="attr2-input"
          text="Attr02"
        />
        <Input
          type="number"
          name="cardAttr3"
          data="attr3-input"
          text="Attr03"
        />
        <Input
          type="text"
          name="cardImage"
          data="image-input"
          text="Imagem"
        />
        <Select />
        <Checkbox />
        <Button />
      </form>
    );
  }
}

export default Form;
