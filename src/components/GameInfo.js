import React, { Component } from 'react';


const gameInfoStyle= {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ED0197",
    height: "300px",
    

}


const priceStyle= {
    backgroundColor:"#511DA7",
    width: "300px", 
    border: "1px solid black"  
 
}
const source= {
    listStyle: "none",
}
const image={
    width: "300px",
    height: "300px"
}
const sourceOne= {
    marginTop: "20px",
    marginLeft: "20px"
}
const sourceTwo= {
    marginTop: "20px",
    marginLeft: "20px"
}
const sourceTree= {
    marginTop: "20px",
    marginLeft: "20px"
}
const sourceFour= {
    marginTop: "20px",
    marginLeft: "20px"
}
const sourceFive= {
    marginTop: "20px",
    marginLeft: "20px"
}

const dealStyle= {
    backgroundColor: "#d90d0d",
    width: "300px",
    border: "1px solid yellow"  
}

const boxOne={
    width: "80px",
    height: "80px",
    border: "1px solid blue",    
    marginTop: "20px",
    marginLeft: "120px"
}
const boxTwo={
    width: "80px",
    height: "80px",
    border: "1px solid yellow",    
    marginTop: "15px",
    marginLeft: "120px"
}
const infoListeOne= {
    marginTop: "20px",
    marginLeft: "20px"
}

const infoListeTwo= {
      marginTop: "20px",
      marginLeft: "20px"
}


const noteStyle= {
    backgroundColor: "#87CEFA",
    width: "300px",
    border: "1px solid red" 
}
const info= {
    listStyle: "none",
}



class GameInfo extends Component {
    
   
   render() {
    return(
        
                    <div style={gameInfoStyle}>

                        <div style={priceStyle}>
                        <img src="https://media.lesechos.com/api/v1/images/view/5c12ae958fe56f708f174508/1280x720/060340272200-web-tete.jpg" alt="image" style={image} />    
                        </div>

                        <div  style={dealStyle}>     
                             <ul style={info}>
                                <li style={infoListeOne}>StoreID :</li>
                                <li style={infoListeTwo}>DealID :</li>   
                             </ul>
                                <div style={boxOne}>
                                </div>
                                <div style={boxTwo}>
                                </div>
                        </div>

                        <div style={noteStyle}>
                        <ul style={source}>
                                <li style={sourceOne}>Source................Prix</li> 
                                <li style={sourceTwo}>Source................Prix</li>
                                <li style={sourceTree}>Source................Prix</li>
                                <li style={sourceFour}>Source................Prix</li>
                                <li style={sourceFive}>Source................Prix</li>  
                            </ul>
                        </div>
                    </div>
               
    );
}
}

export default GameInfo