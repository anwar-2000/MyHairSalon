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

  return <motion.div className={classes.hero__container}>
            <motion.div className={classes.hero__first} initial="initial" animate="animate" variants={bounceVariants}>
            <motion.h1 variants={bounceVariants}>
            Trouvez Votre Salon de Coiffure Idéal et Réservez Votre Prochain Rendez-vous                     </motion.h1>
                <br />
        <motion.button variants={bounceVariantsButton}>Explorez !</motion.button>
                </motion.div>
            <motion.div className={classes.hero__video} initial="initial" animate="animate" variants={bounceVariantsVideo}>
                 <video autoPlay muted loop src="https://res.cloudinary.com/dbaiwyu3e/video/upload/v1692349076/E1D72776-AB3A-4ED9-AA1D-9AE72217944B_ndp05n.mp4" className={classes.video}></video>
            </motion.div>
  </motion.div>
}

export default Hero;
