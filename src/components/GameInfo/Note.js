import React from 'react';
import axios from 'axios';

const boxTwo = {
    width: "130px",
    height: "140px",
    border: "1px solid #e040fb",    
}
const note = {
    marginTop: "20px",
    color: "#ff4081",
    textAlign: 'center'
}
const noteValue = {
    marginTop: "30px",
    color: "#ff4081",
    textAlign: 'center'
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
        const { dealID } = this.props
        this.getGame(dealID)
    }

    render(){
        return(
            
           <div style={boxTwo}>
                <p style={note}>Note</p>
                <h2 style={noteValue}>{this.state.note} %</h2>   
          </div>
        );
    }
}

export default Note