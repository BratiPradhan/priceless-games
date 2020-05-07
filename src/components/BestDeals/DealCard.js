import React from 'react';
import { Link } from 'react-router-dom';
import ShopDeal from '../GameInfo/PricesList/ShopDeal';
import StoreInfos from './StoreInfos'

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
                    <StoreInfos storeID={storeID}/>
                </div>
                    <div style={{display: "flex",justifyContent: "justify-content", flexDirection:"row"}}>
                        <div className="game-savings">
                            <p>
                                -{Math.round(savings)}%
                            </p>
                        </div>
                        <div className="game-price" style={{flexDirection:"column"}}>
                            <p style={{ textDecorationLine: 'line-through' }}>{normalPrice} $</p>
                            <p>{salePrice} $</p>
                        </div>
                    </div>
            </div>
        </a>
    )
}

export default DealCard;