import { ArrowUpRight } from "lucide-react";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { BackgroundShapes } from "@/components/animations/BackgroundShapes";
import { Marquee } from "@/components/animations/Marquee";
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
        <ul className={styles.highlights}>
          <li>85% precision in startup profit forecasting</li>
          <li>90% caption accuracy in CNN-LSTM image captioning</li>
          <li>30% faster analytics pipelines with Python tooling</li>
        </ul>
        <div className={styles.actions}>
          <MagneticButton>
            <Button href="/work" variant="primary">
              View Work
            </Button>
          </MagneticButton>
          <Button href="/contact" variant="ghost">
            Start a Project <ArrowUpRight size={13} />
          </Button>
          <Button href="/Resume.pdf" variant="ghost" target="_blank" rel="noopener noreferrer">
            Resume <ArrowUpRight size={13} />
          </Button>
        </div>

        <Marquee className={styles.metricsMarquee} pauseOnHover repeat={5}>
          <span className={styles.metricItem}>85% Forecast Precision</span>
          <span className={styles.metricItem}>30% Faster Analytics</span>
          <span className={styles.metricItem}>90% Caption Accuracy</span>
          <span className={styles.metricItem}>20% Relevance Improvement</span>
        </Marquee>
      </div>
      <div className={styles.right} aria-hidden="true">
        <span className={styles.year}>2024</span>
      </div>
    </section>
  );
}
