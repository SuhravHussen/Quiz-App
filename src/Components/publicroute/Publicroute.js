import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function PublicRoute({ comp, isAuthenticated, ...rest }) {
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                !currentUser ? (
                    comp
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default PublicRoute;
