
import React from 'react'
import classes from "@/styles/navbar.module.css"
import Link from 'next/link'
import { getCurrentUser } from '@/utils/session'
import NabvarMobile from './NabvarMobile'

const Navbar = async () => {
        const session = await getCurrentUser();

  return <nav className={classes.navbar__container}>
            <div className={classes.nav__firstDiv}>
                    <div className={classes.logo}>
                            <h1>MonSalonConnect</h1>
                    </div>
                    <div className={classes.list}>
                            <Link href="">À propos de nous</Link>
                            <Link href="">Contactez-nous</Link>
                            <Link href="/find-salons">Trouver des salons</Link>
                    </div>
            </div>
            <div className={classes.nav__secondDiv}>
                    <Link href="/login" >Login</Link>
                   {session ? <Link href="/profile" >Profile</Link> : <Link href="/create-account" >Créer un compte</Link>}
            </div>
            <div className={classes.hamburger} style={{zIndex : 160}}>
                 <NabvarMobile session={session} />
            </div>
  </nav>
}

export default Navbar