/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { faLock, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../Components/common/Button';
import ChangeMethod from '../../Components/common/ChangeMethod';
import TextInput from '../../Components/common/TextInput';
import Form from '../../Components/Sign-up/Form';
import Illustration from '../../Components/Sign-up/Illustration';

const Login = () => {
    const history = useHistory();

    const handleChange = () => {
        history.push('/signup');
    };
    return (
        <>
            <h1 className="text-2xl   sm:text-5xl text-gray-600">Login with your account</h1>
            <div className="flex justify-evenly items-center">
                <Illustration />
                <Form className="h-96 w-full lg:w-2/5">
                    <TextInput type="email" icon={faPaperPlane} placeholder="Enter Email" />
                    <TextInput type="password" icon={faLock} placeholder="Enter password" />
                    <Button>Login Now</Button>
                    <ChangeMethod>
                        {' '}
                        Dont have an account?{' '}
                        <a onClick={handleChange} className="text-blue-500">
                            Sign up
                        </a>
                    </ChangeMethod>
                </Form>
            </div>
        </>
    );
};

export default Login;
