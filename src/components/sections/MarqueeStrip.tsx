import { Marquee } from "@/components/animations/Marquee";
import styles from "./MarqueeStrip.module.css";

const items = [
  "Predictive Modeling",
  "ETL Pipelines",
  "Machine Learning",
  "Data Strategy",
  "Statistical Analysis",
  "Dashboarding",
  "Big Data",
];

export function MarqueeStrip() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <Marquee pauseOnHover className={styles.marqueeBox} repeat={6}>
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className={styles.item}>
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
