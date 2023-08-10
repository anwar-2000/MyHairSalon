"use client"

import React, { useState, useEffect } from 'react';
import classes from "@/styles/searchwithLocation.module.css";
import { MdGpsFixed } from "react-icons/md";
import SalonCard from './UI/SalonCard';
import { fetchSalons } from '@/utils/salonHelpers';

const SearchSalonsWithLocations = () => {
  const [salons, setSalons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSalons();
      setSalons(data);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.searchLocation__container}>
      <div className={classes.input__container}>
        <input placeholder="place ..." />
        <MdGpsFixed color="black" size={25} />
      </div>

      <div className={classes.items}>
        {salons.map((salon: any, index: number) => (
          <SalonCard salon={salon} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SearchSalonsWithLocations;
