import React from 'react';
import styles from './Contacts.module.css';

export default function Filter({ onChange }) {
    return (
        <label className={styles.container}>
            <span>Find contacts by name</span>
            <input
                className={styles.inputs}
                type="text"
                name="filter"
                onChange={e => onChange(e.target.value)}
            />
        </label>
    );
}
