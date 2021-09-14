import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const RightContainer = () => (
    <>
        <div className="flex justify-center items-center mr-3 border-green-500 border  rounded-full p-0.5 h-10 w-10">
            <FontAwesomeIcon className="text-green-700" icon={faUserPlus} />
        </div>

        <span>Sign Up</span>
    </>
);

export default RightContainer;
