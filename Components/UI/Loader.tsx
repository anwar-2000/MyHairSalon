import React from 'react'
import Image from 'next/image'

import classes from "@/styles/loader.module.css"

const Loader = () => {
  return <div className={classes.loader__container}>
    <Image src='/loader.png' alt='loader' fill/>
  </div>
}

export default Loader