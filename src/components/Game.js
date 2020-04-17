import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



function Game() {
 
    const match = useRouteMatch();
    return (
      <div>
        <h2>Topics</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/triviaA`}>A</Link>
          </li>
          <li>
            <Link to={`${match.url}/triviaB`}>
              B
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/triviaC`}>
              C
            </Link>
          </li>
        </ul>
  
        <Switch>
          <Route path={`${match.path}/:gameId`}>
            <ChoosenGame />
          </Route>
          <Route path={match.path}>
            <h3>Please select a Game.</h3>
          </Route>
        </Switch>
      </div>
    );
  
}


export default Game;


function ChoosenGame() {
  const { gameId } = useParams();
  return <h3>Requested game ID: {gameId}</h3>;
}