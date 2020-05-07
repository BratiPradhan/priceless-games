import React from 'react';
import axios from 'axios';

const noteValue = {
    marginTop: "20px",
    marginBottom: "10px",
    color: "#ff4081",
    textAlign: 'center'
}
class Note extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            note: 0,
            link: ''
        };
    }
    
    getGame=(id)=>{ 
        axios.get(`https://www.cheapshark.com/api/1.0/deals?id=${id}`)
        .then( response => {
            return response.data
        })
        .then(data => {
            const { metacriticScore, metacriticLink } = data.gameInfo;
            this.setState({
                note: metacriticScore,
                link: metacriticLink
            })
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
        const { note, link } = this.state
        return(
           <a href={`https://www.metacritic.com${link}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="note">
                <p className="note-title">Game score</p>
                <h2 style={noteValue}>{note} %</h2> 
                <p>Get more info</p>  
          </a>
        );
    }
}

export default Note