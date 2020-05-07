import React from 'react'
import Search from "./Search/Search"

const Home = () => {
    return(
        <div className="home">
            <section className="banner">
                <div className="container">
                    <div className='banner-elem'>
                        <div className="banner-text">
                            <h1>Find your game at the best price</h1>
                            <Search />
                        </div>
                    </div>
                    <div className="banner-elem">

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home