import React, {Component} from 'react';
import axios from 'axios';
import DealCard from './DealCard'
import LoaderSpin from '../Loader'
import './Deals.css'
import Select from './Select'


class Deals extends Component {
    constructor(props){
        super(props);
        this.state = {
            deals: [],
            isLoading: false, 
            sortBy: 'Price'
        }
    }

    componentDidMount = () => {
        this.getDeals();
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.sortBy !== this.state.sortBy){
            this.getDeals();
        }
       
    }
    handleSelectedFilter = (event) =>{
        console.log(event.target.value)
        this.setState({
            sortBy: event.target.value
        })
        
    }
    getDeals = () => {
        this.setState({isLoading: true}, () => {
            axios.get(`https://www.cheapshark.com/api/1.0/deals?pageSize=20&sortBy=${this.state.sortBy}`)
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
            <div className="deals-container container">
                <h2>Discover the bests deals</h2>
                <Select handleSelectedFilter={this.handleSelectedFilter} />
                <div className="deals-list-rows">          
                    {isLoading
                        ? <LoaderSpin />
                        : deals.map((deal, i) => <DealCard key={i} {...deal} />)
                        }
                </div>
            </div> 
        )
    }
}

export default Deals