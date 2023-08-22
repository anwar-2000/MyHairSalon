'use client'

import React from 'react';
import classes from '@/styles/rating.module.css';
import {LiaStarSolid} from "react-icons/lia"

interface RatingProps {
  value: number;
  onChange: (newValue: number) => void;
}

const Rating: React.FC<RatingProps> = ({ value, onChange }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
          <LiaStarSolid  key={i}  color={'yellow'} size={20}  onClick={() => onChange(i)} />
      );
    }
    return stars;
  };

  return <div className={classes.rating}>{renderStars()}</div>;
};

export default Rating;
