import React, { Component } from 'react';
import Image from './Image';
import PriceList from './PriceList';
import TheBoxe from './TheBoxe';


const gameInfoStyle= {
    display: "flex",
    height: "100vh",
}


class GameInfo extends Component {


   
   render() {
    return(
        
            <div style={gameInfoStyle}>  
             <Image imgurl= {this.props.location.state.game.thumb} />
             <PriceList /> 
             <TheBoxe />
             </div>
        );
    }
}

export default GameInfo