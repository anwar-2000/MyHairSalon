import React from 'react'
import classes from "@/styles/navbar.module.css"
import Link from 'next/link'
import {BiMenuAltRight} from "react-icons/bi"
import { getCurrentUser } from '@/utils/session'

const Navbar = async () => {
        const session = await getCurrentUser();

  return <nav className={classes.navbar__container}>
            <div className={classes.nav__firstDiv}>
                    <div className={classes.logo}>
                            <h1>MYHAIRSALON</h1>
                    </div>
                    <div className={classes.list}>
                            <Link href="">About Us</Link>
                            <Link href="">Contact Us</Link>
                            <Link href="/find-salons">Find Salons</Link>
                    </div>
            </div>
            <div className={classes.nav__secondDiv}>
                    <Link href="/login" >Login</Link>
                   {session ? <Link href="/profile" >Profile</Link> : <Link href="/create-account" >Create Account</Link>}
            </div>
            <div className={classes.hamburger}>
                 <BiMenuAltRight color='black' size={21}/>
            </div>
  </nav>
}

export default Navbar