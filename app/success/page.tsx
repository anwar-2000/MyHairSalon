"use client"

import { updateSalon } from '@/utils/salonHelpers';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'

interface Props {}

const page = () => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const user = searchParams.get('user');
  useEffect(() => {
    const updateSalonHandler = async () =>{
        let salon = await updateSalon(user!,{
          subscription : "active"
        })
       salon && alert('You Are Online ! ')
    } 
   user && updateSalonHandler()
  }, [user])
  
 // console.log(user)
  return <div>
    <button onClick={()=>router.push('/profile')}>GO TO PROFILE</button>
  </div>
}

export default page