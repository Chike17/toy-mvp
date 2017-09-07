import React from 'react';
import styles from './styles.css';

var Reviews = (props) => {
  return (
    <div className = {styles.reviewContainer} >

      {props.eachReview.map((review) => 




      <div className = {styles.reviewEntry}>

        <div>

      	  <div > First Name: {review.FirstName} </div> 


          <div > Last Name: {review.LastName} </div> 

      	 	

      	   <div> Rating: {review.Rating} </div>

      	 
      	   <div> Category: {review.Category} </div>

      	 </div>

      	 
          <div>

      	    <div> Location: {review.Location} </div>

      	  </div>

         
          <div>

      	     <div> Review: {review.Review} </div>

      	   </div>

       </div>





      )}

   </div>

  );
};

module.exports = Reviews;