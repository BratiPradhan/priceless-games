import React from 'react'


const priceStyle= {
    
    width: "300px", 
    marginLeft: "200px",
    marginTop: "250px"
}
const image={
    width: "300px"
}

const Image = ({imgurl, title}) =>{
  
        return(

                <div style={priceStyle}>
                    <h1>{title}</h1>
                    <img src={imgurl} alt="image" style={image} /> 
                </div>

         );
}
export default Image