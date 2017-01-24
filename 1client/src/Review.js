import React from 'react'
import Reviews from './Reviews.js'

var Review = (props) => {
 return (
   <div>
   <form >
        <span>
        <label>
          Business Name -:
          <input />
        </label>
        </span>

         <span>
        <label>
          Location -:
          <input />
        </label>
        </span>

        <div> - </div>

    </form>

    <Reviews eachReview =  {props.reviews}/> 
   </div>
 	)
}

module.exports = Review;