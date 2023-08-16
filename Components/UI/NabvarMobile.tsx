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
            <BiMenuAltRight color='black' size={21} onClick={()=>setshowNav(!showNav)}/>
        </div>
       
       {showNav && <ul>
            <li onClick={()=>setshowNav(!showNav)}><Link href="/">HOME</Link></li>
            <li  onClick={()=>setshowNav(!showNav)} ><Link href="/find-salons">FIND SALONS</Link></li>
            {session ? <li onClick={()=>setshowNav(!showNav)} ><Link href="/profile">PROFILE</Link></li> : <li onClick={()=>setshowNav(!showNav)}><Link href="/login">LOGIN</Link></li> }
            <li onClick={()=>setshowNav(!showNav)} ><Link href="/create-account">REGISTER</Link></li>
            <li onClick={()=>setshowNav(!showNav)} ><Link href="/">ABOUT US</Link></li>
          </ul>}
  </div>
}

export default NabvarMobile