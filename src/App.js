import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import PrivateRoute from './Components/privateroute/privateroute';
import PublicRoute from './Components/publicroute/Publicroute';
import { AuthProvider } from './context/AuthContext';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import Signup from './Pages/Sign-up/Signup';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <PublicRoute exact path="/signup" component={Signup} />
                        <PublicRoute exact path="/login" component={Login} />
                        <PrivateRoute exact path="/quiz" comp={Quiz} />
                        <PrivateRoute exact path="/result" comp={Result} />
                    </Switch>
                </Layout>
            </AuthProvider>
        </Router>
    );
}

export default App;
