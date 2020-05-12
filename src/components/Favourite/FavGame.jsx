import React from 'react';

const FavGame = ({id, title, deal, removeFav}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{deal}</p>
            <button onClick={() => removeFav(id)}>remove</button>
        </div>
    )
}

export default FavGame