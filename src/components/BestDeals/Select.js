import React from 'react';

const option = {
  color: '#1a237e',
}

class Select extends React.Component{
    
    
  render(){
  
    return(
      <div className='filter-selector'>
       <select onChange={this.props.handleSelectedFilter}>
          <option style={option} value="Price">Prix</option>
          <option style={option} value="recent">Nouveau</option>
          <option  style={option} value="Metacritic">Note</option>
      </select>
      </div>
    );
  }
}
export default Select;