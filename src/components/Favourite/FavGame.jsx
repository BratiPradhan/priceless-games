import React from 'react';

const FavGame = ({id, title, price, removeFav}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{price}</p>
            <button onClick={() => removeFav(id)}>remove</button>
        </div>
    )
}

export default FavGame