"use client";

import { motion } from "framer-motion";
import { stagger } from "@/lib/animations";
import styles from "./AnimatedText.module.css";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
}

export function AnimatedText({ text, className, as = "h1" }: AnimatedTextProps) {
  const words = text.split(" ");
  const MotionTag = motion[as as "h1"];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: 0.4,
            staggerChildren: stagger.words,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className={styles.clip}>
          <motion.span
            className={styles.word}
            variants={{
              hidden: { y: "110%" },
              visible: {
                y: "0%",
                transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
