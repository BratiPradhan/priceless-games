import React, { Component } from 'react'
import GameCard from './GameCard';
import SortedPrice from './SortedPrice';

class GameList extends Component{
    state = {
        games: this.props.location.state.games,
        sortBy: ''
    }
   
    handleSorted = event =>{
        const value = event.target.value
        const byPrice = (a,b) => a.cheapest-b.cheapest
        if (value === 'cheapest') {
            const filteredPrice = [...this.state.games].sort(byPrice) 
            this.setState({
                games: filteredPrice
            });
        }
        else { 
            const { games } = this.props.location.state
            this.setState({ games })
        }
    }
    render(){
        return(
           
            <div className="game-list-rows">
                <SortedPrice handleSorted={this.handleSorted} />
                {
                this.state.games.map(game => 
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