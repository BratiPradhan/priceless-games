import React from 'react'

const noteStyle= {
    width: "300px",
    marginLeft: "120px",
    marginTop:"230px"
}

const PriceList = ({deals}) => {
    const dealsList = deals
        return(
            <div style={noteStyle}>
                {dealsList.map(deal => console.log(deal))}
            </div>
        );        
    }    

  

export default PriceList