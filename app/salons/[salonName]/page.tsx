import React from 'react'
import classes from "@/styles/pages/salon.module.css"
import Image from 'next/image'
import { createMongoConnection } from '@/database/Conn'
import SalonModel from '@/models/SalonModel'
import BookingForm from '@/Components/BookingForm'
import Appointment from '@/models/AppointmentModel'
import { getCurrentUser } from '@/utils/session'
import Link from 'next/link'




export default async function Page({ params }: { params: { salonName: string } }) {
    const session = await getCurrentUser();
    const salon = await fetchSalonByName(params.salonName);
    const appointments = await fetchSalonAppointments(params.salonName)
   // console.log(appointments);

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
                   { session ? 
                    <BookingForm session={session} salonName={salon[0].name} appointments={appointments} artists={salon[0].artists} haircuts={salon[0].haircuts} weekends={salon[0].weekends} closedDays={salon[0].closedDays} openDays={salon[0].openDays}/> : 
                    <Link href="/login" className={classes.link} style={{border : "1px black solid",padding:"0.6rem"}}>LOGIN TO YOUR  ACCOUNT TO BOOK A HAIRCUT</Link>
                    }
  </div>
}



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

const fetchSalonAppointments = async (salonName : string) =>{
  createMongoConnection() //establishing connection to db
  const nameofSalon = decodeURIComponent(salonName) // to get rid of "%20" and other special characters ...
  const appointments = await Appointment.find({salon: nameofSalon }).lean();
  //console.log(appointments)
  if(!appointments) return [];
  return appointments;
}