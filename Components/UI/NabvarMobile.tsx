"use client"
import React, { useState } from 'react'
import classes from "@/styles/navbarmobile.module.css"
import {BiMenuAltRight} from "react-icons/bi"
import Link from "next/link";


const NabvarMobile = ({session} : any) => {
    //console.log(session)
  const [showNav, setshowNav] = useState(false)
  return <div className={classes.navbarmobile__container}>
        <div className={classes.main}>
            <BiMenuAltRight color='#535353' size={21} onClick={()=>setshowNav(!showNav)}/>
        </div>
       
       {showNav && <ul>
            <li onClick={()=>setshowNav(!showNav)}><Link href="/">HOME</Link></li>
            <li  onClick={()=>setshowNav(!showNav)} ><Link href="/find-salons">Trouver des salons</Link></li>
            {session ? <li onClick={()=>setshowNav(!showNav)} ><Link href="/profile">Mon profile</Link></li> : <li onClick={()=>setshowNav(!showNav)}><Link href="/login">LOGIN</Link></li> }
            <li onClick={()=>setshowNav(!showNav)} ><Link href="/create-account">Créer un compte</Link></li>
            <li onClick={()=>setshowNav(!showNav)} ><Link href="/">À propos de nous</Link></li>
          </ul>}
  </div>
}

export default NabvarMobile