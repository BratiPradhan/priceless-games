import React from 'react';
import Search from './components/Search';
import {Switch, Route} from 'react-router-dom';
import GameList from './components/GamesList'
import GameInfo from './components/GameInfo/GameInfo'

function App() {

  return (

    <Switch>
      <Route exact path="/">
        <Search />
      </Route>
      <Route path="/search" component={GameList} />
      <Route path="/game/:gameID" component={GameInfo} />
    </Switch>

  
  )
}

export default App;
