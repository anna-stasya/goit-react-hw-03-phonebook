import React, { Component } from 'react';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    text: '',
  };

  //ввод в интпут
  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  //добавить контакт через кнопку
  handleSabmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetInput();
  };

  //очистить поля ввода
  resetInput = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSabmit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleChange}
            className={s.input}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.handleChange}
            className={s.input}
          />
        </label>
        <button type="sabmit" className={s.btnAdd}>
          Add contact
        </button>
      </form>
    );
  }
}

export { ContactForm };
