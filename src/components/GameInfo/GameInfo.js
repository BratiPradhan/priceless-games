import React, { Component } from 'react';
import Image from './Image';
import PriceList from './PriceList';
import TheBoxe from './TheBoxe';


const gameInfoStyle= {
    display: "flex",
    flexDirection: "row",
    height: "300px",
    width: "300px",
    position:"absolute",
    left: "32%",
    top: "50%",
    marginLeft: "-150px",
    marginTop: "-150px"
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