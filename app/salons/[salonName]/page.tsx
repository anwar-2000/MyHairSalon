import React from 'react'
import classes from "@/styles/pages/salon.module.css"
import Image from 'next/image'
import { createMongoConnection } from '@/database/Conn'
import SalonModel from '@/models/SalonModel'
import BookingForm from '@/Components/BookingForm'


const fetchSalonByName = async (salonName : string) =>{
  createMongoConnection() //establishing connection to db
  const nameofSalon = decodeURIComponent(salonName) // to get rid of %20 and other special characters ...
  const salon = await SalonModel.find({ name: nameofSalon }).lean();
 // console.log(salon)
  if(!salon){
    return [];
  }
 // console.log(salon);
  return salon;
}

export default async function Page({ params }: { params: { salonName: string } }) {
   // console.log(params.salonName)
    const salon = await fetchSalonByName(params.salonName)
    console.log(salon);

  return <div className={classes.main__container}>
          <div className={classes.image__salon}>
                <Image src={salon[0]?.image} alt='' fill priority />
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
                    <BookingForm artists={salon[0].artists} weekends={salon[0].weekends} closedDays={salon[0].closedDays} openDays={salon[0].openDays}/>
  </div>
}