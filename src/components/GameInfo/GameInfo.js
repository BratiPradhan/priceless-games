import React, { Component } from 'react';
import Image from './Image';
import PriceList from './PriceList';
import RatingNote from './RatingNote';


const gameInfoStyle= {
    display: "flex",
    height: "100vh",
}


class GameInfo extends Component {
   
   render() {
    return(
        
            <div style={gameInfoStyle}>  

                    <Image imgurl= {this.props.location.state.game.thumb} />

                    <RatingNote />
                    
                    <PriceList price= {this.props.location.state.game.deals[0].price} /> 

                  

             </div>
        );
    }
}

export default GameInfo