import React, { Component } from 'react';
import Image from './Image';
import PriceList from './PriceList';
import TheBoxe from './TheBoxe';


const gameInfoStyle= {
    display: "flex",
    height: "100vh",
    backgroundImage: `url(${'https://data.photofunky.net/output/image/a/f/0/5/af05b1/photofunky.gif'})`,
    backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  top: "25%"
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