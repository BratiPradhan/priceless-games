import React, { Component } from 'react'
import GameCard from './GameCard';
import SortedPrice from './SortedPrice';

class GameList extends Component{
    state = {
        games: this.props.location.state.games
    }
    render(){
        const games = this.props.location.state.games
       // const byPrice = (a,b) => a.cheapest-b.cheapest
        //games.sort(byPrice) 

        return(
            <div className="game-list-rows">
                {
                this.state.games.map(game => 
                    <GameCard
                        key={game.gameID}
                        {...game}
                    />)
                    
                } 
               <SortedPrice />
            </div>
        )
    }
}

export default GameList