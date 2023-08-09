import { getCurrentUser } from '@/utils/session'
import { redirect } from 'next/navigation'
import React from 'react'

interface Props {}

const Index = async () => {

  const session = await getCurrentUser();
  if(!session){
      redirect('/login');
  }

  return <div>{session?.user?.email}</div>
}

export default Index