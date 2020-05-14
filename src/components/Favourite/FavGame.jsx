import React from 'react';
import { Link } from 'react-router-dom'

const FavGame = ({id, title, price, game, newPrice, change, removeFav, removeNotif}) => {

    const thumb = game.thumb
    console.log(thumb)
     return (
        <Link 
            className="fav-card" 
            to={{
                pathname: `/game/${id}`,
                state: { game: game }
            }}>
            <span className='fav-thumb' style={{backgroundImage: `url(${thumb})`}} ></span>
            <div className="game-info-container">
                <div className="game-info">
                    <p>{title}</p>
                </div>

                <div className="game-price-card">
                    <div className="game-savings">
                    </div>
                    <div className='fav-prices'>
                        <p>{price} $</p>
                        <p>{newPrice}</p>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default FavGame

/* const test = (
    <div onMouseOver={() => removeNotif(id)} className={ change ? 'fav-game-changed' :'fav-game-card'}>
            <div className='fav-game-describe'>
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
            <button className='fav-btn' onClick={() => removeFav(id, title)}>remove</button>
        </div> 
) */