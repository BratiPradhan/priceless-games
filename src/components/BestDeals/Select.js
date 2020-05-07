import React from 'react';


class Select extends React.Component{
    
    
  render(){
  
    return(
      <div>
       <select onChange={this.props.handleSelectedFilter}>
          <option value="recent">Nouveau</option>
          <option value="Price">Prix</option>
          <option value="Metacritic">Note</option>
      </select>
      </div>
    );
  }
}
export default Select;