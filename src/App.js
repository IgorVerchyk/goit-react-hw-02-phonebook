import React, { Component } from 'react';
import Section from './components/Section';
import ContactList from './components/elements/ContactsList';
import ContactForm from './components/elements/ContactForm';
import { v4 as uuidv4 } from 'uuid';
import styles from './components/elements/Contacts.module.css';

class App extends Component {
    state = {
        contacts: [],
        name: '',
    };

    AddContact = name => {
        const contact = {
            id: uuidv4(),
            name: name,
        };

        this.setState(state => ({
            contacts: [...state.contacts, contact],
        }));
        this.reset();
    };

    reset = () => {
        this.setState({ name: '' });
    };
    render() {
        return (
            <>
                <Section title={'Phonebook'} className={styles.container}>
                    <ContactForm onAddContact={this.AddContact} />
                </Section>
                <Section title={'Contacts'} className={styles.container}>
                    <ContactList contacts={this.state.contacts} />
                </Section>
            </>
        );
    }
}

export default App;
