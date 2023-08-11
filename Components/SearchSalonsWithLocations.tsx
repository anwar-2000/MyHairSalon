"use client"

import React, { useState, useEffect } from 'react';
import classes from "@/styles/searchwithLocation.module.css";
import { MdGpsFixed } from "react-icons/md";
import SalonCard from './UI/SalonCard';

interface Props {
  salons : any[]
}
const SearchSalonsWithLocations:React.FC<Props> = ({salons}) => {
  const [filteredSalons, setSalons] = useState(salons);
  //console.log(filteredSalons)
  

  return (
    <div className={classes.searchLocation__container}>
      <div className={classes.input__container}>
        <input placeholder="place ..." />
        <MdGpsFixed color="black" size={25} />
      </div>

      <div className={classes.items}>
        {filteredSalons.map((salon: any, index: number) => (
          <SalonCard salon={salon} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SearchSalonsWithLocations;
