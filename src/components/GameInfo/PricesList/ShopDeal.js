import React, { Component } from 'react'
import axios from 'axios'

class ShopDeal extends Component{
    constructor(props){
        super(props);
        this.state = {
            stores: []
        }
    }

    componentDidMount = () => {
        this.getStore();
    }

    getStore = () => {
        axios.get("https://www.cheapshark.com/api/1.0/stores")
            .then(res => res.data)
            .then(data => {
                const stores = data;
                this.setState({stores})
            })
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