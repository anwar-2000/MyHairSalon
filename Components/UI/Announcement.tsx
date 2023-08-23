import React from 'react'
import classes from "@/styles/announcement.module.css"
import Link from 'next/link';


const Announcement = ({text , lien} : {text : string; lien? : string}) => {
  return <div className={classes.announcement__container}>
        <Link href={lien || '/'}>&#127881;{text}&#127881;</Link>
  </div>
}

export default Announcement