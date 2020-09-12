import React from 'react';
import InsertItem from './ContactItem';

export default function Contactlist({ contacts, onDelete }) {
    return (
        <>
            <ul>
                {contacts.map(({ id, ...contact }) => (
                    <InsertItem
                        key={id}
                        {...contact}
                        onDelete={() => onDelete(id)}
                    />
                ))}
            </ul>
        </>
    );
}