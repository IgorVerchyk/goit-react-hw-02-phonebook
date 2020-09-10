import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

export default function insertItem({ name, number, onDelete }) {
    return (
        <li className={styles.listItem}>
            <p>
                {name}:{number}
            </p>
            <button
                type="button"
                onClick={onDelete}
                className={styles.deleteButton}
            >
                Delete
            </button>
        </li>
    );
}

insertItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};
