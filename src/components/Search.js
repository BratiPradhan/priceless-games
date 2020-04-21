import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import SearchList from './SearchList'
import './Search.css'
import axios from 'axios';


class Search extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: '',
      games: []
    }
  }

  getGames = (input) => {
    axios.get(`https://www.cheapshark.com/api/1.0/games?title=${input}&limit=5`)
    .then(response => response.data )
    .then(data => {
      const games = data;
      this.setState({ games })
    });
  }

  handleSearch = () => {
    
  }
  
  render(){
    const { games } = this.state;
    return(
      <div>
        <Link to={`/search/${this.state.value}`}>rechercher</Link>
        <input 
          type="text"
          placeholder="Look for a game"
          autoComplete="off"
          id="main-search"
          name="search"
          value={this.state.value}
          onChange={(event) => {
            const input = event.target;
            this.setState({value : input.value})
            this.getGames(input.value)
          }}
          onKeyUp={(e) => {
            if(e.keyCode === 13){
              this.handleSearch()
            }
          }}
        />
        
        <SearchList games={games} />
      </div>
    )
  }

}

export default Search;