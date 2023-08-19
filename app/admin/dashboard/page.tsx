import React from 'react'
import classes from "@/styles/pages/admin.module.css"
import { createMongoConnection } from '@/database/Conn'
import SalonModel from '@/models/SalonModel'
import User from '@/models/UserModel'
import Appointment from '@/models/AppointmentModel'

interface Props {}

const page = async () => {
  const salons = await fetchAllSalons();
  const users = await fetchAllUsers();
  const appointemnts = await fetchAllAppointments();
  //console.log(salons,users,appointemnts)
  return <div className={classes.admin__container}>
            ADMIN
  </div>
}

export default page

const fetchAllUsers = async () =>{
  createMongoConnection() //establishing connection to db
  const salons = await User.find({}).lean();
  if(!salons){
    return [];
  }
  //console.log(salons);
  return salons;
}

const fetchAllAppointments = async () =>{
  createMongoConnection() //establishing connection to db
  const salons = await Appointment.find({}).lean();
  if(!salons){
    return [];
  }
  //console.log(salons);
  return salons;
}

const fetchAllSalons = async () =>{
  createMongoConnection() //establishing connection to db
  const salons = await SalonModel.find({}).lean();
  if(!salons){
    return [];
  }
  //console.log(salons);
  return salons;
}