"use client"

import { updateSalon } from '@/utils/salonHelpers';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'

interface Props {}

const page = () => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const user = searchParams.get('user');
  //console.log(user)
  useEffect(() => {
    const updateSalonHandler = async () =>{
        let salon = await updateSalon(user!,{
          subscription : "active"
        })
      //console.log(salon)
      salon && alert('You Are Online ! ')
    } 
   user && updateSalonHandler()
  }, [user])
  
 // console.log(user)
  return <div>
    <button onClick={()=>router.push('/profile')} style={{background : "none", color : "black" , border : "solid 1px black",padding : "0.6rem"}}>GO TO PROFILE</button>
  </div>
}

export default page