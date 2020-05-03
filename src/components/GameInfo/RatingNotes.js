import React from 'react'
import DealRating from './DealRating';
import Note from './Note';

const theBoxe= {
    width: "300px",
    marginLeft: "100px",
    marginTop: "250px"
}

const RatingNotes = ({dealId}) => { 
   

        return(
             <div style={theBoxe}>
                  <DealRating dealId = {dealId} />
                  <Note dealId = {dealId} />
             </div>  
        );
    }

    
export default RatingNotes