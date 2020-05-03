import React, {Component} from 'react';
import axios from 'axios';
import DealCard from './DealCard'

class Deals extends Component {
    constructor(props){
        super(props);
        this.state = {
            deals: []
        }
    }

    componentDidMount = () => {
        this.getDeals();
    }

    getDeals = () => {
        axios.get('https://www.cheapshark.com/api/1.0/deals?pageSize=20')
            .then(res => res.data)
            .then(data => {
                const deals = data;
                this.setState({deals})
            })
    }

    render(){
        const { deals } = this.state;
        return(
            <div className="game-list-rows">
                {deals.map((deal, i) => <DealCard key={i} {...deal} />)}
            </div>
        )
    }
}

export default Deals