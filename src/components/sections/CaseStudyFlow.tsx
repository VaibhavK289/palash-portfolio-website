import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import styles from "./CaseStudyFlow.module.css";

const flow = [
  {
    step: "01",
    title: "Problem",
    detail: "Define a measurable business objective and data constraints before model training begins.",
  },
  {
    step: "02",
    title: "Method",
    detail: "Build and validate multiple models, then optimize preprocessing and hyperparameters.",
  },
  {
    step: "03",
    title: "Outcome",
    detail: "Ship interpretable outcomes with clear KPIs like 85% precision or 90% caption accuracy.",
  },
];

export function CaseStudyFlow() {
  return (
    <section className={styles.section}>
      <RevealOnScroll className={styles.head}>
        <SectionLabel label="Case Study Method" />
        <h2 className={styles.heading}>How I execute from data chaos to production clarity.</h2>
      </RevealOnScroll>

      <RevealOnScroll className={styles.grid}>
        {flow.map((item) => (
          <article key={item.step} className={styles.card}>
            <p className={styles.step}>{item.step}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.detail}>{item.detail}</p>
          </article>
        ))}
      </RevealOnScroll>
    </section>
  );
}
