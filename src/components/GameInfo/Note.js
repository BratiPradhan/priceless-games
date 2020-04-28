import React, {Component} from 'react';

const boxTwo={
    width: "130px",
    height: "140px",
    border: "1px solid yellow",    
    marginTop: "10px",
    marginLeft: "0px"
}

const note={
    width: "70px",
    marginLeft: "30px",
    marginTop: "30px"
}



class Note extends Component {
    
    getGame=(id)=>{
     console.log("im here" , this.props.note)
    }

    componentDidMount(){
        this.getGame(this.props.gameID)
    }


    render(){
        return(
            
            <div style={boxTwo}>

              <img src= {this.props.note} alt={this.props.note} style={note} />
                     
            </div>
        );
    }
}

export default Note