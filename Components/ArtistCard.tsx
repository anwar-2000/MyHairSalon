import React from 'react'
import classes from "@/styles/artistCard.module.css"

interface Props {}

const ArtistCard = () => {
  return <div className={classes.artistCard__container}>
        <div className='image'>
            IMG
        </div>
        <div className='infos'>
            <h3>John Doe</h3>
        </div>
  </div>
}

export default ArtistCard