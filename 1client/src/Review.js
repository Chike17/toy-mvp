import React from 'react';
import Reviews from './Reviews.js';
import styles from './styles.css';
//should call this component input
var Review = ({inputBusiness, inputLocation, reviews}) => {
  return (
   <div >
   <div>

   <form >
   <div className = {styles.inputs}>
        <label>
          Business Name :
          <input onChange = {inputBusiness} />
        </label>
    </div>
  </form>

  <form>
    <div className = {styles.inputs} >
        <label >
          Location :
          <input onChange = {inputLocation} />
        </label>
    </div>

    </form>
    </div>

    <Reviews eachReview = {reviews} /> 
   </div>
  );
};

module.exports = Review;