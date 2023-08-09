import React from 'react'
import classes from "@/styles/myArtists.module.css"
import ArtistCard from './ArtistCard'

interface Props {}

const MyArtists = () => {
  return <div className={classes.artists__container}>
            {Array.from({ length: 5 }).map((_, index) => (
                 <ArtistCard key={index} />
         ))}
  </div>
}

export default MyArtists