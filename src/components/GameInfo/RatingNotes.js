import React from 'react'
import DealRating from './DealRating';
import Note from './Note';

const theBoxe= {
    width: "300px",
    marginLeft: "100px",
    marginTop: "250px"

}


const RatingNotes = (props) => {     
console.log("je suis dans rating notes" , props.deals)

        return(

             <div style={theBoxe}>
                  <DealRating gameid={props.deals} />
                  <Note note={props.deals} />
             </div>  
        );
    }

    
    export default RatingNotes