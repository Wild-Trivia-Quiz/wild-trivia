import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Game from "./components/Game";
import HomepageContextProvider from "./contexts/HomepageContext";
import QuizAPIContextProvider from "./contexts/QuizAPIContext";
import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        {/*  <nav>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
          </ul>
        </nav> */}

        <HomepageContextProvider>
          <QuizAPIContextProvider>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/game" component={Game} />
              <Route path="/about" component={About} />
            </Switch>
          </QuizAPIContextProvider>
        </HomepageContextProvider>
      </div>
    </Router>
  );
}

export default App;
