import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Homepage</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/detailpage'>Detail Page</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/detailpage'>
            <DetailPage />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Homepage() {
  return <h2>Homepage</h2>;
}

function About() {
  return <h2>About</h2>;
}

function DetailPage() {
  return <h2>Detail Page</h2>;
}

export default App;
