import React from 'react';
import InsertContactItem from './ContactItem';
import PropTypes from 'prop-types';

export default function Contactlist({ contacts, onDelete }) {
    return (
        <ul>
            {contacts.map(({ id, ...contact }) => (
                <InsertContactItem
                    key={id}
                    {...contact}
                    onDelete={() => onDelete(id)}
                />
            ))}
        </ul>
    );
}

Contactlist.propTypes = {
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
