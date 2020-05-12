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

  componentDidMount(){
    this.setState({fav: localStorage})
  }

  addFav = (title, dealID) => {
    const game = {
      title: title,
      deal: dealID
    }
    localStorage.setItem(title, JSON.stringify(game))
    this.setState({fav: localStorage})
  }

  render(){
    const { fav } = this.state
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/search" render={({location}) => <GameList location={location} />} />
          <Route path="/game/:gameID" render={({location}) => <GameInfo addFav={this.addFav} location={location} />} />
          <Route path="/deals" render={() => <Deals />} />
          <Route path="/new-games" render={() => <Deals />} />
          <Route path='/favorite' render={() => <FavList fav={fav}/>} />
        </Switch>
      </>
    )
  }
}

export default App;
