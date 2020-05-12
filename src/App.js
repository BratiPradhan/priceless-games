import React, { Component } from 'react';
import Home from './components/Home'
import {Switch, Route} from 'react-router-dom';
import GameList from './components/GamesList'
import GameInfo from './components/GameInfo/GameInfo'
import './App.css'
import Navbar from './components/Navbar'
import Deals from './components/BestDeals/Deals'
import FavList from './components/Favourite/FavList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fav: []
    }
  }

  addFav = (Id, title, dealID) => {
    const game = {
      id: Id,
      title: title,
      deal: dealID
    }

    localStorage.setItem(Id, JSON.stringify(game))

  }

  removeFav = (Id) => {
    localStorage.removeItem(Id)

  }

  render(){
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/search" render={({location}) => <GameList location={location} />} />
          <Route path="/game/:gameID" render={({location, match}) => <GameInfo addFav={this.addFav} location={location} match={match} />} />
          <Route path="/deals" render={() => <Deals />} />
          <Route path="/new-games" render={() => <Deals />} />
          <Route path='/favorite' render={() => <FavList removeFav={this.removeFav} />} />
        </Switch>
      </>
    )
  }
}

export default App;
