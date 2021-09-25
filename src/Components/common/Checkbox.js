import React from 'react';

export default function Checkbox({ text, className, ...rest }) {
    return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className={`mt-4 ${className}`}>
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
