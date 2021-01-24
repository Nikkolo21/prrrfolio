import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import Home from './Home';
import Work from './Work';
import Contact from './Contact';
import "tailwindcss/tailwind.css"


function App() {
  return (
    <Router>
      <>
        <nav>
          <ul className="flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
