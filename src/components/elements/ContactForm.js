import React, { Component } from 'react';
import styles from './Contacts.module.css';

class CreateContact extends Component {
    state = { name: '' };

    changeHandler = e => {
        this.setState({ name: e.target.value });
    };

    submitHandler = e => {
        e.preventDefault();
        this.props.onAddContact(this.state.name);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '' });
    };

    render() {
        const { name } = this.state;
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
                </label>
                <button
                    type="submit"
                    disabled={!name.length}
                    className={styles.contactAddButton}
                >
                    Add contact
                </button>
            </form>
        );
    }
}

export default CreateContact;
