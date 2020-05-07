import React from 'react'
import Search from "./Search/Search"
import logo from '../imgs/logo.svg'
import { FaHeart } from 'react-icons/fa'

const Home = () => {
    return(
        <div className="home">
            <section className="banner">
                <div className="container banner-container">
                    <div className='banner-elem'>
                        <div className="banner-text">
                            <h1>Find your game at the best price</h1>
                            <p>Search between 25+ game platform, including Steam and Origin.</p>
                            <Search />
                        </div>
                    </div>
                    <div className="banner-elem img-container">
                        <img className='banner-img' src={logo} />
                    </div>
                </div>
            </section>
            <section className="main-content">
                <div className="container">
                    <div className="main-content-section">
                        <div className="col-txt">
                            <div className='main-text'>
                                <h2>Games are too expensive, right ?</h2>
                                <p> With priceless games, this is no longer a problem!</p>
                                <br />
                                <p> Find the best price for your favourite game between 25+ different sales platforms</p>
                            </div>
                        </div>
                        <div className="col-img main-img-1">

                        </div>
                    </div>
                    <div className="main-content-section">
                        <div className="col-img main-img-2">

                        </div>
                        <div className="col-txt main-text">
                            <h2>Be notified when a price drop !</h2>
                            <p>Price are changing every day. No longer miss a price drop with our notification system.</p>
                            <br />
                            <p>Flag a game and be notified when the price drop on a pltaform</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="business">
                <div className="container">
                    
                </div>
            </section>
            <footer>
                <p>A <a href='https://www.wildcodeschool.com/fr-FR'>WildCodeSchool</a> project made with <FaHeart/> by Basile Raiwet - Vladyslav Zubov - Tiekoura Doumbia</p>
            </footer>
        </div>
    )
}

export default Home