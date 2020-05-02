import React from 'react';
import axios from 'axios';

const boxOne={
    width: "130px",
    height: "140px",
    border: "1px solid #e040fb",    
    marginTop: "2px",
    marginLeft: "0px"
}

class DealRating extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            price: 0
        };
        
    }

    
    getDealRating =(id)=>{
       console.log("obtain my price" , id)
       axios.get(`https://www.cheapshark.com/api/1.0/deals?id=${id}`)
       .then( response => {
           return  response.data
       })
       .then(data => {
           const price = data.gameInfo.price;
           this.setState({price: price})
             
       }) 
       .catch( error => {
           console.log(error);
       })     
   
   }

    componentDidMount (){
        const dealId= this.props.dealId
        console.log(dealId , "herre, i have my price")
        this.getDealRating(dealId)
       
    }


    render(){
        return(
            
            <div style={boxOne}>
                <p>{this.state.price}$</p>    
            </div>                
            
        );
    }
}

export default DealRating