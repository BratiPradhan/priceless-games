import React, {Component} from 'react';
import SearchResult from './SearchResult';

const SearchList = (props) => {
    return(
        <div>
            {
            props.games.map(game => 
                <SearchResult
                    key={game.gameID}
                    {...game}
                />
                )
            }
        </div>
    )
}

export default SearchList;