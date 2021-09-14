import { faLock, faPaperPlane, faUserLock, faUserTie } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Button from '../../Components/common/Button';
import ChangeMethod from '../../Components/common/ChangeMethod';
import Checkbox from '../../Components/common/Checkbox';
import TextInput from '../../Components/common/TextInput';
import Layout from '../../Components/Layout/Layout';
import Form from '../../Components/Sign-up/Form';
import Illustration from '../../Components/Sign-up/Illustration';

const Signup = () => (
    <Layout>
        <h1 className="text-5xl text-gray-600">Create an account</h1>
        <div className="flex justify-evenly items-center">
            <Illustration />
            <Form className="h-96 w-full lg:w-2/5">
                <TextInput type="text" icon={faUserTie} placeholder="Enter Name" />
                <TextInput type="email" icon={faPaperPlane} placeholder="Enter Email" />
                <TextInput type="password" icon={faLock} placeholder="Enter password" />
                <TextInput type="password" icon={faUserLock} placeholder="Confirm password" />
                <Checkbox text="I agree with the Terms & Conditions" />
                <Button> Submit Now</Button>
                <ChangeMethod>
                    {' '}
                    Already have an account? <a href="dgd">Login</a>
                </ChangeMethod>
            </Form>
        </div>
    </Layout>
);

export default Signup;
