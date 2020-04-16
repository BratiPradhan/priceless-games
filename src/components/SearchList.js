import React, {Component} from 'react';
import SearchResult from './SearchResult';

const SearchList = (props) => {
    return(
        <ul>
            {
            props.games.map(game => <SearchResult key={game.gameID} gameID={game.gameID} img={game.thumb} />)
            }
        </ul>
        )
}

export default SearchList;