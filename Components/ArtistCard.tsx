import React from 'react'
import classes from "@/styles/artistCard.module.css"

interface Props {
  artist: {
    name: string;
    price: number;
  };
  onDelete: () => void;
}

const ArtistCard: React.FC<Props> = ({ artist, onDelete }) => {
  return (
    <div className={classes.artistCard__container}>
      <div className="image">{artist.name}</div>
      <div className="infos">
        <h4>{artist.price} €</h4>
      </div>
      <button onClick={onDelete} style={{background : "none", color : "red", border : "none"}}>Suppr</button>
    </div>
  );
};


export default ArtistCard