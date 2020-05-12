import React from 'react';

const FavGame = ({title, deal}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{deal}</p>
        </div>
    )
}

export default FavGame