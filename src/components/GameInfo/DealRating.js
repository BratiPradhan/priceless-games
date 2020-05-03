import React from 'react';
import axios from 'axios';

const boxOne={
    width: "130px",
    height: "140px",
    border: "1px solid #e040fb",    
    marginTop: "2px",
    marginLeft: "0px",
    textAlign: "center",
    color: "#69f0ae"
}
const price={
    marginTop: "30px",
}
const priceValue={
    marginTop: "20px",
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
        const { dealID } = this.props
        this.getDealRating(dealID)   
    }

    render(){
        const { dealID } = this.props
        return(  
            <div style={boxOne}>
                <p style={priceValue}>Best deal</p>
                <h2 style={price}>{this.state.price} $</h2>
                <a className="button" 
                    href={`https://www.cheapshark.com/redirect?dealID=${dealID}`} 
                    target="_blank"> 
                    Buy ! 
                </a>
            </div>                
            
        );
    }
}

export default DealRating