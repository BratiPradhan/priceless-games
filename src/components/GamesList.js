import React, { Component } from 'react'

class GameList extends Component{
    render(){
        const games = this.props.location.state.games
        return(
            <ul>
                {games.map(game => <li key={game.gameID}>component here</li>)}
            </ul>
        )
    }
}

export default GameList