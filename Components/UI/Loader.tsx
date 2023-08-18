"use client"
import React from 'react';
import { motion } from 'framer-motion';
import classes from '@/styles/loader.module.css';
import Image from 'next/image';

const SkeletonLoader = () => {
  const animationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <div className={classes.loader__container}>
      <motion.div initial="hidden" animate="visible" variants={animationVariants}>
        <Image alt="Mon Salon Connect" src="/logo.png" width={350} height={90} />
      </motion.div>
    </div>
  );
};

export default SkeletonLoader;
