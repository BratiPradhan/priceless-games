import React from 'react'
import DealRating from './DealRating';
import Note from './Note';

const theBoxe= {
    width: "300px",
    marginLeft: "100px",
    marginTop: "250px"

}


const RatingNotes = (props) => {     
console.log("je suis dans rating notes",  props.gameid)

        return(

             <div style={theBoxe}>
                  <DealRating gameid={props.gameid} />
                  <Note note={props.gameid} />
             </div>  
        );
    }

    
    export default RatingNotes