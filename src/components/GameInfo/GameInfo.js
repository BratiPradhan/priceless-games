import React, { Component } from 'react';
import Image from './Image';
import PriceList from './PricesList/PriceList';
import RatingNotes from './RatingNotes';


const gameInfoStyle= {
    display: "flex",
    height: "100vh",
}


class GameInfo extends Component {
   render() {
      const { deals, thumb } = this.props.location.state.game
      const { title } = this.props.location.state.game.info
      const dealID = deals[0].dealID
    return(
        
            <div style={gameInfoStyle}>  

                    <Image imgurl={thumb} title={title} />

                    <RatingNotes dealID={dealID} />

                    <PriceList deals={deals} /> 

             </div>
        );
    }
}

export default GameInfo