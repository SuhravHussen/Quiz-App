import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                currentUser ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
