import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Logo from '../../assets/logo-bg.png';

const Nav = () => (
    <ul className=" p-2 flex justify-between items-center bg-green-200">
        <li className="mr-3 flex items-center">
            <img className="mr-3 ml-3 h-10" src={Logo} alt="Learn-with-sumit-logo" />
            <span className="text-xl">Learn with sumit</span>
        </li>
        <li className="mr-3 flex items-center">
            <div className="flex justify-center items-center mr-3 border-green-500 border  rounded-full p-0.5 h-10 w-10">
                <FontAwesomeIcon className="text-green-700" icon={faUserPlus} />
            </div>

            <span>Sign Up</span>
        </li>
    </ul>
);

export default Nav;
