import React from 'react';
import FavGame from './FavGame'
import './FavList.css'
import logo from '../../imgs/logo-fav.svg'

const FavList = ({removeFav, favGames}) => {
    
    return(
        <>
            <section className="banner">
                <div className="container banner-container">
                    <div className='banner-elem'>
                        <div className="banner-text">
                            <h1>Follow your favourite games</h1>
                            <p>Be notified when the price of one of your favourite game drop !</p>
                        </div>
                    </div>
                    <div className="banner-elem img-container">
                        <img className='banner-img' src={logo} />
                    </div>
                </div>
            </section>
            <div className='container'>
                <div className='fav-list'>
                    {favGames.map(game => <FavGame key={game.id} removeFav={removeFav}  {...game} />)}
                </div>
            </div>
         </>
    )
}

export default FavList;