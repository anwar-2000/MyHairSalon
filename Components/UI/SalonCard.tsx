import React from 'react'
import classes from "@/styles/salonCard.module.css"
interface Props {}

const SalonCard = () => {
  return <div className={classes.salonCard__container}>
        <div className="image">
                <p>IMG</p>
        </div>
        <div className={classes.infos}>
            <h1>Salon Homme</h1>
            <div className={classes.details}>
              <p>5 Artists</p>
              <p>20 Haircuts</p>
              <p>15 Reviews</p>
            </div>
        </div>
  </div>
}

export default SalonCard