import React, {Component} from 'react'

const noteStyle= {
    width: "300px",
    marginLeft: "50px"
 
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


class PriceList extends Component {
    render(){
        return(

                <div style={noteStyle}>
                        <ul style={source}>
                                <li style={sourceOne}>Source................Prix</li> 
                                <li style={sourceTwo}>Source................Prix</li>
                                <li style={sourceTree}>Source................Prix</li>
                                <li style={sourceFour}>Source................Prix</li>
                                <li style={sourceFive}>Source................Prix</li>  
                        </ul>
                    </div>
        );        
    }    

}    

export default PriceList