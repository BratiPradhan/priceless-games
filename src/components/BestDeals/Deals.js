import React, {Component} from 'react';
import axios from 'axios';
import DealCard from './DealCard'

class Deals extends Component {
    constructor(props){
        super(props);
        this.state = {
            deals: [],
            isLoading: false
        }
    }

    componentDidMount = () => {
        this.getDeals();
    }

    getDeals = () => {
        this.setState({isLoading: true}, () => {
            axios.get('https://www.cheapshark.com/api/1.0/deals?pageSize=20')
            .then(res => res.data)
            .then(data => {
                const deals = data;
                this.setState({
                    isLoading: false,
                    deals
                })
            })
        })
        
    }

    render(){
        const { deals, isLoading } = this.state;
        return(
            <div className="game-list-rows">            
                {isLoading
                    ? "loading"
                    : deals.map((deal, i) => <DealCard key={i} {...deal} />)
                }
            </div>
        )
    }
}

export default Deals