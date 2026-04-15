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
        <div className={styles.actions}>
          <MagneticButton>
            <Button href="/work" variant="primary">
              View Work
            </Button>
          </MagneticButton>
          <Button href="/contact" variant="ghost">
            Start a Project <ArrowUpRight size={13} />
          </Button>
          <Button href="/Palash_Chaturvedi_Resume.pdf" variant="ghost" target="_blank" rel="noopener noreferrer">
            Resume <ArrowUpRight size={13} />
          </Button>
        </div>
      </div>
      <div className={styles.right} aria-hidden="true">
        <span className={styles.year}>2024</span>
      </div>
    </section>
  );
}
