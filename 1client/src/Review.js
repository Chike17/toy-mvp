import React from 'react';
import Reviews from './Reviews.js';
import styles from './styles.css';
//should call this component input
var Review = ({category, location, inputBusiness, inputLocation, reviews, getBizLoc}) => {
  return (
   <div >
   <div>

   <form onSubmit = { getBizLoc } >
   <div className = {styles.bizinput}>
        <label>
          Business Name :
          <input onChange = {inputBusiness} />
        </label>
    </div>
  
    <div className = {styles.locinput} >
        <label >
          Location :
          <input onChange = {inputLocation} />
        </label>
      
     </div>
     
      <input type = 'submit' value = 'Search' className = {styles.submit} />
     
    </form>
    </div>

    <div className = {styles.catcontainer}>
    <div className = {styles.categories}> {category} | {location} </div>
    </div>

    <Reviews eachReview = {reviews} /> 
   </div>
  );
};

module.exports = Review;