import React from 'react'
import classes from "@/styles/footer.module.css"
import Link from 'next/link'
import {BsFacebook , BsInstagram } from "react-icons/bs"

const Footer = () => {
  return <div className={classes.footer_container}>
            <Link href="">Mon Salon Connect</Link>
            <Link href="">@copyright 2023</Link>
            <div className={classes.icons}>
                  <BsFacebook color='black' size={20}/>
                  <BsInstagram color='black' size={20} />
            </div>
  </div>
}

export default Footer