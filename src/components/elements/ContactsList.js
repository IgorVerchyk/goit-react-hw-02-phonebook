import React from 'react';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, onDelete }) {
    return (
        <ul>
            {contacts.map(({ id, ...contact }) => (
                <ContactItem
                    key={id}
                    {...contact}
                    onDelete={() => onDelete(id)}
                />
            ))}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.exact({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            }),
        ),
        PropTypes.array,
    ]),
    onDelete: PropTypes.func.isRequired,
};
