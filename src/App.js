import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';

function App() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
