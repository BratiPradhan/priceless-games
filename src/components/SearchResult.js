import React, { Component } from 'react';
import axios from 'axios';

class SearchResult extends Component {
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

    componentDidMount(){
        this.getGame(this.props.gameID)
    }

    getGame = gameID => {
        axios.get(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`)
        .then(response => response.data)
        .then(data => {
            const game = data;
            this.setState({ game })
        })
    }
    
    render(){
        const game = this.state.game;
        return(
            <a href="#" onClick={() => console.log(game.info.title)}>
                <img alt={game.info.title} src={this.props.thumb}/>
                <div>
                    <h3>{game.info.title}</h3>
                    <p>{game.deals[0].price} $</p>
                </div>
            </a>
        )
    }
}

export default SearchResult;