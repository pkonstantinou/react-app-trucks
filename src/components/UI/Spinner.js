import React from 'react';
import { motion } from 'framer-motion';

import classes from './Spinner.module.css';

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1
    }
  },
  end: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const loadingCircleVariants = {
  start: {
    y: '0%'
  },
  end: {
    y: '100%'
  }
};

const loadingCircleTransition = {
  duration: 0.4,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut'
};

const Spinner = ({ className }) => {
  return (
    <motion.div
      className={`${className} ${classes.spinner}`}
      variants={loadingContainerVariants}
      initial='start'
      animate='end'
    >
      <motion.span
        className={classes['spinner-circle']}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        className={classes['spinner-circle']}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        className={classes['spinner-circle']}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
};

export default Spinner;
