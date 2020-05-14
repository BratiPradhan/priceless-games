import React from 'react';
import { Link } from 'react-router-dom'

const FavGame = ({id, title, price, game, newPrice, change, removeFav, removeNotif}) => {

    const thumb = game.thumb
    const saving = Math.round( 100 - (100*(parseFloat(newPrice)/parseFloat(price))))

     return (
         <div className='fav-row'>
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
                        {saving > 0 && <p>-{saving} %</p>}
                    </div>
                    <div className='fav-prices'>
                        {newPrice !== null && <p>{newPrice + ' $'}</p>}
                        <p>{Math.round(price * 100)/100} $</p>
                    </div>
                </div>
            </div>
        </Link>
        <div className='remove-btn' onClick={() => removeFav(id, title)}>
            X
        </div>
        </div>
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