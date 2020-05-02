import React from 'react';
import axios from 'axios';

const boxTwo={
    width: "130px",
    height: "140px",
    border: "1px solid yellow",    
    marginTop: "10px",
    marginLeft: "0px"
}




class Note extends React.Component {
    constructor(props){
           super(props);
         this.state= {
             note: 0
         };
        
        }
    
    getGame=(id)=>{ 
     console.log("im in get game" , id)
            
            axios.get(`https://www.cheapshark.com/api/1.0/deals?id=${id}`)
            .then( response => {
              return  response.data
            })
            .then(data => {
              const metacriticScore = data.gameInfo.metacriticScore;
              this.setState({note: metacriticScore})
              
            }) 
            .catch( error => {
                console.log(error);
            })     
    
    }

    componentDidMount(){
        const dealId= this.props.dealId
        console.log(dealId, 'here my dealid')
        this.getGame(dealId)
       
       }


    render(){
        return(
            
            <div style={boxTwo}>

                <h1> {this.state.note} </h1>
                     
            </div>
        );
    }
}

export default Note