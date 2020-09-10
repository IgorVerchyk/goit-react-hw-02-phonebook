import React from 'react';
import PropTypes from 'prop-types';

export default function insertItem({ name, number }) {
    return (
        <li>
            <p>
                {name}:{number}
            </p>
        </li>
    );
}

insertItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};
