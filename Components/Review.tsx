"use client"
import React, { useState } from 'react'
import classes from "@/styles/review.module.css"
import { LiaStarSolid } from 'react-icons/lia'
import { Session } from 'next-auth/core/types'


const Review = ({session , salon}:{session:Session; salon :string}) => {
  const [text, setText] = useState('');
  const [stars, setStars] = useState(3);
  const [loading, setLoading] = useState(false);
  const [showReviews, setshowReviews] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    const newReview = {
      salon: salon, 
      reviews: 
        {
          name: session?.user?.email,
          text: text,
          stars: stars
        }
    };
    console.log(newReview)
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReview)
      });
  
      if (response.ok) {
        console.log('Review added successfully');
        // Reset form fields or show a success message
        setText('');
        setStars(3);
      } else {
        console.error('Error adding review');
      }
    } catch (error) {
      console.error('Error adding review:', error);
    }
    setLoading(false)
  };

  
  return  <div className={classes.review__container}>
  <button onClick={()=>setshowReviews(!showReviews)}>LES AVIS</button>
 {showReviews && <form className={classes.inputs} onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Donnez votre avis sur ce salon ..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      required
    />
    <div className={classes.rating}>
      <h4>Combien ils meritent ?</h4>
      <input type="number" defaultValue={3} max={5} min={1} step={1} onChange={(e)=>setStars(parseInt(e.target.value))} />
      <LiaStarSolid   color={'yellow'} size={20}   />
    </div>
    <button type="submit">{ loading ? 'Votre avis est en cours' : 'Je donne mon avis'}</button>
  </form>}
</div>
}

export default Review