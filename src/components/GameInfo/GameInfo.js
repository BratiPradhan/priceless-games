import React, { Component } from 'react';
import PriceStyle from './Image';
import Note from './PriceList';
import TheBoxe from './TheBoxe';


const gameInfoStyle= {
    display: "flex",
    flexDirection: "row",
    height: "300px",
    margin: "auto"
}


class GameInfo extends Component {
    
   
   render() {
    return(
        
            <div style={gameInfoStyle} > 
                <PriceStyle /> 
                <TheBoxe /> 
                <Note /> 
             </div>
    );
}
}

export default GameInfo