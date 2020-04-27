import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="main-nav">
            <Link to="/">Home</Link>
        </nav>
    )
}

export default Navbar