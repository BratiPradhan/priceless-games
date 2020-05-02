import React from 'react'
import DealRating from './DealRating';
import Note from './Note';

const theBoxe= {
    width: "300px",
    marginLeft: "100px",
    marginTop: "250px"

}


const RatingNotes = (props) => { 
     return(

          <div style={theBoxe}>
               <DealRating price={props.dealId} />
               <Note dealId={props.dealId} />
          </div>  
     );
}

    
export default RatingNotes