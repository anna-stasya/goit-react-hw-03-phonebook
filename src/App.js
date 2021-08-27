import React, { Component } from 'react';
import shortid from 'shortid';
//Components
import { ContactList } from './Components/ContactList/ContactList';
import { Filter } from 'Components/Filter/Filter';
import { ContactForm } from './Components/ContactForm/ContactForm';
//pnotify
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';

import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // добавить контакт
  forSubmitHandler = text => {
    const { contacts } = this.state;
    //генерация id
    const сontactsNew = {
      id: shortid.generate(),
      ...text,
    };
    const someContact = contacts.some(
      contact => contact.name.toLowerCase() === text.name.toLowerCase(),
    );
    if (someContact) {
      alert(`${text.name} is already in contacts`);
      return;
    }
    // добавляем новый контакт
    this.setState(({ contacts }) => ({
      contacts: [сontactsNew, ...contacts],
    }));
  };

  //удалить контакт
  deleteContacts = contactsId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactsId),
    }));
  };

  //фильтр
  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };
  //поиск по фильтру
  getVisisbleContacts = () => {
    const { contacts, filter } = this.state;
    const normoliseFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normoliseFilter),
    );
  };

  render() {
    const { filter } = this.state;

    //поиск по фильтру
    const visisbleContacts = this.getVisisbleContacts();
    console.log(visisbleContacts);

    return (
      <div className={s.app}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={this.forSubmitHandler} />

        <h2 className={s.titleContacts}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visisbleContacts}
          onDeleteContacts={this.deleteContacts}
        />
      </div>
    );
  }
}

export default App;
