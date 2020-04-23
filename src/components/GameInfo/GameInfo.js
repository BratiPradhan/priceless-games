import React, { Component } from 'react';
import Image from './Image';
import PriceList from './PriceList';
import TheBoxe from './TheBoxe';


const gameInfoStyle= {
    display: "flex",
    flexDirection: "row",
    height: "300px"
}


class GameInfo extends Component {
    
   
   render() {
    return(
        
            <div style={gameInfoStyle}> 
             <Image /> 
             <TheBoxe /> 
             <PriceList /> 

             </div>
    );
}
}

export default GameInfo