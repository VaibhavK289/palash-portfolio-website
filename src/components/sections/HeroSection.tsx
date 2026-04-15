"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { BackgroundShapes } from "@/components/animations/BackgroundShapes";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <BackgroundShapes />
      <div className={styles.left}>
        <SectionLabel label="Data Analyst & ML Engineer" />
        <AnimatedText
          as="h1"
          text="Turning complex data into measurable business advantage."
          className={styles.headline}
        />
        <p className={styles.copy}>
          Data Analyst and Machine Learning Engineer focused on decision intelligence, predictive modeling, and production-ready analytics workflows.
        </p>

        <motion.div 
          className={styles.proofGrid}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.7 } }
          }}
        >
          <motion.article className={styles.proofCard} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}>
            <p className={styles.proofValue}>85%</p>
            <p className={styles.proofLabel}>Forecast precision</p>
          </motion.article>
          <motion.article className={styles.proofCard} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}>
            <p className={styles.proofValue}>90%</p>
            <p className={styles.proofLabel}>Caption accuracy</p>
          </motion.article>
          <motion.article className={styles.proofCard} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}>
            <p className={styles.proofValue}>30%</p>
            <p className={styles.proofLabel}>Faster analytics cycles</p>
          </motion.article>
        </motion.div>

        <div className={styles.actions}>
          <MagneticButton>
            <Button href="/work" variant="primary">
              View Work
            </Button>
          </MagneticButton>
          <Button href="/contact" variant="ghost">
            Start a Project <ArrowUpRight size={13} />
          </Button>
          <a href="/Resume.pdf" className={styles.resumeLink} target="_blank" rel="noopener noreferrer">
            Resume <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      <div className={styles.right} aria-hidden="true">
        <span className={styles.year}>2024</span>
      </div>
    </section>
  );
}
