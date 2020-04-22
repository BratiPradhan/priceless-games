import React, { Component } from 'react';
import './GameCard.css'
import axios from 'axios';


class GameCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            game: {
                info: {
                    title: ""
                },
                deals: {
                    0: {
                        price: ""
                    } 
                }
            }
        }
    }

    componentDidMount = () => {
        this.getGame(this.props.gameID)
    }

    getGame = gameId => {
        axios.get(`https://www.cheapshark.com/api/1.0/games?id=${gameId}`)
        .then(res => res.data)
        .then(data => {
            const game = data;
            this.setState({ game })
        })
    }

    render(){
        const game = this.state.game;
        const thumb = {backgroundImage: `url(${this.props.thumb})`}
        return(
            <a className="game-card" href='#'>
                <span style={thumb}></span>
                <div className="game-info">
                    <p>{game.info.title}</p>
                    <p className="game-price">{game.deals[0].price} $</p>
                </div>
            </a>
        )
    }
}

export default GameCard;