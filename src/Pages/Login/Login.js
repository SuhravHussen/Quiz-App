import React from 'react';
import LoginForm from '../../Components/Login/LoginForm';
import Illustration from '../../Components/Sign-up/Illustration';

const Login = () => (
    <>
        <h1 className="text-2xl   sm:text-5xl text-gray-600">Login with your account</h1>
        <div className="flex justify-evenly items-center">
            <Illustration />
            <LoginForm />
        </div>
    </>
);

export default Login;
