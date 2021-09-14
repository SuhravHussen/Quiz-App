import React from 'react';
import Logo from '../../assets/logo-bg.png';
import RightContainer from './RightContainer';

const Nav = () => (
    <ul className=" p-2 flex justify-between items-center bg-green-200">
        <li className="mr-3 flex items-center">
            <img className="mr-3  h-10 sm:ml-3" src={Logo} alt="Learn-with-sumit-logo" />
            <span className="text-xl">Learn with sumit</span>
        </li>
        <li className="mr-3 flex items-center">
            <RightContainer />
        </li>
    </ul>
);

export default Nav;
