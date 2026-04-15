import type { Metadata } from "next";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/animations/SpotlightCard";
import { Marquee } from "@/components/animations/Marquee";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Data Analyst and Machine Learning Engineer background, principles, and philosophy.",
  openGraph: {
    title: "About | Palash Chaturvedi",
    description: "Data Analyst and Machine Learning Engineer background, principles, and philosophy.",
  },
};

const timeline = [
  { year: "2024", title: "Data Analyst @ BluePlanet Infosolutions", detail: "Developing data pipelines, automating reports, and building predictive models." },
  { year: "2021", title: "B.Tech in Computer Science @ VIT Bhopal", detail: "Specializing in Data Science and Core Computer Science concepts." },
  { year: "2024", title: "BS in Data Science & Applications @ IIT Madras", detail: "Deep dive into machine learning, statistics, and advanced data analysis." },
];

const values = [
  { title: "Data-driven decisions", detail: "I rely on empirical evidence and statistical rigor to guide strategies." },
  { title: "Scalable models", detail: "I build machine learning architectures designed to perform efficiently at scale." },
  { title: "Continuous learning", detail: "The field of AI and Data Science evolves rapidly, and I adapt with it." },
];

const wins = [
  "Improved caption relevance by 20% with tuned CNN-LSTM architecture.",
  "Reached 90% caption accuracy on AI Image Captioning benchmarks.",
  "Achieved 85% precision in startup profit forecasting models.",
  "Reduced data processing time by 30% through optimized preprocessing pipelines.",
];

export default function AboutPage() {
  return (
    <>
      <section className={styles.split}>
        <div className={styles.left}>
          <SectionLabel label="About" />
          <h1 className={styles.heading}>Transforming complex data into actionable business intelligence.</h1>
          <p>
            I am a Data Analyst and Machine Learning Engineer with a passion for extracting meaning from numbers and building predictive models.
          </p>
          <p>
            Currently, I am pursuing my B.Tech at VIT Bhopal alongside a BS in Data Science from IIT Madras, combining robust theoretical knowledge with practical applications.
          </p>
          <p>
            My professional experience at BluePlanet Infosolutions involves driving efficiency through data visualization, database management, and intelligent automation.
          </p>

          <div className={styles.timeline}>
            {timeline.map((entry) => (
              <article key={entry.year + entry.title} className={styles.timelineItem}>
                <span>{entry.year}</span>
                <div>
                  <h2>{entry.title}</h2>
                  <p>{entry.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className={styles.right}>
          <div className={styles.frame}>
            <Image src="/vercel.svg" alt="Portrait mark for Palash" fill className={styles.image} />
          </div>
          <div className={styles.currently}>
            <p className={styles.currentlyLabel}>Currently</p>
            <p>Working as a Data Analyst at BluePlanet and pursuing Data Science at IIT Madras.</p>
          </div>
        </aside>
      </section>

      <section className={styles.valuesSection}>
        <SectionLabel label="Core Principles" />
        <div className={styles.values}>
          {values.map((value) => (
            <SpotlightCard key={value.title} className={styles.valueCard}>
              <h2>{value.title}</h2>
              <p>{value.detail}</p>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <section className={styles.winsSection}>
        <SectionLabel label="Evidence" />
        <h2 className={styles.winsHeading}>Quantified outcomes delivered through analytics and ML.</h2>
        <div className={styles.winsGrid}>
          {wins.map((win) => (
            <article key={win} className={styles.winCard}>
              <p>{win}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.skillsSection}>
        <SectionLabel label="Tech Stack" />
        <Marquee className={styles.marqueeBox} pauseOnHover repeat={4}>
          <span className={styles.skillItem}>Python</span>
          <span className={styles.skillItem}>SQL</span>
          <span className={styles.skillItem}>TensorFlow</span>
          <span className={styles.skillItem}>PyTorch</span>
          <span className={styles.skillItem}>Scikit-Learn</span>
          <span className={styles.skillItem}>Pandas</span>
          <span className={styles.skillItem}>NumPy</span>
          <span className={styles.skillItem}>Matplotlib</span>
          <span className={styles.skillItem}>Tableau</span>
          <span className={styles.skillItem}>AWS</span>
          <span className={styles.skillItem}>Docker</span>
          <span className={styles.skillItem}>Git</span>
        </Marquee>
        <Marquee className={styles.marqueeBox} pauseOnHover reverse repeat={4}>
          <span className={styles.skillItem}>Data Visualization</span>
          <span className={styles.skillItem}>Predictive Modeling</span>
          <span className={styles.skillItem}>Statistical Analysis</span>
          <span className={styles.skillItem}>ETL Pipelines</span>
          <span className={styles.skillItem}>Deep Learning</span>
          <span className={styles.skillItem}>NLP</span>
          <span className={styles.skillItem}>Time Series</span>
          <span className={styles.skillItem}>A/B Testing</span>
        </Marquee>
      </section>
    </>
  );
}
