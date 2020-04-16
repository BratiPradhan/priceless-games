import React from 'react';

const SearchList = ({games}) => {
    return(
        <ul>
            {
            games.map(game => <li key={game.gameID}>{game.gameID}</li>)
            }
        </ul>
    )
}

export default SearchList;