import React, { Component } from 'react';
import Home from './components/Home'
import {Switch, Route} from 'react-router-dom';
import GameList from './components/GamesList'
import GameInfo from './components/GameInfo/GameInfo'
import './App.css'
import Navbar from './components/Navbar'
import Deals from './components/BestDeals/Deals'
import FavList from './components/Favourite/FavList'
import { setStorage, getStorage, checkChanges } from './utiles/index'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      favGames: []
    }
  }

  componentDidMount = async () => {
    const storedFavGames = getStorage();
    const checkedList = await checkChanges(storedFavGames)
    this.setState({favGames: checkedList})
  }

  componentDidUpdate = () => {
    const { favGames } = this.state;
    setStorage(favGames);
  }

  addFav = (id, title, price) => {
    const { favGames } = this.state
    const game = {
      id: id,
      title: title,
      price: price,
      newPrice: null,
      change: false
    }
 
    favGames.push(game);

    this.setState({favGames})

  }

  removeFav = (id) => {
    let { favGames } = this.state;
    const removed = favGames.filter(game => game.id === id);
    const index = favGames.indexOf(removed[0]);
    favGames.splice(index, 1);

    this.setState({favGames})

  }

  render(){
    const { favGames } = this.state
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/search" render={({location}) => <GameList location={location} />} />
          <Route path="/game/:gameID" render={({location, match}) => <GameInfo addFav={this.addFav} location={location} match={match} />} />
          <Route path="/deals" render={() => <Deals />} />
          <Route path="/new-games" render={() => <Deals />} />
          <Route path='/favorite' render={() => <FavList favGames={favGames} removeFav={this.removeFav} />} />
        </Switch>
      </>
    )
  }
}

export default App;
