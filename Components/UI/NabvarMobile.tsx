"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classes from '@/styles/navbarmobile.module.css';
import { BiMenuAltRight } from 'react-icons/bi';
import Link from 'next/link';

const NabvarMobile = ({ session }: any) => {
  const [showNav, setShowNav] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 , x:0 },
    visible: { opacity: 1, y: 0 , x:-80 },
  };

  return (
    <div className={classes.navbarmobile__container}>
      <div className={classes.main}>
        <BiMenuAltRight color="#535353" size={21} onClick={() => setShowNav(!showNav)} />
      </div>

      <AnimatePresence>
        {showNav && (
          <motion.ul
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={classes.menu}
          >
            <li onClick={() => setShowNav(!showNav)}>
              <Link href="/">HOME</Link>
            </li>
            <li onClick={() => setShowNav(!showNav)}>
              <Link href="/find-salons">Trouver des salons</Link>
            </li>
            {session ? (
              <li onClick={() => setShowNav(!showNav)}>
                <Link href="/profile">Mon profile</Link>
              </li>
            ) : (
              <li onClick={() => setShowNav(!showNav)}>
                <Link href="/login">Se Connecter</Link>
              </li>
            )}
            <li onClick={() => setShowNav(!showNav)}>
              <Link href="/create-account">Créer un compte</Link>
            </li>
            <li onClick={() => setShowNav(!showNav)}>
              <Link href="/tarifs">Nos Tarifs</Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NabvarMobile;
