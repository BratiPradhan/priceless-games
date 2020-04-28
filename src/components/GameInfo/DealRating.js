import React, {Component} from 'react';

const boxOne={
    width: "130px",
    height: "140px",
    border: "1px solid yellow",    
    marginTop: "2px",
    marginLeft: "0px"
}

const note={
    width: "70px",
    marginLeft: "30px",
    marginTop: "30px"
}

class DealRating extends Component {

    
    getDealRating =(id)=>{
        console.log("Hello", this.props.gameid )
    }

    componentDidMount (){
        this.getDealRating(this.props.gameID)
        console.log(this.props.location)
    }


    render(){
      console.log("je suis dans dealrating", this.props.gameid)
        return(
            
             <div style={boxOne}>
                    <img src= {this.props.gameid} alt={this.props.gameid} style={note} />
                     
                    </div>
                     
            
        );
    }
}

export default DealRating