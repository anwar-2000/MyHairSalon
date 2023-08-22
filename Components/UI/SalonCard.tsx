"use client"
import React from 'react'
import classes from "@/styles/salonCard.module.css"
import { useRouter } from 'next/navigation'



const SalonCard = ({salon} : any) => {
  const router = useRouter()
  return <div className={classes.salonCard__container} onClick={()=>router.push(`/salons/${salon.name}`)} >
        <div className="image">
                <img src={salon.image} className={classes.imageEl} />
        </div>
        <div className={classes.infos}>
            <h1>{salon.name}</h1>
            <div className={classes.details}>
              <p>{salon.artists.length} Coiffeurs</p>
              <p>{salon.haircuts.length} Coupes</p>
            </div>
        </div>
  </div>
}

export default SalonCard