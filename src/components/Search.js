import React, {Component} from 'react'
import SearchList from './SearchList'
import './Search.css'
import axios from 'axios';


class Search extends Component{
  constructor(props){
    super(props);
    this.state = {
      games: []
    }
  }

  getGames = (input) => {
    axios.get(`https://www.cheapshark.com/api/1.0/games?title=${input}&limit=5&exact=3`)
    .then(response => response.data )
    .then(data => {
      const games = data;
      this.setState({ games })
    });
  }
  
  render(){
    return(
      <div>
        <input 
          type="text"
          placeholder="Look for a game"
          id="main-search"
          name="search"
          onChange={(event) => {
            const input = event.target;
            this.getGames(input.value)
          }}
        />
        
        <SearchList games={this.state.games} />
      </div>
    )
  }

}

export default Search;