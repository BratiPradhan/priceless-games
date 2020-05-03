import React, { Component } from 'react'

class ShopDeal extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const { storeID, dealID, price, savings } = this.props
        return(
            <div>
                <a href={`https://www.cheapshark.com/redirect?dealID=${dealID}`}>
                    {storeID} / {price} / -{savings}%
                </a>
            </div>
        )
    }
}

export default ShopDeal