import React, {Component} from 'react';
import SearchResult from './SearchResult';

const SearchList = (props) => {
    return(
        <div>
            {
            props.games.map(game => 
                <SearchResult
                    key={game.gameID}
                    gameID={game.gameID}
                    img={game.thumb} 
                />
                )
            }
        </div>
    )
}

export default SearchList;