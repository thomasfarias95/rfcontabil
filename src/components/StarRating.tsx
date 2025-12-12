import React, { type JSX } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; 
import styles from "../styles/modules/StarRating.module.css"

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  const stars: JSX.Element[] = [];

  for (let i = 1; i <= maxStars; i++) {
    let starElement: JSX.Element;

    if (rating >= i) {
      
      starElement = <FaStar key={i} className="star-full" />;
    } else {
      
      starElement = <FaRegStar key={i} className="star-empty" />;
    }

    stars.push(starElement);
  }

  return <div className={styles["star-rating"]}>{stars}</div>;
};

export default StarRating;