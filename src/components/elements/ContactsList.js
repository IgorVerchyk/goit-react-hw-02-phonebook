import React from 'react';
import InsertItem from './ContactItem';

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
