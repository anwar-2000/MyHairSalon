"use client"
import React from 'react'
import classes from "@/styles/profileMain.module.css"
import PersonalInfo from './PersonalInfo'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import MyArtists from './MyArtists';
import { changeProfileChoice } from '@/redux/features/ProfileChoicesSlice';
import SalonInfo from './SalonInfo';
import ApointmentsProfile from './ApointmentsProfile';



interface Props {}

const ProfileMain = ({user , salon } : any) => {
    const choice = useAppSelector((state) => state.ProfileChoicesReducer.value);
    //console.log(choice)
    const dispatch = useAppDispatch();
  return  <div className={classes.mysalon__container}>
  <div className={classes.choices}>
  <ul>
  <li onClick={() => dispatch(changeProfileChoice("personal Info"))}>Mes Infos</li>
  <li onClick={() => dispatch(changeProfileChoice("my Salon"))}>Mon Salon</li>
  <li onClick={() => dispatch(changeProfileChoice("my Artists"))}>Mes Artistes</li>
  <li onClick={() => dispatch(changeProfileChoice("my Appointments"))}>Mes RDV</li>
</ul>

  </div>
  <div className={classes.main__container}>

  { choice === "personal Info" && <PersonalInfo username={user[0]?.username} email={user[0]?.email} role={user[0]?.role} />}
  { choice === "my Salon" && <>
      <SalonInfo address={salon?.address} name={salon?.name} description={salon?.description} owner={user[0].email} country={salon?.country} place={salon?.place} image={salon?.image} haircuts={salon?.haircuts} weekends={salon?.weekends} closedDays={salon?.closedDays} openDays={salon?.openDays} />
  </> }
  {choice === "my Artists" &&  <MyArtists owner={user[0]?.email} artists={salon?.artists}/> }
   {/**@ts-ignore */}
  { choice === "my Appointments" && <ApointmentsProfile salon={salon?.name} /> }
  
  </div>
  
</div>
}

export default ProfileMain