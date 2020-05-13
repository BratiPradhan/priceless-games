import React from 'react';


const SortedPrice = ({handleSorted} ) => {
    return(
        <div>
             <select onChange={handleSorted}>
                    <option value="relevance">Pertinent</option>
                    <option value="cheapest">Price</option>
                 
                </select>  
        </div>
    )
}
export default SortedPrice;