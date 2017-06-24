import React from 'react';
import styles from './styles.css';

var Reviews = (props) => {
  return (
    <div >

      {props.eachReview.map((review) => 
         
          <p className = {styles.reviewEntry}>

		    <span>Name: {review.name} </span> 
		  

		  	<span> Review: {review.review} </span>
		  	

		  	<span> Rating: {review.rating} </span>
		 
		  	
		  	<span> Location: {review.location} </span>


		  	<span> Category: {review.category} </span>

		  </p>
      )}

   </div>

  );
};

module.exports = Reviews;