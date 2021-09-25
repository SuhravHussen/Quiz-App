import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Quiz from './Pages/Quiz/Quiz';
import Signup from './Pages/Sign-up/Signup';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/quiz" component={Quiz} />
            </Switch>
        </Router>
    );
}

export default App;
