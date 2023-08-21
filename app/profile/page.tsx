import { getCurrentUser } from '@/utils/session'
import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'
import classes from "@/styles/pages/profile.module.css"
import LogOutButton from '@/Components/UI/LogOutButton'
import ProfileMain from '@/Components/ProfileMain'
import SalonModel from '@/models/SalonModel'
import { createMongoConnection } from '@/database/Conn'
import UserModel from '@/models/UserModel'
import Link from 'next/link'
import Head from 'next/head'

export const dynamic = 'force-dynamic'


const Index = async () => {
  const session = await getCurrentUser();
  if(!session){
      redirect('/login');
  }
  const user = await fetchMyInfos(session?.user?.email!);
  let salon = null;
  if(user[0].role === "salonOwner"){
      salon = await fetchMySalon(user[0].email);
  }

  return <>
  <div className={classes.profile__container}>
      <div className={classes.infos}>
        <Suspense fallback={<p>Loading Infos ...%</p>}>
          <small>{user[0].username} | {user[0].role} | {salon && salon[0] ? salon[0]?.name : 'No Salon'} </small>
          <h1>{user[0].email}</h1>
          {user[0].role === "salonOwner" ? 
    (salon && salon[0] ? 
        (salon[0].subscription === "inactive" ? 
            <Link href={`/payments?user=${session.user?.email}`} style={{textAlign : "center",color : "red", textDecoration : "underline"}}>Votre Salon n'est pas actif ❌</Link> 
            : <p style={{color : "green"}}>Salon En Ligne ✅</p>) 
        : <p style={{color : "green"}}>Créez votre Salon</p>)
    : <p style={{color : "red"}}>Vous ne pouvez pas créer un salon</p>}
        </Suspense>
    </div>
    <LogOutButton />
    <ProfileMain user={user} salon={salon && salon[0] ? salon[0] : null}/> 
    </div>
    </>
}
export default Index


const fetchMyInfos = async (user : string) => {
  createMongoConnection() //establishing connection to db
  const userEmail = decodeURIComponent(user)
  let me = await UserModel.find({ email: userEmail });
  if(!me){
    return []
  }
  // Convert each document to a plain JavaScript object
  me = me.map(doc => {
    const docObject = doc.toObject();
    // Remove the properties that are causing issues
    delete docObject._id;
    return docObject;
  });
  return me;
}

const fetchMySalon = async (owner : string) => {
  createMongoConnection() //establishing connection to db
  const ownerEmail = decodeURIComponent(owner)
  let salon = await SalonModel.find({ owner: ownerEmail });
  if(!salon){
    return []
  }
  // Convert each document to a plain JavaScript object
  salon = salon.map(doc => {
    const docObject = doc.toObject();
    // Remove the properties that are causing issues
    delete docObject._id;
    return docObject;
  });
  return salon;
}

