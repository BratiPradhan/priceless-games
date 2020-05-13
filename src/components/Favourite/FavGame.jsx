import React from 'react';

const FavGame = ({id, title, price, removeFav}) => {
    return (
        <div className='fav-game-card'>
            <div className='fav-game-describe'>
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
            <button className='fav-btn' onClick={() => removeFav(id, title)}>remove</button>
        </div>
    )
}

export default FavGame