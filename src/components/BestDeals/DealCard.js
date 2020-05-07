import React from 'react'
import { Link } from 'react-router-dom'
import ShopDeal from '../GameInfo/PricesList/ShopDeal'

const DealCard = ({gameID, thumb, title, salePrice, dealID, savings, storeID, normalPrice}) => {
    const thumbnail = {backgroundImage: `url(${thumb})`}
    return(
        <a 
            className="game-card" 
            href={`https://www.cheapshark.com/redirect?dealID=${dealID}`}
            target='_blank'>
            <span className='card-thumb' style={thumbnail}></span>
            <div className="game-info-container">
                <div className="game-info">
                    <p>{title}</p>
                    <p>{storeID}</p>
                </div>
                    <div style={{display: "flex",justifyContent: "justify-content", flexDirection:"row"}}>
                        <div className="game-savings">
                            <p>
                                -{Math.round(savings)}%
                            </p>
                        </div>
                        <div className="game-price" style={{flexDirection:"column"}}>
                            <p>{normalPrice}</p>
                            <p>{salePrice} $</p>
                        </div>
                    </div>
            </div>
        </a>
    )
}

export default DealCard;