import { faLock, faPaperPlane, faUserLock, faUserTie } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import Button from '../common/Button';
import ChangeMethod from '../common/ChangeMethod';
import Checkbox from '../common/Checkbox';
import TextInput from '../common/TextInput';
import Form from './Form';

const SignupForm = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { signup } = useAuth();

    const history = useHistory();

    const handleChange = () => {
        history.push('/login');
    };

    // eslint-disable-next-line consistent-return
    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            return setError("passwords didn't match");
        }
        try {
            setError('');
            setLoading(true);
            await signup(email, password, username);
            history.push('/');
        } catch (err) {
            setLoading(false);
            console.log(err);
            setError('Failed to create an account');
        }
    }

    return (
        // eslint-disable-next-line react/jsx-no-bind
        <Form className="h-96 w-full lg:w-2/5" onSubmit={handleSubmit}>
            <TextInput
                required
                type="text"
                icon={faUserTie}
                placeholder="Enter Name"
                onChange={(e) => setUserName(e.target.value)}
            />
            <TextInput
                required
                type="email"
                icon={faPaperPlane}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
                required
                type="password"
                icon={faLock}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextInput
                required
                type="password"
                icon={faUserLock}
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Checkbox
                required
                text="I agree with the Terms & Conditions"
                value={agree}
                onChange={(e) => setAgree(e.target.value)}
            />
            <Button disabled={loading} type="submit">
                {' '}
                Submit Now
            </Button>
            <p className="text-center text-red-500">{error}</p>
            <ChangeMethod>
                {' '}
                Already have an account?{' '}
                <button type="button" onClick={handleChange} className="text-blue-500">
                    Login
                </button>
            </ChangeMethod>
        </Form>
    );
};

export default SignupForm;
