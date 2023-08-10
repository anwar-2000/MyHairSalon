import React from 'react'
import classes from "@/styles/artistCard.module.css"

interface Props {
  artist : {
    name : string;
    price : number;
  }
}

const ArtistCard:React.FC<Props> = ({artist}) => {
  return <div className={classes.artistCard__container}>
        <div className='image'>
            {artist.name}
        </div>
        <div className='infos'>
            <h4>{artist.price} €</h4>
        </div>
  </div>
}

export default ArtistCard