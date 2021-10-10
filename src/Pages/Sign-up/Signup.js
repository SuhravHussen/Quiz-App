import React from 'react';
import Illustration from '../../Components/Sign-up/Illustration';
import SignupForm from '../../Components/Sign-up/SignupForm';

const Signup = () => (
    <>
        <h1 className="text-2xl   sm:text-5xl text-gray-600">Create an account</h1>
        <div className="flex justify-evenly items-center">
            <Illustration />
            <SignupForm />
        </div>
    </>
);

export default Signup;
