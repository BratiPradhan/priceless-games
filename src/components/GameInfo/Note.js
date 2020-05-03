import React from 'react';
import axios from 'axios';

const boxTwo = {
    width: "130px",
    height: "140px",
    border: "1px solid #e040fb",    
    marginTop: "10px",
    marginLeft: "0px",    
}
const note = {
    marginLeft: "7.5px",
    marginTop: "20px",
    color: "#ff4081"
}
const noteValue = {
    marginTop: "40px",
    marginLeft: "45px",
    color: "#ff4081"
}
class Note extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            note: 0

        };
    }
    
    getGame=(id)=>{ 
        axios.get(`https://www.cheapshark.com/api/1.0/deals?id=${id}`)
        .then( response => {
            return response.data
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
        const { dealId } = this.props
        this.getGame(dealId)
    }

    render(){
        return(
            
           <div style={boxTwo}>
                <p style={note}>La note du jeu</p>
                <h1 style={noteValue}>{this.state.note}</h1>   
          </div>
        );
    }
}

export default Note