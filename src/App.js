import React, { Component } from 'react';
import Section from './components/Section';
import ContactList from './components/elements/ContactsList';
import ContactForm from './components/elements/ContactForm';
import Filter from './components/elements/ContactFilter';
import styles from './components/elements/Contacts.module.css';

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

    addContact = propContact => {
        const item = propContact.name;
        const items = this.state.contacts.map(contact =>
            contact.name.toLowerCase(),
        );
        if (items.includes(item.toLowerCase().trim())) {
            alert(`${item} is already in contacts`);
        } else {
            this.setState(state => ({
                contacts: [...state.contacts, propContact],
            }));
        }
    };

    changeFilter = filter => {
        this.setState({ filter });
    };

    filterContacts = () => {
        const { contacts, filter } = this.state;
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
    };

    deleteContact = id => {
        const { contacts } = this.state;
        const newContactsArr = contacts.filter(contact => contact.id !== id);
        this.setState({ contacts: newContactsArr });
    };

    componentDidMount() {
        const savedContacts = localStorage.getItem('contacts');
        if (savedContacts) {
            this.setState({ contacts: JSON.parse(savedContacts) });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.contacts !== this.state.contacts) {
            localStorage.setItem(
                'contacts',
                JSON.stringify(this.state.contacts),
            );
        }
    }

    render() {
        return (
            <>
                <Section title={'Phonebook'} className={styles.container}>
                    <ContactForm onAddContact={this.addContact} />
                </Section>
                <Section title={'Contacts'} className={styles.container}>
                    <Filter onChange={this.changeFilter} />
                    <ContactList
                        contacts={this.filterContacts()}
                        onDelete={this.deleteContact}
                    />
                </Section>
            </>
        );
    }
}

export default App;
