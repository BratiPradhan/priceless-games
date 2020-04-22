import React, {Component} from 'react';
import SearchResult from './SearchResult';

const SearchList = (props) => {
    return(
        <div className="direct-search-desult">
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