"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import the motion component
import classes from '@/styles/testomenials.module.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const testimonialsData = [
        {
          text: "Je suis très satisfait du service offert par ce site. En tant que propriétaire de salon, cela a simplifié la gestion de mes rendez-vous.",
          author: "Alexandre Gagnon, Propriétaire de Salon",
        },
        {
          text: "En tant que client, j'ai trouvé ce site extrêmement utile pour réserver des rendez-vous dans les salons de mon choix. C'est rapide et pratique.",
          author: "Sophie Dubois, Cliente Satisfaite",
        },
        {
          text: "Grâce à cette plateforme, j'ai pu augmenter ma clientèle en ligne. Les fonctionnalités pour les propriétaires de salon sont exceptionnelles.",
          author: "Marie Lambert, Coiffeuse Indépendante",
        },
        {
          text: "Ce site a changé la façon dont je gère mon emploi du temps en tant que coiffeur. C'est simple et efficace.",
          author: "Pierre Martin, Coiffeur Passionné",
        },
        {
          text: "J'apprécie la facilité de navigation et la convivialité de ce site. En tant que client, je recommande fortement de l'utiliser.",
          author: "Émilie Tremblay, Cliente Heureuse",
        },
      ];
      

const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[currentTestimonialIndex];

  return (
    <div className={classes.testomenials__container}>
      <div className={classes.arrows}>
        <motion.div // Add motion.div for animations
          whileTap={{ scale: 0.9 }} // Animation when clicked
          className={classes.arrow}
          onClick={prevTestimonial}
        >
          <BsArrowLeft color="black" size={25} />
        </motion.div>
        <motion.div // Add motion.div for animations
          whileTap={{ scale: 0.9 }} // Animation when clicked
          className={classes.arrow}
          onClick={nextTestimonial}
        >
          <BsArrowRight color="black" size={25} />
        </motion.div>
      </div>
      <motion.div // Add motion.div for animations
        initial={{ opacity: 0, y: -20 }} // Initial animation
        animate={{ opacity: 1, y: 0 }} // Animation on load
        transition={{ duration: 0.5 }} // Animation duration
        className={classes.testomenial}
      >
        <p>{currentTestimonial.text}</p>
        <small>- {currentTestimonial.author} -</small>
      </motion.div>
    </div>
  );
};

export default Testimonials;
