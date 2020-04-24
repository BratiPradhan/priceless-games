import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
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
            game.thumb = this.props.thumb;
            this.setState({ game })
        })
    }

    render(){
        const { game } = this.state;
        const { gameID } = this.props
        const thumb = {backgroundImage: `url(${this.props.thumb})`}
        return(
            <Link to={{
                pathname: `/game/${gameID}`,
                state: { game: game }
            }} 
                className="game-card">
                <span style={thumb}></span>
                <div className="game-info">
                    <p>{game.info.title}</p>
                    <p className="game-price">{game.deals[0].price} $</p>
                </div>
            </Link>
        )
    }
}

export default withRouter(GameCard);