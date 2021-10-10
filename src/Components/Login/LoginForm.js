import { faLock, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import Button from '../common/Button';
import ChangeMethod from '../common/ChangeMethod';
import TextInput from '../common/TextInput';
import Form from '../Sign-up/Form';

const LoginForm = () => {
    const history = useHistory();

    const handleChange = () => {
        history.push('/signup');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(email, password);
            history.push('/');
        } catch (err) {
            setLoading(false);
            console.log(err);
            setError('Failed to login');
        }
    }

    return (
        // eslint-disable-next-line react/jsx-no-bind
        <Form className="h-96 w-full lg:w-2/5" onSubmit={handleSubmit}>
            <TextInput
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                icon={faPaperPlane}
                placeholder="Enter Email"
            />
            <TextInput
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                icon={faLock}
                placeholder="Enter password"
            />
            <Button disabled={loading} type="submit">
                Login Now
            </Button>
            <ChangeMethod>
                {' '}
                Dont have an account?{' '}
                <button
                    type="button"
                    onClick={handleChange}
                    className="text-blue-500 cursor-pointer"
                >
                    Sign up
                </button>
                <p className="text-center text-red-500">{error}</p>
            </ChangeMethod>
        </Form>
    );
};

export default LoginForm;
