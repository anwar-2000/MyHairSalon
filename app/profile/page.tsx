import { getCurrentUser } from '@/utils/session'
import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'

import classes from "@/styles/pages/profile.module.css"
import { fetchUser } from '@/utils/userHelpers'
import LogOutButton from '@/Components/UI/LogOutButton'
import ProfileMain from '@/Components/ProfileMain'
import { fetchSalonOwner } from '@/utils/salonHelpers'


const Index = async () => {
  const session = await getCurrentUser();
  if(!session){
      redirect('/login');
  }
  const user = await fetchUser(session?.user?.email!);
  //console.log(user)
  let salon = null;
  if(user[0].role === "salonOwner"){
      salon = await fetchSalonOwner(user[0].email);

  return <div className={classes.profile__container}>
      <div className="infos">
        <Suspense fallback={<p>Loading feed...</p>}>
          <small>{user[0].username} | {user[0].role} | {salon[0].name}</small>
          <h1>{user[0].email}</h1>
        </Suspense>
    </div>
    <LogOutButton />
    <ProfileMain user={user} salon={salon[0]}/> 
    </div>
}
}
export default Index