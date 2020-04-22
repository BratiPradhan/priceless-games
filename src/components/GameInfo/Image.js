import React, { Component } from 'react'

const priceStyle= {
    backgroundColor:"#511DA7",
    width: "300px", 
 
}
const image={
    width: "300px",
    height: "300px"
}

class Image extends Component {
    render(){
        return(

                <div style={priceStyle}>
                <img src="https://media.lesechos.com/api/v1/images/view/5c12ae958fe56f708f174508/1280x720/060340272200-web-tete.jpg" alt="image" style={image} />    
                </div>

         );
}
}
export default Image