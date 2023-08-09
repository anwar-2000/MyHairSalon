import { getCurrentUser } from '@/utils/session'
import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'

import classes from "@/styles/pages/profile.module.css"
import MyArtists from '@/Components/MyArtists'
import { fetchUser } from '@/utils/userHelpers'
import PersonalInfo from '@/Components/PersonalInfo'
import LogOutButton from '@/Components/UI/LogOutButton'


interface Props {}

const Index = async () => {
  const session = await getCurrentUser();
  if(!session){
      redirect('/login');
  }
  const user = await fetchUser(session?.user?.email!);
  //console.log(user)
  //const salonName = "Salon Name"; // Replace later with the actual salon name from DB if he has a salon

  return <div className={classes.profile__container}>
      <div className="infos">
        <Suspense fallback={<p>Loading feed...</p>}>
          <small>{user[0].username} | {user[0].role} | {user[0].role === "salonOwner" &&  "Salon name if he have" }</small>
          <h1>{user[0].email}</h1>
        </Suspense>
    </div>
    <div className={classes.mysalon__container}>
          <div className={classes.choices}>
                <ul>
                  <li>Personal Infos</li>
                  <li>MY Salon</li>
                  <li>MY Artists</li>
                  <li>MY Appoitments</li>
                </ul>
          </div>
          <div className={classes.main__container}>
          <PersonalInfo username={user[0].username} email={user[0].email} role={user[0].role} />
          {/*<MyArtists />*/}
          </div>
          
    </div>
       <LogOutButton />
    </div>
}

export default Index