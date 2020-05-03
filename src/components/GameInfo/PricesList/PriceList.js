import React from 'react'
import ShopDeal from './ShopDeal'

const noteStyle= {
    width: "300px",
    marginLeft: "120px",
    marginTop:"230px"
}

const PriceList = ({deals}) => {
    const dealsList = deals
        return(
            <div style={noteStyle}>
                {dealsList.map(deal => <ShopDeal key={deal.storeID} {...deal} />)}
            </div>
        );        
    }    

  

export default PriceList