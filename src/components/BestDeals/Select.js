import React from 'react';

const section = {
  marginLeft:'890px',
  marginTop: '40px'
  
}
const option = {
  color: '#1a237e'
}

class Select extends React.Component{
    
    
  render(){
  
    return(
      <div style={section}>
       <select onChange={this.props.handleSelectedFilter}>
         <option style={option} value=""></option>
          <option style={option} value="recent">Nouveau</option>
          <option style={option} value="Price">Prix</option>
          <option  style={option} value="Metacritic">Note</option>
      </select>
      </div>
    );
  }
}
export default Select;