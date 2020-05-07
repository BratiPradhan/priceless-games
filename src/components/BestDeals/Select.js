import React from 'react';
import axios from 'axios';

const selectDeals = ["" , "prix" , "nouveau" , "note"];

class Select extends Component{
  state = {
    deals: [],
    filter: ""
  }

  componentDidMOunt (){
    this.getDeals();
  }
  getDeals = () => {
    axios
      .get('https://www.cheapshark.com/api/1.0/deals?pageSize=20&sortBy')
      .then(res => res.data)
      .then(data => {
      this.setState({ deals: data.deals });
    });
  };
    
  handleFilterChange = event => {
    this.setState({
      filter: event.target.value
    });
  };
    
  render(){
    const { deals, filter } = this.state;
    const filteredDeals = deals
    .filter(deal => !filter || deal.select === filter);
    return(
      <div>
        <select onChange={this.handleFilterChange}>
          {selectDeals.map(select => (
          <option value={select}>{select}</option>
          ))}
        </select>
        <Deals deals={filteredDeals} />

      </div>
    );
  }
}
export default Select;