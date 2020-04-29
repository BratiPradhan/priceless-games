import React, {Component} from 'react';

const boxTwo={
    width: "130px",
    height: "140px",
    border: "1px solid yellow",    
    marginTop: "10px",
    marginLeft: "0px"
}




class Note extends Component {
   
    getGame=(id)=>{
     console.log("im here" , this.props.deals)
    }


    componentDidMount(){
        this.getGame(this.props.deals)
    }


    render(){
        return(
            
            <div style={boxTwo}>

              <p> {this.props.dealid}  </p>
                     
            </div>
        );
    }
}

export default Note