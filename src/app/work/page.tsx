import type { Metadata } from "next";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects, workFilters } from "@/lib/projects";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "A curated archive of Data Analysis and Machine Learning projects.",
  openGraph: {
    title: "Selected Work | Palash Chaturvedi",
    description: "A curated archive of Data Analysis and Machine Learning projects.",
  },
};

export default function WorkPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.left}>
          <SectionLabel label="Selected" />
          <h1 className={styles.heading}>Work</h1>
        </div>

        <div className={styles.filters} aria-label="Project filters">
          {workFilters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={`${styles.filter} ${index === 0 ? styles.active : ""}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className={styles.gridSection}>
        <ProjectGrid projects={projects} mode="work" />
      </section>
    </>
  );
}
