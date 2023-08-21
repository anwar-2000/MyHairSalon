
import React from 'react'
import classes from "@/styles/bestsalon.module.css"
import Image from 'next/image'



interface Props {
    name : string;
    url : string;
    location : string;
    reviews : number;
}

const BestSalon:React.FC<Props> = ({name,url,reviews,location}) => {

  return <>
    <h1 style={{textAlign : "center" , fontSize : "1.3rem"}}> &#127881; Le meilleur salon du mois dernier &#127881;</h1>
  <div className={classes.best__container}>
        <div className={classes.image}>
            <Image alt={name} src={url} fill priority/>
        </div>
        <div className={classes.infos__best}>
            <h1>{name}</h1>
            <h4>{location}</h4>
            <small> {reviews} avis</small>
        </div>
  </div>
  </>
}

export default BestSalon