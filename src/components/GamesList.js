import React, { Component } from 'react'
import GameCard from './GameCard';

class GameList extends Component{
    render(){
        const games = this.props.location.state.games
        return(
            <ul>
                {games.map(game => <GameCard gameID={game.gameID}/>)}
            </ul>
        )
    }
}

export default GameList