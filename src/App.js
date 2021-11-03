import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Loader from './Components/loader/Loader';
import PrivateRoute from './Components/privateroute/privateroute';
import PublicRoute from './Components/publicroute/Publicroute';
import { AuthProvider } from './context/AuthContext';

const Home = React.lazy(() => import('./Pages/Home/Home'));
const Login = React.lazy(() => import('./Pages/Login/Login'));
const Quiz = React.lazy(() => import('./Pages/Quiz/Quiz'));
const Result = React.lazy(() => import('./Pages/Result/Result'));
const Signup = React.lazy(() => import('./Pages/Sign-up/Signup'));

function App() {
    return (
        <Router>
            <AuthProvider>
                <Layout>
                    <Switch>
                        <Suspense fallback={<Loader />}>
                            <Route exact path="/" component={Home} />
                            <PublicRoute exact path="/signup" component={Signup} />
                            <PublicRoute exact path="/login" component={Login} />
                            <PrivateRoute exact path="/quiz/:id" component={Quiz} />
                            <PrivateRoute exact path="/result/:id" component={Result} />
                        </Suspense>
                    </Switch>
                </Layout>
            </AuthProvider>
        </Router>
    );
}

export default App;
