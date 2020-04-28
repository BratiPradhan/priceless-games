import React, { Component } from 'react';
import Image from './Image';
import PriceList from './PriceList';
import RatingNotes from './RatingNotes';


const gameInfoStyle= {
    display: "flex",
    height: "100vh",
}


class GameInfo extends Component {

   
   render() {
       console.log("je suis dans gameinfo, do i have thes infos ?", this.props.match.params.gameID)
       const gameid=  this.props.match.params.gameID

    return(
        
            <div style={gameInfoStyle}>  

                    <Image imgurl= {this.props.location.state.game.thumb} />

                    <RatingNotes gameid= { gameid } />
                    
                    <PriceList price= {this.props.location.state.game.deals[0].price} /> 

                  

             </div>
        );
    }
}

export default GameInfo