import React from 'react';
import Search from './components/Search/Search';
import {Switch, Route} from 'react-router-dom';
import GameList from './components/GamesList'
import GameInfo from './components/GameInfo/GameInfo'
import './App.css'
import Navbar from './components/Navbar'
import Deals from './components/BestDeals/Deals'

function App() {

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route path="/search" component={GameList} />
        <Route path="/game/:gameID" component={GameInfo} />
        <Route path="/deals" component={Deals} />
      </Switch>
    </>
  )
}

export default App;
