import React from "react";
import {Link} from 'react-router-dom';
import {FaBell} from 'react-icons/fa'

const Navbar = () => {
    return(
        <header className="bg-white">
            <nav className="main-nav container">
                <Link to="/">Search</Link>
                <Link to="/deals">Bests deals</Link>
                <Link to="/new-games">New Games</Link>
                <div className='nav-alert'>
                    <Link to='/'><FaBell /></Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar