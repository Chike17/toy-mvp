import React from 'react'

var Reviews = (props) => {
 return (
   <div>

      {props.eachReview.map((review) => 
         
      	<div >

          
		  	<div>
		  	Name: {review.name}
		  	</div>

		  	<div>
		  	Review: {review.review}
		  	</div>

		  	<div>
		  	Rating: {review.rating}
		  	</div>


		  	<div>
		  	Location: {review.location}

		  	</div>


		  	<div>
		  	 Category: {review.category}

		  	</div>



		  	<div>
              -

		  	</div>


      	</div>
      )}

   </div>








 	)
}

module.exports = Reviews;