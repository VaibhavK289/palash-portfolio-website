"use client";

import { motion } from "framer-motion";
import styles from "./BackgroundShapes.module.css";

export function BackgroundShapes() {
  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.grid} />
      
      <motion.div
        className={`${styles.shape} ${styles.shape1}`}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className={`${styles.shape} ${styles.shape2}`}
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className={`${styles.shape} ${styles.shape3}`}
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}