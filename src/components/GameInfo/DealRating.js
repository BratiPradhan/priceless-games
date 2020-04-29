import React, {Component} from 'react';

const boxOne={
    width: "130px",
    height: "140px",
    border: "1px solid yellow",    
    marginTop: "2px",
    marginLeft: "0px"
}

class DealRating extends Component {

    
    getDealRating =(id)=>{
       console.log(this.props.deals)
    }

    componentDidMount (){
        this.getDealRating(this.props.deals)
        console.log(this.props.location)
    }


    render(){
        return(
            
             <div style={boxOne}>
                    <p> {this.props.deals} </p>
                     
                    </div>                
            
        );
    }
}

export default DealRating