import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Game from './components/Game';
import HomepageContextProvider from './contexts/HomepageContext';
import QuizAPIContextProvider from './contexts/QuizAPIContext';
import GameContextProvider from './contexts/GameContext';
import './App.scss';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <div>
        <HomepageContextProvider>
          <QuizAPIContextProvider>
            <GameContextProvider>
              <Switch>
                <Route exact path='/' component={MainPage} />
                <Route path='/game' component={Game} />
              </Switch>
            </GameContextProvider>
          </QuizAPIContextProvider>
        </HomepageContextProvider>
      </div>
    </Router>
  );
}

export default App;
