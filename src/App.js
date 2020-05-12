import React from 'react';
import Home from './components/Home'
import {Switch, Route} from 'react-router-dom';
import GameList from './components/GamesList'
import GameInfo from './components/GameInfo/GameInfo'
import './App.css'
import Navbar from './components/Navbar'
import Deals from './components/BestDeals/Deals'
import FavList from './components/Favourite/FavList'

function App() {

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/search" render={({location}) => <GameList location={location} />} />
        <Route path="/game/:gameID" render={({location}) => <GameInfo location={location} />} />
        <Route path="/deals" render={() => <Deals />} />
        <Route path="/new-games" render={() => <Deals />} />
        <Route path='/favorite' render={() => <FavList />} />
      </Switch>
    </>
  )
}

export default App;
