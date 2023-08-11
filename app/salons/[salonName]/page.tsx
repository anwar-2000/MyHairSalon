import { fetchSalonByName } from '@/utils/salonHelpers'
import React from 'react'
import classes from "@/styles/pages/salon.module.css"
import Image from 'next/image'

interface Props {}

export default async function Page({ params }: { params: { salonName: string } }) {
    const salon = await fetchSalonByName(params.salonName)
    //console.log(salon['salons']);

  return <div className={classes.main__container}>
          <div className={classes.image__salon}>
                <Image src={salon[0]?.image} alt='' fill />
          </div>
          <div className={classes.infos}>
                <h1>{salon[0]?.name}</h1>
                <small>{salon[0]?.description}</small>
                <small>{salon[0]?.address}</small><small>{salon[0]?.place}-{salon[0]?.country}</small>
          </div>
          <div className={classes.haircuts__artists}>
                  <div className={classes.artists}>
                  <h1>Artists</h1>
                    {
                      salon[0]?.artists.map((artist:any,index:number)=>(
                          <h5 key={index}>{artist.name} - {artist.price}€</h5>
                      ))
                    }
                  </div>
                  <div className={classes.haircuts}>
                    <h1>HairCuts</h1>
                    {
                      salon[0]?.haircuts.map((haircut:any,index:number)=>(
                          <h5 key={index}>{haircut.name} - {haircut.price}€</h5>
                      ))
                    }
                  </div>
          </div>
          <div className={classes.appintments}>
                    <button>
                      MAKE AN APPOINTMENT
                    </button>
          </div>
  </div>
}