import React, {Component} from 'react'

const noteStyle= {
    width: "300px",
    marginLeft: "120px",
    marginTop:"230px"
 
}

const source= {
    listStyle: "none"
}

const sourceOne= {
    marginTop: "50px",
    marginLeft: "30px"
}
const sourceTwo= {
    marginTop: "20px",
    marginLeft: "30px"
}
const sourceTree= {
    marginTop: "20px",
    marginLeft: "30px"
}
const sourceFour= {
    marginTop: "20px",
    marginLeft: "30px"
}
const sourceFive= {
    marginTop: "20px",
    marginLeft: "30px"
}


const PriceList =(props) => {
  
        return(

                <div style={noteStyle}>
                        <ul style={source}>
                                <li style={sourceOne}> {props.price} $ </li> 
                                <li style={sourceTwo}>Source................Prix</li>
                                <li style={sourceTree}>Source................Prix</li>
                                <li style={sourceFour}>Source................Prix</li>
                                <li style={sourceFive}>Source................Prix</li>  
                        </ul>
                    </div>
        );        
    }    

  

export default PriceList