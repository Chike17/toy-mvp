import React from 'react'
import Reviews from './Reviews.js'
//should call this component input
var Review = ({inputBusiness,inputLocation, reviews}) => {
 return (
   <div>
   <form >
        <label>
          Business Name -:
          <input onChange = {inputBusiness} />
        </label>

        <label>
          Location -:
          <input onChange = {inputLocation} />
        </label>

        <div> - </div>
    </form>

    <Reviews eachReview =  {reviews}/> 
   </div>
 	)
}

module.exports = Review;