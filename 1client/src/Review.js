import React from 'react';
import Reviews from './Reviews.js';
import styles from './styles.css';

var Review = ({queryFirstName, queryLastName, category, location, queryCategory, inputLocation, reviews, getBizLoc}) => {
  return (
   <div >
   <div>

   <form onSubmit = { getBizLoc } >

   <div className = {styles.bizinput}>
        <label>
          First Name :
          <input onChange = {queryFirstName} />
        </label>

        <label>
          Last Name :
          <input onChange = {queryLastName} />
        </label>

        <label>
          Category :
          <input onChange = {queryCategory} />
        </label>

        <label >
          Location :
          <input onChange = {inputLocation} />
        </label>

        <label>
          <input type = 'submit' value = 'Search' className = {styles.submit} />
        </label>


    </div>
     
     
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