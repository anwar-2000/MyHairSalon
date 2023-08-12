import { getCurrentUser } from '@/utils/session'
import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'
import classes from "@/styles/pages/profile.module.css"
import LogOutButton from '@/Components/UI/LogOutButton'
import ProfileMain from '@/Components/ProfileMain'
import SalonModel from '@/models/SalonModel'
import { createMongoConnection } from '@/database/Conn'
import UserModel from '@/models/UserModel'



const Index = async () => {
  const session = await getCurrentUser();
  if(!session){
      redirect('/login');
  }
  const user = await fetchMyInfos(session?.user?.email!);
  //console.log(user)
  let salon = null;
  if(user[0].role === "salonOwner"){
      salon = await fetchMySalon(user[0].email);

  return <div className={classes.profile__container}>
      <div className="infos">
        <Suspense fallback={<p>Loading feed...</p>}>
          <small>{user[0].username} | {user[0].role} | {salon[0]?.name}</small>
          <h1>{user[0].email}</h1>
        </Suspense>
    </div>
    <LogOutButton />
    <ProfileMain user={user} salon={salon[0]}/> 
    </div>
}
}
export default Index


const fetchMyInfos = async (user : string)  =>{
  createMongoConnection() //establishing connection to db
  const userEmail = decodeURIComponent(user)
  const me = await UserModel.find({ email: userEmail }).lean();
  if(!me){
    return []
  }
  return me;
}




const fetchMySalon = async (owner : string)  =>{
  createMongoConnection() //establishing connection to db
  const ownerEmail = decodeURIComponent(owner)
  const salon = await SalonModel.find({ owner: ownerEmail }).lean();
  if(!salon){
    return []
  }
  return salon;
}
