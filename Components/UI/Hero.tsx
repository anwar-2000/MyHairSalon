"use client"
import React from 'react'
import { motion } from 'framer-motion';
import classes from "@/styles/hero.module.css"


const Hero = () => {
     const bounceVariants = {
          initial: { y: -10, opacity: 0 , x : 30},
          animate: { y: -30, x: 30 , opacity: 1, transition: { type: 'spring', duration: 1.2 } },
        };
        const bounceVariantsButton = {
          initial: {  opacity: 0 },
          animate: {  opacity: 1, transition: { type: 'spring', duration: 1.8 } },
        };
        const bounceVariantsVideo = {
          initial: { y: 30, opacity: 0 },
          animate: { y: -10, opacity: 1, transition: { type: 'spring', duration: 3 } },
        };

  return <div className={classes.hero__container}>
            <motion.div className={classes.hero__first} initial="initial" animate="animate" variants={bounceVariants}>
            <motion.h1 variants={bounceVariants}>
                          Find and Book Appointments at the Best Hair Salons Near You
                    </motion.h1>
                <br />
        <motion.button variants={bounceVariantsButton}>Book Now!</motion.button>
                </motion.div>
            <motion.div className={classes.hero__video} initial="initial" animate="animate" variants={bounceVariantsVideo}>
                 <div className={classes.video}>Video</div>
            </motion.div>
  </div>
}

export default Hero;
