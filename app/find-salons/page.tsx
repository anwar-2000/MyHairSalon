import SearchSalonsWithLocations from '@/Components/SearchSalonsWithLocations'
import { createMongoConnection } from '@/database/Conn';
import SalonModel from '@/models/SalonModel';
import React from 'react'

const fetchAllSalons = async () => {
  createMongoConnection() //establishing connection to db
  let salons = await SalonModel.find({subscription : "active"});
  if(!salons){
    return [];
  }
  // Convert each salon document to a plain JavaScript object
  salons = salons.map(salon => {
    const salonObject = salon.toObject();
    // Remove the properties that are causing issues
    delete salonObject._id;
    return salonObject;
  });
  //console.log(salons)
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