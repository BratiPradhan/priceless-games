import React from 'react'


const priceStyle= {
    
    width: "300px", 
    marginLeft: "200px",
    marginTop: "250px"
}
const image={
    width: "300px",
    height: "300px"
}

const Image = ({imgurl}) =>{
  
        return(

                <div style={priceStyle}>
                <img src={imgurl} alt="image" style={image} />    
                </div>

         );
}
export default Image