"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdGpsFixed } from 'react-icons/md';
import SalonCard from './UI/SalonCard';
import classes from '@/styles/searchwithLocation.module.css';

interface Props {
  salons: any[];
}

const SearchSalonsWithLocations: React.FC<Props> = ({ salons }) => {
  const [filteredSalons, setFilteredSalons] = useState(salons);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value.toLowerCase();
    setSearchTerm(searchText);

    const filtered = salons.filter((salon: any) => {
      const nameMatches = salon.name.toLowerCase().includes(searchText);
      const placeMatches = salon.place.toLowerCase().includes(searchText);
      return nameMatches || placeMatches;
    });

    setFilteredSalons(filtered);
  };

  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className={classes.searchLocation__container}>
      <div className={classes.input__container}>
        <input
          placeholder="Recherchez par le nom ou l'emplacement"
          onChange={handleSearch}
          value={searchTerm}
        />
        <MdGpsFixed color="black" size={25} />
      </div>

      <motion.div className={classes.items} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
        {filteredSalons.map((salon: any, index: number) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={animationVariants}
          >
            <SalonCard salon={salon} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SearchSalonsWithLocations;
