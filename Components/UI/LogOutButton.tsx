"use client"
import React from 'react'
import classes from "@/styles/pages/profile.module.css"
import { signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'

const LogOutButton = () => {
    const handleLogout = () =>{
        signOut()
        redirect('/login')
    }
  return <button className={classes.logout} onClick={handleLogout}>Log Out</button>
}

export default LogOutButton