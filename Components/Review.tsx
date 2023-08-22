import React from 'react'
import classes from "@/styles/review.module.css"
import { Rating } from './Rating'


interface Props {}

const Review = () => {
  return <div className={classes.review__container}>
    <div className={classes.input}>
            <input type="text" placeholder='Donnez votre avis sur ce salon ...' />
            <Rating value={3}/>
    </div>
    <button>Ajouter</button>
  </div>
}

export default Review