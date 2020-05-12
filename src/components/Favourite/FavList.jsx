import React from 'react';
import FavGame from './FavGame'
import './FavList.css'

const FavList = () => {
    
    let favArr = [];
    for(let i = 0; i < localStorage.length; i++){
        let game = JSON.parse(localStorage.getItem(localStorage.key(i)))
        favArr.push(game)
    }

    console.log(favArr);
    
    return(
        <div className='container'>
            <div className='fav-list'>
                {favArr.map(game => <FavGame {...game} />)}
            </div>
        </div>
    )
}

export default FavList;