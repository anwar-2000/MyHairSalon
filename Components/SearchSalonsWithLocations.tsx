
import React from 'react'
import classes from "@/styles/searchwithLocation.module.css"
import {MdGpsFixed} from "react-icons/md"
import SalonCard from './UI/SalonCard'

interface Props {}

const SearchSalonsWithLocations = () => {
   /**
    * 
    * GETTING THE CITY NAME USING GEO LOCALISATION API OF GOOGLE REQUIIER PAYMENTS ... i'll pay once i can get money from this project , then implement it
    *  */ 
    
  return <div className={classes.searchLocation__container}>
    <div className={classes.input__container}>
         <input placeholder='place ...'/>
        <MdGpsFixed color='black' size={25} />
    </div>

        <div className={classes.items}>
         {Array.from({ length: 10 }).map((_, index) => (
                 <SalonCard key={index} />
         ))}
        </div>

  </div>
}

export default SearchSalonsWithLocations