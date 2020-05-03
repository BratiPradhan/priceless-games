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
      const { deals, thumb } = this.props.location.state.game
      const { title } = this.props.location.state.game.info
      const dealId = deals[0].dealID
    return(
        
            <div style={gameInfoStyle}>  

                    <Image imgurl={thumb} title={title} />

                    <RatingNotes dealId={dealId} />

                    <PriceList deals={deals} /> 

             </div>
        );
    }
}

export default GameInfo