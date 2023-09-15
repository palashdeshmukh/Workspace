import React, { useState } from 'react'; // Import the useState hook
import StarRatings from 'react-star-ratings';

function Fivestar() {
  const [rating, setRating] = useState(5);

  // Function to handle rating changes
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <h2>Workspace Rating</h2>
      <StarRatings
        rating={rating}
        starRatedColor="gold"
        starEmptyColor="gray"
        changeRating={handleRatingChange}
        numberOfStars={5}
        name="rating"
        starDimension="30px"
        starSpacing="5px"
      />
      <p>Current Rating: {rating} stars</p>
    </div>
  );
}

export default Fivestar;
