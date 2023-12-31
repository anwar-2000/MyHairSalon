
import React from 'react'
import classes from "@/styles/navbar.module.css"
import Link from 'next/link'
import { getCurrentUser } from '@/utils/session'
import NabvarMobile from './NabvarMobile'
import Image from "next/image"


const Navbar = async () => {
        const session = await getCurrentUser();

  return <nav className={classes.navbar__container}>
            <div className={classes.nav__firstDiv}>
                    <div className={classes.logo}>
                            <Image src={'/logo.png'} alt={'MonSalonConnect'} width={200} height={70} priority/>
                    </div>
                    <div className={classes.list}>
                            <Link href="/tarifs">Nos Tarifs</Link>
                            <Link href="/find-salons">Trouver des salons</Link>
                    </div>
            </div>
            <div className={classes.nav__secondDiv}>
                    <Link href="/login" >Se connecter</Link>
                   {session ? <Link href="/profile" >Profile</Link> : <Link href="/create-account" >Créer un compte</Link>}
            </div>
            <div className={classes.hamburger} style={{zIndex : 160}}>
                 <NabvarMobile session={session} />
            </div>
  </nav>
}

export default Navbar