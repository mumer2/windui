import React from 'react'
import StarRating from './StarRating'
import Stars from './Stars'

export const Rating = () => {
  return (
    <div>
        <div className="ratings">
            <h1> Rating
            </h1>
            <p>The ratings component allows users to view and/or set a star rating for a product or a service.</p>
        <div className="container-rate">
        <StarRating/>
        </div>
        </div>

        <div className="ratings">
            <h2> Validations
            </h2>
            <h4>Basic</h4>
        <div className="container-rate">
        <Stars/>
        <Stars/>

        </div>
        </div>
        
    </div>
  )
}
