import React from 'react';
import FavGame from './FavGame'
import './FavList.css'

const FavList = ({removeFav, favGames}) => {
    
    return(
        <div className='container'>
            <div className='fav-list'>
                {favGames.map(game => <FavGame removeFav={removeFav}  {...game} />)}
            </div>
        </div>
    )
}

export default FavList;