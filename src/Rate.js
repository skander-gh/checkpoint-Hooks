import ReactStars from "react-rating-stars-component";
import React from "react";

function Start ({setrate}){
 
const ratingChanged = (newRating) => {
  setrate(newRating);
};
 
return(
    <div>
        <h6>Rating</h6>
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={5}
    activeColor="#ffd700"
  />
  </div>
 
)
}
export  default Start