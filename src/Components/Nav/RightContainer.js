import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const RightContainer = () => (
    <>
        <div className="flex justify-center items-center mr-3 border-green-500 border  rounded-full p-0.5 h-10 w-10">
            <Link to="/signup">
                {' '}
                <FontAwesomeIcon className="text-green-700" icon={faUserPlus} />{' '}
            </Link>
        </div>

        <Link to="/signup">
            {' '}
            <span className="cursor-pointer">Sign Up</span>
        </Link>
    </>
);

export default RightContainer;
