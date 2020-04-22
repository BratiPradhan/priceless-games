import React, { Component } from 'react'
import GameCard from './GameCard';

class GameList extends Component{
    render(){
        const games = this.props.location.state.games
        return(
            <div>
                {
                games.map(game => 
                    <GameCard
                        key={game.gameID}
                        {...game}
                    />)
                }
            </div>
        )
    }
}

export default GameList