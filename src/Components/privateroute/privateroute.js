import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function PrivateRoute({ comp, isAuthenticated, ...rest }) {
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                currentUser ? (
                    comp()
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
