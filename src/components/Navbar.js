import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <header className="bg-white">
            <nav className="main-nav container">
                <Link to="/">Search</Link>
                <Link to="/deals">Bests deals</Link>
                <Link to="/new-games">New Games</Link>
            </nav>
        </header>
    )
}

export default Navbar