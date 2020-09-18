import React, { Component } from 'react';
import styles from './Contacts.module.css';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

class ContactForm extends Component {
    state = { name: '', number: '' };

    changeHandler = event => {
        const { name, value } = event.currentTarget;

        this.setState({ [name]: value });
    };

    submitHandler = e => {
        e.preventDefault();
        const { name, number } = this.state;
        const contact = {
            id: uuidv4(),
            name: name,
            number: number,
        };
        this.props.onAddContact(contact);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.submitHandler} className={styles.contactForm}>
                <label className={styles.container}>
                    <span>Name</span>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Please, enter the name..."
                        onChange={this.changeHandler}
                        className={styles.inputs}
                    />
                    <span>Number</span>
                    <input
                        type="number"
                        name="number"
                        value={number}
                        placeholder="Please, enter the number..."
                        onChange={this.changeHandler}
                        className={styles.inputs}
                    />
                </label>
                <button
                    type="submit"
                    disabled={!name.length || !number.length}
                    className={styles.contactAddButton}
                >
                    Add contact
                </button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
