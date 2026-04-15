"use client";

import { motion } from "framer-motion";
import styles from "./BackgroundShapes.module.css";

export function BackgroundShapes() {
  return (
    <motion.div 
      className={styles.container} 
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 2 }}
    >
      <motion.div
        className={styles.mesh}
        animate={{
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}