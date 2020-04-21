import React from 'react';
import Search from './components/Search';
import {Switch, Route} from 'react-router-dom';
import GameList from './components/GamesList'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Search />
      </Route>
      <Route path="/search/:key" component={GameList} />
    </Switch>
  )
}

export default App;
