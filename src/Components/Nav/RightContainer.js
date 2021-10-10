import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const RightContainer = () => {
    const { currentUser, logout } = useAuth();

    return (
        <>
            {!currentUser ? (
                <>
                    <Link to="/signup">
                        <span className="cursor-pointer mr-2 font-semibold">Sign Up</span>
                    </Link>
                    <Link to="/login">
                        <span className="cursor-pointer font-semibold">login</span>
                    </Link>
                </>
            ) : (
                <>
                    <div className="flex justify-center items-center mr-2 ">
                        <span className="material-icons-outlined text-blue-700">
                            account_circle
                        </span>
                    </div>
                    <span className="mr-2">{currentUser.displayName}</span>
                    <span
                        role="button"
                        tabIndex="0"
                        onClick={logout}
                        className="material-icons-outlined"
                    >
                        logout
                    </span>
                </>
            )}
        </>
    );
};

export default RightContainer;
