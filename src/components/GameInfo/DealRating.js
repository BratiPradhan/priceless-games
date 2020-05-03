import React from 'react';
import axios from 'axios';

const boxOne={
    width: "130px",
    height: "140px",
    border: "1px solid #e040fb",    
    marginTop: "2px",
    marginLeft: "0px"
}
const price={
    marginTop: "40px",
    textAlign: "center",
    color:"#69f0ae"
}
const priceValue={
    marginTop: "20px",
    color: "#69f0ae",
    textAlign: "center"
}

class DealRating extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            price: 0
        };    
    }

    getDealRating =(id)=>{
       axios.get(`https://www.cheapshark.com/api/1.0/deals?id=${id}`)
       .then( response => {
        return response.data   
       }) 
       .then(data => {
        const salePrice = data.gameInfo.salePrice;
        this.setState({price: salePrice})
       })
       .catch( error => {
           console.log(error);
       })     
   }

    componentDidMount (){
        const dealId= this.props.dealId
        this.getDealRating(dealId)   
    }

    render(){
        return(  
            <div style={boxOne}>
                <p style={priceValue}>Best deal</p>
                <h1 style={price}>{this.state.price}$</h1>    
            </div>                
            
        );
    }
}

export default DealRating