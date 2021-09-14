import React from 'react';

export default function Checkbox({ text, ...rest }) {
    return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label htmlFor="Checkbox" className="mt-4">
            <input
                id="Checkbox"
                className="mr-3 checked:bg-green-600 checked:border-transparent "
                type="checkbox"
                {...rest}
            />
            <span>{text}</span>
        </label>
    );
}
