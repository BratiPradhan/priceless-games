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
      const deals = this.props.location.state.game.deals
      const dealId = deals[0].dealID
      console.log("Je suis dans le dealid", dealId)
    return(
        
            <div style={gameInfoStyle}>  

                    <Image imgurl={this.props.location.state.game.thumb} />

                    <RatingNotes dealId={dealId} />
                    
                    <PriceList price={this.props.location.state.game.deals[0].price} /> 

                  

             </div>
        );
    }
}

export default GameInfo