import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import Signup from './Pages/Sign-up/Signup';

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/quiz" component={Quiz} />
                    <Route exact path="/result" component={Result} />
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
