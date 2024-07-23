import React, { useState } from 'react';
import './StarRating.css';

const StarRating = ({ count = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    console.log(`Star clicked: ${index + 1}`);
    setRating(index + 1);
  };

  return (
    <div className="star-rating">
      {[...Array(count)].map((_, index) => (
        <i
          key={index}
          className={`fa-star ${index < rating ? 'fas' : 'far'}`}
          onClick={() => handleRating(index)}
          style={{
            cursor: 'pointer',
            color: 'gold',
            fontSize: '2rem',
            margin: '0 5px',
          }}
        >
            
        </i>
      ))}
      <div>Rating: {rating}</div>
    </div>
  );
};

export default StarRating;
