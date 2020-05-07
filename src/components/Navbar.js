import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="main-nav">
            <Link to="/">Search</Link>
            <Link to="/deals">Bests deals</Link>
            <Link to="/new-games">New Games</Link>
        </nav>
    )
}

export default Navbar