"use client"
import React from 'react';
import { motion } from 'framer-motion';
import classes from '@/styles/hero.module.css';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  const bounceVariants = {
    initial: { y: -10, opacity: 0, x: 30 },
    animate: { y: -30, x: 30, opacity: 1, transition: { type: 'spring', duration: 1.2 } },
  };

  const bounceVariantsButton = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { type: 'spring', duration: 1.8 } },
  };

  const bounceVariantsVideo = {
    initial: { y: 30, opacity: 0 },
    animate: { y: -20, opacity: 1, transition: { type: 'spring', duration: 3 } },
  };
  return (
    <motion.div className={classes.hero__container}>
      <motion.div className={classes.hero__first} initial="initial" animate="animate" variants={bounceVariants}>
        <motion.h1 variants={bounceVariants}>
          Trouvez Votre Salon de Coiffure Idéal et Réservez Votre Prochain Rendez-vous
        </motion.h1>
        <br />
        <motion.button variants={bounceVariantsButton} onClick={() => router.push('/find-salons')}>
          Explorez !
        </motion.button>
      </motion.div>
      <motion.div className={classes.hero__video} initial="initial" animate="animate" variants={bounceVariantsVideo}>
        <motion.video
          controls
          src="https://res.cloudinary.com/dbaiwyu3e/video/upload/v1692630381/6F87A678-12E0-4796-A670-06193CC40629_msqjoe.mp4"
          className={classes.video}
          style={{ width: '100%' }} 
        ></motion.video>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

