import React from 'react';
import InsertItem from './ContactItem';
import PropTypes from 'prop-types';

export default function Contactlist({ contacts }) {
    return (
        <>
            <ul>
                {contacts.map(({ id, ...prop }) => (
                    <InsertItem key={id} {...prop} />
                ))}
            </ul>
        </>
    );
}

Contactlist.propTypes = {
    contacts: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.exact({
                id: PropTypes.string.isRequired,
            }),
        ),
    ]),
};
