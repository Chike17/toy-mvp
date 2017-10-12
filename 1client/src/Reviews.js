import React from 'react';
import styles from './styles.css';

var Reviews = (props) => {
  return (
    <div className = {styles.reviewContainer} >

      {props.eachReview.map((review) => 

      <div className = {styles.reviewEntry}>

      <div className = {styles.workerpicture} > 

        <div> Picture </div>

      </div>

        <div className = {styles.workerdata}>

      	  <div > First Name: {review.FirstName} </div> 

          <div > Last Name: {review.LastName} </div> 

      	   <div> Rating: {review.Rating} </div>

      	   <div> Category: {review.Category} </div>

      	   <div> Location: {review.Location} </div>

      	   <div> Review: {review.Review} </div>


         </div>


       </div>

      )}

   </div>

  );
};

module.exports = Reviews;