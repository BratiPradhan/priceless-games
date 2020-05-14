import React, { Component } from 'react';
import Home from './components/Home'
import {Switch, Route} from 'react-router-dom';
import GameList from './components/GamesList'
import GameInfo from './components/GameInfo/GameInfo'
import './App.css'
import Navbar from './components/Navbar'
import Deals from './components/BestDeals/Deals'
import FavList from './components/Favourite/FavList'
import { setStorage, getStorage, checkChanges } from './utils/storage'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { addNotif, removedNotif } from './utils/notifications'




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
    console.log(this.state.favGames)
  }

  componentDidUpdate = () => {
    const { favGames } = this.state;
    setStorage(favGames);
  }

  addFav = (id, title, price, game) => {
    const { favGames } = this.state
    const demoPrice = parseFloat(price) + 10 // ONLY HERE FOR DEMO PURPOSE -> CHECK NOTIFICATION SYSTEM
    const gameInfos = {
      id: id,
      title: title,
      price: price, // DEMO PURPOSE : CHANGE THIS BY demoPrice
      newPrice: null,
      change: false,
      game: game
    }
 
    addNotif(title);

    favGames.push(gameInfos);
    this.setState({favGames})

  }

  removeFav = (id, title) => {
    let { favGames } = this.state;
    const removed = favGames.filter(game => game.id === id);
    const index = favGames.indexOf(removed[0]);
    favGames.splice(index, 1);

    this.setState({favGames})

    removedNotif(title)

  }

  removeNotif = (id) => {
    const { favGames } = this.state;
    const changed = favGames.map(game => {
      if(game.id === id){
        return {
          ...game,
          change: false,
          newPrice: null
        }
      } else {
        return game
      }
    })

    this.setState({favGames: changed})

  }

  render(){
    const { favGames } = this.state
    return (
      <>
        <ReactNotification />
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/search" render={({location}) => <GameList location={location} />} />
          <Route path="/game/:gameID" render={({location, match}) => <GameInfo addFav={this.addFav} location={location} match={match} />} />
          <Route path="/deals" render={() => <Deals />} />
          <Route path='/favorite' render={() => <FavList favGames={favGames} removeFav={this.removeFav} removeNotif={this.removeNotif} />} />
        </Switch>
      </>
    )
  }
}

export default App;
