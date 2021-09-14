import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TextInput = ({ type, placeholder, icon }) => (
    <div className="textInput w-full h-12 border-2  flex items-center rounded-md border-grey-300 p-0.5 mb-3">
        <input
            className="w-full h-full border-0 outline-none text-base py-1.5 px-3  bg-white font-medium"
            type={type}
            placeholder={placeholder}
        />
        <FontAwesomeIcon
            className="h-full mr-3  text-gray-400 flex items-center justify-center cursor-pointer bg-white "
            icon={icon}
            s
        />
    </div>
);

export default TextInput;
