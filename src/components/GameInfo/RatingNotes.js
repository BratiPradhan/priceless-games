import React from 'react'
import DealRating from './DealRating';
import Note from './Note';

const theBoxe= {
    width: "300px",
    marginLeft: "100px",
    marginTop: "250px"
}

const RatingNotes = ({dealID}) => { 

        return(
             <div style={theBoxe}>
                  <DealRating dealID={dealID} />
                  <Note dealID={dealID} />
             </div>  
        );
    }

    
export default RatingNotes