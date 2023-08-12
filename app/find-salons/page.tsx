import SearchSalonsWithLocations from '@/Components/SearchSalonsWithLocations'
import { createMongoConnection } from '@/database/Conn';
import SalonModel from '@/models/SalonModel';
import React from 'react'

const fetchAllSalons = async () =>{
      createMongoConnection() //establishing connection to db
      const salons = await SalonModel.find({}).lean();
      if(!salons){
        return [];
      }
      //console.log(salons);
      return salons;
}

const Index =  async () => {
      const data = await fetchAllSalons();
      //console.log(data)
  return <div>
    <SearchSalonsWithLocations salons={data} />
  </div>
}

export default Index;