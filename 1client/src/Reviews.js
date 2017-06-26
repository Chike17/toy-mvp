import React from 'react';
import styles from './styles.css';

var Reviews = (props) => {
  return (
    <div className = {styles.reviewContainer} >

      {props.eachReview.map((review) => 
      <div className = {styles.reviewEntry}>

      	 <div >Name: {review.name} </div> 
      	 	

      	 <div> Rating: {review.rating} </div>
      	 
      	 	
      	 <div> Location: {review.location} </div>


      	 <div> Category: {review.category} </div>


      	 <div> Review: {review.review} </div>


       </div>
      )}

   </div>

  );
};

module.exports = Reviews;