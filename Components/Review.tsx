import React from 'react'
import classes from "@/styles/review.module.css"
import { Rating } from './Rating'


interface Props {}

const Review = () => {
  return <div className={classes.review__container}>
    <div className={classes.inputs}>
            <input type="text" placeholder='Donnez votre avis sur ce salon ...' />
            <div className={classes.rating}>
              <h4>Combien ils meritent ?</h4>
              <Rating value={3} />
            </div>
            
    </div>
    <button>Ajouter</button>
  </div>
}

export default Review