import React from 'react'
import classes from "@/styles/searchwithLocation.module.css"
import {MdGpsFixed} from "react-icons/md"
import SalonCard from './UI/SalonCard'
import { fetchSalons } from '@/utils/salonHelpers'

interface Props {}

const SearchSalonsWithLocations = async () => {
   /**
    * 
    * GETTING THE CITY NAME USING GEO LOCALISATION API OF GOOGLE REQUIIER PAYMENTS ... i'll pay once i can get money from this project , then implement it
    *  */ 
    const salons = await fetchSalons();


  return <div className={classes.searchLocation__container}>
    <div className={classes.input__container}>
         <input placeholder='place ...'/>
         <MdGpsFixed color='black' size={25} />
    </div>

        <div className={classes.items}>
         {salons && salons.map((salon : any, index : number) => (
                 <SalonCard salon={salon} key={index} />
         ))}
        </div>

  </div>
}

export default SearchSalonsWithLocations