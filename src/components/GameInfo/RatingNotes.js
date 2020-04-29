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
                  <DealRating dealId = {props.dealId} />
                  <Note note = {props.deals} />
             </div>  
        );
    }

    
    export default RatingNotes