import React from 'react';
import FavGame from './FavGame'
import './FavList.css'

const FavList = ({removeFav, favGames}) => {
    
    return(
        <>
        <section className="banner">
                <div className="container banner-container">
                    <div className='banner-elem'>
                        <div className="banner-text">
                            <h1>Find your game at the best price</h1>
                            <p>Search between 25+ game platform, including <span>Steam</span>, <span>Origin</span> and the <span>EpicGameStore</span> .</p>
                            <Search />
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